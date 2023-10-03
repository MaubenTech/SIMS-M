package com.ixorasoftware.sims.user;

import com.ixorasoftware.sims.exception.DuplicateResourceException;
import com.ixorasoftware.sims.exception.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import static org.mockito.BDDMockito.given;

import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class UserServiceTest
{
    private static final String ROLE_ADMIN = "ROLE_ADMIN";
    private static final String ROLE_TEACHER = "ROLE_TEACHER";

    @InjectMocks
    private UserService userService;

    @Mock
    private UserRepository userRepository;

    @Mock
    private RoleRepository roleRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @Mock
    private UserDTOMapper userDTOMapper;

    @BeforeEach
    void setUp()
    {

    }

    @Test
    void addUser_shouldAddUser()
    {
        // Given
        UserRegistrationRequest newUser = new UserRegistrationRequest(
            "Jane", "Constance", "Doe",
            "Female", "path/to/image",
            "janedoe", "secret",
            List.of(ROLE_ADMIN));

        String pwHash = "l987jHT%^&*65rfgh8";

        given(userRepository.existsByUsername(newUser.username())).willReturn(false);
        given(roleRepository.findByName(ROLE_ADMIN))
            .willReturn(
                Optional.of(getRoles().get(ROLE_ADMIN))
            );
        given(passwordEncoder.encode(newUser.password())).willReturn(pwHash);

        // When
        userService.addUser(newUser);

        // Then
        ArgumentCaptor<User> userArgumentCaptor = ArgumentCaptor.forClass(User.class);

        verify(userRepository).save(userArgumentCaptor.capture());

        User savedUser = userArgumentCaptor.getValue();

        assertEquals(newUser.firstName(), savedUser.getFirstName());
        assertEquals(newUser.lastName(), savedUser.getLastName());
        assertEquals(pwHash, savedUser.getPassword());
    }

    @Test
    void addUser_whenUsernameExists_shouldThrow()
    {
        // Given
        // When
        UserRegistrationRequest newUser = new UserRegistrationRequest(
            "Jane", "Constance", "Doe",
            "Female", "path/to/image",
            "janedoe", "secret",
            List.of(ROLE_ADMIN));

        given(userRepository.existsByUsername(newUser.username())).willReturn(true);

        // Then
        assertThrows(DuplicateResourceException.class,
                     () -> userService.addUser(newUser),
                     "User with username [%s] already exists".formatted(newUser.username()));
    }

    @Test
    void getUserByUsername_shouldGetUser()
    {
        String username = "janedoe";
        User user = getUser();
        UserDTO expected = getUserDTO();

        given(userRepository.findByUsername(username)).willReturn(Optional.of(user));
        given(userDTOMapper.apply(user)).willReturn(expected);

        UserDTO actual = userService.getUserByUsername(username);

        assertEquals(expected, actual);
    }

    @Test
    void getUserByUsername_whenUserDoesNotExist_shouldThrow()
    {
        String username = "peterpan";

        // Given
        // When
        given(userRepository.findByUsername(username)).willReturn(Optional.empty());

        // Then
        assertThrows(ResourceNotFoundException.class,
                     () -> userService.getUserByUsername(username),
                     "User with username [%s] not found".formatted(username));
    }

    @Test
    void getUserById_shouldReturnUser()
    {
        int id = 1;

        User user = getUser();
        user.setId(1);

        UserDTOMapper mapper = new UserDTOMapper();
        UserDTO expected = mapper.apply(user);

        given(userRepository.findById(id)).willReturn(Optional.of(user));
        given(userDTOMapper.apply(user)).willReturn(expected);

        UserDTO actual = userService.getUserById(id);

        assertEquals(expected, actual);
    }

    @Test
    void getUserById_whenUserDoesNotExist_shouldThrow()
    {
        int id = 101;

        // Given
        // When
        given(userRepository.findById(id)).willReturn(Optional.empty());

        // Then
        assertThrows(ResourceNotFoundException.class,
                     () -> userService.getUserById(id),
                     "User with id [%s] not found".formatted(id));
    }

    @Test
    void getAllUsers()
    {
        User user = getUser();
        List<User> users = List.of(user);

        UserDTO userDTO = getUserDTO();

        // Given
        given(userRepository.findAll()).willReturn(users);
        given(userDTOMapper.apply(user)).willReturn(userDTO);

        // When
        // Then
        assertEquals(1, userService.getAllUsers().size());
    }

    @Test
    void deleteUserById()
    {
        // Given
        int id = 1;

        given(userRepository.existsById(id)).willReturn(true);

        // When
        userService.deleteUserById(id);

        // Then
        verify(userRepository).deleteById(id);
    }

    @Test
    void deleteUserById_whenUserDoesNotExist_shouldThrow()
    {
        int id = 101;

        // Given
        // When
        given(userRepository.existsById(id)).willReturn(false);

        // Then
        assertThrows(ResourceNotFoundException.class,
                     () -> userService.deleteUserById(id),
                     "User with id [%s] not found".formatted(id));
    }

    @Test
    void updateUser_shouldUpdateUser()
    {
        // Given
        int id = 1;
        User user = getUser();

        given(userRepository.getReferenceById(id)).willReturn(user);

        // When
        UserUpdateRequest userUpdateRequest = new UserUpdateRequest("Jenny", "Constance", "Doe", "path/to/image");
        userService.updateUser(id, userUpdateRequest);

        // Then
        ArgumentCaptor<User> userArgumentCaptor = ArgumentCaptor.forClass(User.class);

        verify(userRepository).save(userArgumentCaptor.capture());

        User savedUser = userArgumentCaptor.getValue();

        assertEquals(userUpdateRequest.firstName(), savedUser.getFirstName());
        assertEquals(userUpdateRequest.lastName(), savedUser.getLastName());
        assertEquals(userUpdateRequest.profileImageId(), savedUser.getProfileImageId());
    }

    @Test
    void updateUser_whenUserDoesNotExist_shouldThrow()
    {
        int id = 101;

        // Given
        // When
        given(userRepository.getReferenceById(id)).willThrow(EntityNotFoundException.class);

        // Then
        UserUpdateRequest userUpdateRequest = new UserUpdateRequest("Jenny", "Constance", "Doe", "path/to/image");
        assertThrows(ResourceNotFoundException.class,
                     () -> userService.updateUser(id, userUpdateRequest),
                     "User with id [%s] not found".formatted(id));
    }

    private UserDTO getUserDTO()
    {
        return new UserDTO(1, "Jane", "Constance", "Doe",
                           "Female",
                           null,
                           "janedoe","secret",
                           List.of(ROLE_ADMIN));
    }

    private User getUser()
    {
        return new User(
            "Jane", "Constance", "Doe",
            Gender.fromName("Female"),
            null,
            "janedoe", "secret",
            List.of(getRoles().get(ROLE_ADMIN))
        );
    }

    private Map<String, Role> getRoles()
    {
        Permission p1 = new Permission("WRITE_USER");
        Permission p2 = new Permission("READ_USER");

        return Map.of(
            ROLE_ADMIN, new Role(ROLE_ADMIN, List.of(p1, p2)),
            ROLE_TEACHER, new Role(ROLE_TEACHER, List.of(p2))
        );
    }
}