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

    public void addUser(UserDTO userDTO)
    {
        if(userRepository.existsByEmail(userDTO.email()))
            throw new DuplicateResourceException("User with email %s already exists".formatted(userDTO.email()));

        List<Role> roles = userDTO.roles().stream()
            .map(roleName -> roleRepository.findByName(roleName.toUpperCase())
                .orElseThrow(() -> new ResourceNotFoundException("Role [%s] not found".formatted(roleName))))
            .collect(Collectors.toList());

        User user = new User(
            userDTO.firstName(),
            userDTO.middleName(),
            userDTO.lastName(),
            Gender.fromName(userDTO.gender()),
            userDTO.profileImageId(),
            userDTO.email(),
            passwordEncoder.encode(userDTO.password()),
            roles
            );

        userRepository.save(user);
    }

    public UserDTO getUserByEmail(String email)
    {
        return userRepository.findByEmail(email)
            .map(userDTOMapper)
            .orElseThrow(() -> new ResourceNotFoundException("User with email %s not found".formatted(email)));
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

    private void updateUser(Integer id, UserDTO updatedUser)
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
        if(updatedUser.email() != null && !updatedUser.email().equals(user.getEmail()))
        {
            user.setEmail(updatedUser.email());
            changes = true;
        }
        if(updatedUser.gender() != null && !updatedUser.gender().equalsIgnoreCase(user.getGender().getName()))
        {
            user.setGender(Gender.fromName(updatedUser.gender()));
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
