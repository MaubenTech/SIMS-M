package com.ixorasoftware.sims.user;

import java.util.List;

public record UserRegistrationRequest(
    String firstName,
    String middleName,
    String lastName,
    String gender,
    String profileImageId,
    String username,
    String password,
    List<String> roles
)
{
}
