package com.ixorasoftware.sims.parent;

import com.ixorasoftware.sims.exception.ResourceNotFoundException;
import com.ixorasoftware.sims.student.*;
import com.ixorasoftware.sims.user.User;
import com.ixorasoftware.sims.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ParentService
{

    private final ParentRepository parentRepository;
    private final UserService userService;
    private final StudentService studentService;
    private final ParentDTOMapper parentDTOMapper;

    public List<Parent> getAllParents()
    {
        return parentRepository.findAll();
    }

    public Parent findParentById(Integer id)
    {
        return parentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Parent with id %d does not exist".formatted(id)));
    }

    public ParentDTO getParentById(Integer id)
    {
        return parentDTOMapper.apply(findParentById(id));
    }

    public boolean addParent(ParentRegistrationRequest parentRegistrationRequest)
    {
        User addedUser = userService.addUser(parentRegistrationRequest.userDetails());
        if(addedUser != null)
        {
            Parent parent = Parent.builder()
                    .status(ParentStatus.ACTIVE)
                    .build();
            parentRepository.save(parent);
            return true;
        }
        return false;
    }

    public ParentDTO updateParent(Integer id, ParentUpdateRequest updatedParent)
    {
        Parent oldParent = findParentById(id);

        if(!updatedParent.children().isEmpty() && updatedParent.children().equals(oldParent.getChildren().stream().map(Student::getId).toList()))
        {
            oldParent.setChildren(updatedParent.children().stream().map(studentService::findStudentById).toList());
        }

        if(updatedParent.parentStatus() != null && !updatedParent.parentStatus().equals(oldParent.getStatus().name()))
        {
            oldParent.setStatus(ParentStatus.fromName(updatedParent.parentStatus()));
        }

        if(updatedParent.userDetails() != null)
        {
            userService.updateUser(oldParent.getUserInfo().getId(), updatedParent.userDetails());
        }

        parentRepository.save(oldParent); //I don't think this line is needed tho

        return parentDTOMapper.apply(oldParent);
    }

    public boolean deleteParentById(Integer id)
    {
        Parent deletedParent = parentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Parent with id [%d] does not exist".formatted(id)));
        userService.deleteUserById(deletedParent.getUserInfo().getId());
        parentRepository.deleteById(id);
        return true;
    }

    public boolean deleteParentsById(List<Integer> ids)
    {
        return ids.stream().allMatch(this::deleteParentById);
    }
}
