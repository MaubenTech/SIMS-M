package com.ixorasoftware.sims.user;

import jakarta.persistence.*;
import lombok.Data;
import lombok.AllArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;
import java.util.stream.Collectors;

@Entity
@Table(
    name = "users",
    uniqueConstraints = {
        @UniqueConstraint(
            name = "user_email_unique",
            columnNames = "email"
        ),
        @UniqueConstraint(
            name = "profile_image_id_unique",
            columnNames = "profileImageId"
        )
    }
)
@Data
@AllArgsConstructor
public class User implements UserDetails
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false)
    private String firstName;

    private String middleName;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Column(nullable = false)
    private String password;

    private String profileImageId;

    @ManyToMany
    @JoinTable(
        name = "user_roles",
        joinColumns = @JoinColumn(
            name = "user_id", referencedColumnName = "id"),
        inverseJoinColumns = @JoinColumn(
            name = "role_id", referencedColumnName = "id"))
    private Collection<Role> roles;

    private boolean isAccountNonExpired;
    private boolean isAccountNonLocked;
    private boolean isCredentialsNonExpired;
    private boolean isEnabled;

    public User()
    {
        isAccountNonExpired = true;
        isAccountNonLocked = true;
        isCredentialsNonExpired = true;
        isEnabled = true;
    }

    public User(String firstName, String middleName, String lastName, String email, Gender gender, String password)
    {
        this();
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.password = password;
    }

    public User(String firstName, String middleName, String lastName, String email, Gender gender, String password, String profileImageId)
    {
        this();
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.password = password;
        this.profileImageId = profileImageId;
    }

    @Override
    public String getUsername()
    {
        return email;
    }

    @Override
    public String getPassword()
    {
        return password;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities()
    {
        Set<GrantedAuthority> authorities = new HashSet<>();
        for(Role role : roles)
        {
            authorities.add(new SimpleGrantedAuthority(role.getName()));
            authorities.addAll(
                role.getPermissions().stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getName()))
                .collect(Collectors.toSet())
            );
        }

        return authorities;
    }

}
