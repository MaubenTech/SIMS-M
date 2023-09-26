package com.ixorasoftware.sims.user;

import java.util.List;

public record UserDTO(
    Integer id,
    String firstName,
    String middleName,
    String lastName,
    String gender,
    String profileImageId,
    String email,
    String password,
    List<String> roles)
{
    public UserDTO(String firstName, String middleName, String lastName, String gender, String profileImageId, String email)
    {
        this(firstName, middleName, lastName, gender, profileImageId, email, null, null);
    }

    public UserDTO(String firstName, String middleName, String lastName, String gender, String profileImageId,
                   String email, String password, List<String> roles)
    {
        this(null, firstName, middleName, lastName, gender, profileImageId, email, password, roles);
    }
}
