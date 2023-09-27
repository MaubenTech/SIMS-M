package com.ixorasoftware.sims.user;

import java.util.List;

public record UserDTO(
    Integer id,
    String firstName,
    String middleName,
    String lastName,
    String gender,
    String profileImageId,
    String username,
    String password,
    List<String> roles)
{
    public UserDTO(String firstName, String middleName, String lastName, String profileImageId)
    {
        this(firstName, middleName, lastName, null, profileImageId, null, null, null);
    }

    public UserDTO(String firstName, String middleName, String lastName, String gender, String profileImageId,
                   String username, String password, List<String> roles)
    {
        this(null, firstName, middleName, lastName, gender, profileImageId, username, password, roles);
    }
}
