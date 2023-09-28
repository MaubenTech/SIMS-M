package com.ixorasoftware.sims.user;

import com.ixorasoftware.sims.exception.DuplicateResourceException;
import com.ixorasoftware.sims.exception.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService
{
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserDTOMapper userDTOMapper;


    public UserService(UserRepository userRepository,
                       RoleRepository roleRepository, PasswordEncoder passwordEncoder,
                       UserDTOMapper userDTOMapper)
    {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.userDTOMapper = userDTOMapper;
    }

    public void addUser(UserRegistrationRequest userRegistrationRequest)
    {
        if(userRepository.existsByUsername(userRegistrationRequest.username()))
            throw new DuplicateResourceException("User with username [%s] already exists".formatted(userRegistrationRequest.username()));

        List<Role> roles = userRegistrationRequest.roles().stream()
            .map(roleName -> roleRepository.findByName(roleName.toUpperCase())
                .orElseThrow(() -> new ResourceNotFoundException("Role [%s] not found".formatted(roleName))))
            .collect(Collectors.toList());

        User user = new User(
            userRegistrationRequest.firstName(),
            userRegistrationRequest.middleName(),
            userRegistrationRequest.lastName(),
            Gender.fromName(userRegistrationRequest.gender()),
            userRegistrationRequest.profileImageId(),
            userRegistrationRequest.username(),
            passwordEncoder.encode(userRegistrationRequest.password()),
            roles
            );

        userRepository.save(user);
    }

    public UserDTO getUserByUsername(String username)
    {
        return userRepository.findByUsername(username)
            .map(userDTOMapper)
            .orElseThrow(() -> new ResourceNotFoundException("User with username [%s] not found".formatted(username)));
    }

    public UserDTO getUserById(Integer id)
    {
        return userRepository.findById(id)
            .map(userDTOMapper)
            .orElseThrow(() -> new ResourceNotFoundException("User with id [%s] not found".formatted(id)));
    }

    public List<UserDTO> getAllUsers()
    {
        return userRepository.findAll()
            .stream()
            .map(userDTOMapper)
            .collect(Collectors.toList());
    }

    public void updateUser(Integer id, UserUpdateRequest updatedUser)
    {
        User user;
        try{
            user = userRepository.getReferenceById(id);
        }catch(EntityNotFoundException ex){
            throw new ResourceNotFoundException("User with id [%s] not found".formatted(id));
        }

        boolean changes = false;

        if(updatedUser.firstName() != null && !updatedUser.firstName().equals(user.getFirstName()))
        {
            user.setFirstName(updatedUser.firstName());
            changes = true;
        }
        if(updatedUser.middleName() != null && !updatedUser.middleName().equals(user.getMiddleName()))
        {
            user.setMiddleName(updatedUser.middleName());
            changes = true;
        }
        if(updatedUser.lastName() != null && !updatedUser.lastName().equals(user.getLastName()))
        {
            user.setLastName(updatedUser.lastName());
            changes = true;
        }
        if(updatedUser.profileImageId() != null &&
            !updatedUser.profileImageId().equals(user.getProfileImageId()))
        {
            user.setProfileImageId(updatedUser.profileImageId());
            changes = true;
        }

        if(changes)
            userRepository.save(user);
    }

    public void deleteUserById(Integer id)
    {
        checkIfUserExistsOrThrow(id);
        userRepository.deleteById(id);
    }

    private void checkIfUserExistsOrThrow(Integer id)
    {
        if(!userRepository.existsById(id))
            throw new ResourceNotFoundException("User with id [%s] not found".formatted(id));
    }
}
