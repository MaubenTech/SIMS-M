package com.ixorasoftware.sims.user;

import java.util.List;

public record UserUpdateRequest(
    String firstName,
    String middleName,
    String lastName,
    String profileImageId
)
{
}
