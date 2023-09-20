package com.ixorasoftware.sims.user;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collection;

@Entity
@Table(name = "roles")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Role
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String name;

    @ManyToMany
    @JoinTable(
        name = "role_permissions",
        joinColumns = @JoinColumn(
            name = "role_id", referencedColumnName = "id"),
        inverseJoinColumns = @JoinColumn(
            name = "permission_id", referencedColumnName = "id"))
    private Collection<Permission> permissions;

    public Role(String name, Collection<Permission> permissions)
    {
        this.name = name;
        this.permissions = permissions;
    }
}
