package com.ixorasoftware.sims.user;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "roles")
public class Role
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String name;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "role_permissions",
        joinColumns = @JoinColumn(
            name = "role_id", referencedColumnName = "id"),
        inverseJoinColumns = @JoinColumn(
            name = "permission_id", referencedColumnName = "id"))
    private Collection<Permission> permissions;

    public Role()
    {
    }

    public Role(String name, Collection<Permission> permissions)
    {
        this.name = name;
        this.permissions = permissions;
    }

    public Integer getId()
    {
        return id;
    }

    public void setId(Integer id)
    {
        this.id = id;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public Collection<Permission> getPermissions()
    {
        return permissions;
    }

    public void setPermissions(Collection<Permission> permissions)
    {
        this.permissions = permissions;
    }

    @Override
    public boolean equals(Object o)
    {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        Role role = (Role) o;
        return Objects.equals(id, role.id) && Objects.equals(name, role.name) && Objects.equals(permissions, role.permissions);
    }

    @Override
    public int hashCode()
    {
        return Objects.hash(id, name, permissions);
    }

    @Override
    public String toString()
    {
        return "Role{" +
            "id=" + id +
            ", name='" + name + '\'' +
            ", permissions=" + permissions +
            '}';
    }
}
