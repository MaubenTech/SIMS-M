package com.ixorasoftware.sims.teacher;

import com.ixorasoftware.sims.exception.ResourceNotFoundException;
import com.ixorasoftware.sims.student.Student;
import com.ixorasoftware.sims.user.User;
import com.ixorasoftware.sims.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TeacherService
{
    private final UserService userService;
    private final TeacherDTOMapper teacherDTOMapper;
    private final TeacherRepository teacherRepository;

    public List<Teacher> getAllTeachers()
    {
        return teacherRepository.findAll();
    }

    public Teacher findTeacherById(Integer id)
    {
        return teacherRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Teacher with id [%d] does not exist".formatted(id)));
    }

    public TeacherDTO getTeacherById(Integer id)
    {
        return teacherDTOMapper.apply(findTeacherById(id));
    }

    public boolean addTeacher(TeacherRegistrationRequest teacherRegistrationRequest)
    {
        User addedUser = userService.addUser(teacherRegistrationRequest.userDetails());

        if(addedUser != null)
        {
            Teacher teacher = Teacher.builder()
                    .status(TeacherStatus.WORKING)
                    .userInfo(addedUser)
                    .build();
            teacherRepository.save(teacher);
            return true;
        }
        return false;
    }

    public TeacherDTO updateTeacher(Integer id, TeacherUpdateRequest updatedTeacher)
    {
        Teacher oldTeacher = findTeacherById(id);

        if(updatedTeacher.teacherStatus() != null && updatedTeacher.teacherStatus().equals(oldTeacher.getStatus().name()))
        {
            oldTeacher.setStatus(TeacherStatus.fromName(updatedTeacher.teacherStatus()));
        }

        if(updatedTeacher.userDetails() != null)
        {
            userService.updateUser(oldTeacher.getUserInfo().getId(), updatedTeacher.userDetails());
        }

        teacherRepository.save(oldTeacher); // I don't think this line is needed tho

        return teacherDTOMapper.apply(oldTeacher);
    }

    public boolean deleteTeacherById(Integer id)
    {
        Teacher deletedTeacher = findTeacherById(id);
        userService.deleteUserById(deletedTeacher.getUserInfo().getId());
        teacherRepository.deleteById(id);
        return true;
    }

    public boolean deleteTeacherByIds(List<Integer> ids)
    {
        return ids.stream().allMatch(this::deleteTeacherById);
    }
}
