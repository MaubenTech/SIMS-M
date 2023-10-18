package com.ixorasoftware.sims.user;

import jakarta.persistence.*;
import lombok.Data;
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
            name = "username_unique",
            columnNames = "username"
        ),
        @UniqueConstraint(
            name = "profile_image_id_unique",
            columnNames = "profileImageId"
        )
    }
)
@Data
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
    @Enumerated(EnumType.STRING)
    private Gender gender;

    private String profileImageId;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;

    @ManyToMany(fetch = FetchType.EAGER)
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
        roles = new ArrayList<>();
    }

    public User(String firstName, String middleName, String lastName, Gender gender, String username, String password, List<Role> roles)
    {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.gender = gender;
        this.username = username;
        this.password = password;
        this.roles = roles;

        isAccountNonExpired = true;
        isAccountNonLocked = true;
        isCredentialsNonExpired = true;
        isEnabled = true;
    }

    public User(String firstName, String middleName, String lastName, Gender gender, String profileImageId, String username, String password, List<Role> roles)
    {
        this(firstName, middleName, lastName, gender, username, password, roles);
        this.profileImageId = profileImageId;
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
