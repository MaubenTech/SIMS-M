package com.ixorasoftware.sims.user;

import org.springframework.stereotype.Service;

import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class UserDTOMapper implements Function<User, UserDTO>
{
    @Override
    public UserDTO apply(User user)
    {
        return new UserDTO(
            user.getId(),
            user.getFirstName(),
            user.getMiddleName(),
            user.getLastName(),
            user.getEmail(),
            user.getGender().getName(),
            user.getProfileImageId(),
            null,
            user.getRoles()
                .stream()
                .map(Role::getName)
                .collect(Collectors.toList())
        );
    }
}
