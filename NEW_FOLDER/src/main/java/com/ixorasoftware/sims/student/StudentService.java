package com.ixorasoftware.sims.student;

import com.ixorasoftware.sims.exception.ResourceNotFoundException;
import com.ixorasoftware.sims.parent.ParentService;
import com.ixorasoftware.sims.user.User;
import com.ixorasoftware.sims.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentService
{
    private final StudentRepository studentRepository;
    private final UserService userService;
    private final ParentService parentService;

    public List<Student> getAllStudents()
    {
        return studentRepository.findAll();
    }

//    public StudentDTO getStudentById(Integer id)
//    {
//        return studentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Student with id %d does not exist".formatted(id)));
//    }

    public boolean addStudent(StudentRegistrationRequest studentRegistrationRequest)
    {
        User addedUser = userService.addUser(studentRegistrationRequest.getUserDetails());
        if(addedUser != null)
        {
            Student student = Student.builder()
                    .parent1(parentService.getParentById(studentRegistrationRequest.getParent1()))
                    .parent2(parentService.getParentById(studentRegistrationRequest.getParen2()))
                    .status(StudentStatus.CURRENTLY_IN_SCHOOL)
                    .userInfo(addedUser)
                    .build();
            studentRepository.save(student);
            return true;
        }
        return false;
    }

//    public boolean deleteStudent()
//    {
//
//    }
}
