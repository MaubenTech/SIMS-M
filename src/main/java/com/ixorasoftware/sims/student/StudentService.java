package com.ixorasoftware.sims.student;

import com.ixorasoftware.sims.exception.ResourceNotFoundException;
import com.ixorasoftware.sims.parent.ParentService;
import com.ixorasoftware.sims.user.User;
import com.ixorasoftware.sims.user.UserService;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService
{
    private final StudentRepository studentRepository;
    private final StudentDTOMapper studentDTOMapper;
    private final UserService userService;

    public StudentService(StudentRepository studentRepository,
                          StudentDTOMapper studentDTOMapper,
                          UserService userService,
                          @Lazy ParentService parentService)
    {
        this.studentRepository = studentRepository;
        this.studentDTOMapper = studentDTOMapper;
        this.userService = userService;
        this.parentService = parentService;
    }

    private final ParentService parentService;

    public List<Student> getAllStudents()
    {
        return studentRepository.findAll();
    }
    
    public Student findStudentById(Integer id)
    {
        return studentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Student with id [%d] does not exist".formatted(id)));
    }

    public StudentDTO getStudentById(Integer id)
    {
        return studentDTOMapper.apply(findStudentById(id));
    }

    public boolean addStudent(StudentRegistrationRequest studentRegistrationRequest)
    {
        User addedUser = userService.addUser(studentRegistrationRequest.userDetails());
        if(addedUser != null)
        {
            Student student = Student.builder()
                    .parent1(parentService.findParentById(studentRegistrationRequest.parent1()))
                    .parent2(parentService.findParentById(studentRegistrationRequest.parent2()))
                    .status(StudentStatus.CURRENTLY_IN_SCHOOL)
                    .userInfo(addedUser)
                    .build();
            studentRepository.save(student);
            return true;
        }
        return false;
    }

    public StudentDTO updateStudent(Integer id, StudentUpdateRequest updatedStudent)
    {
        Student oldStudent = findStudentById(id);

        if(updatedStudent.studentStatus() != null && !updatedStudent.studentStatus().equals(oldStudent.getStatus().getName()))
        {
            oldStudent.setStatus(StudentStatus.fromName(updatedStudent.studentStatus()));
        }

        if(updatedStudent.parent1() != null && !updatedStudent.parent1().equals(oldStudent.getParent1().getId()))
        {
            oldStudent.setParent1(parentService.findParentById(updatedStudent.parent1()));
        }

        if(updatedStudent.parent2() != null && !updatedStudent.parent2().equals(oldStudent.getParent2().getId()))
        {
            oldStudent.setParent2(parentService.findParentById(updatedStudent.parent2()));
        }

        if(updatedStudent.userDetails() != null)
        {
            userService.updateUser(oldStudent.getUserInfo().getId(), updatedStudent.userDetails());
        }

        studentRepository.save(oldStudent); //I don't think this line is needed tho

        return studentDTOMapper.apply(oldStudent);
    }

    public boolean deleteStudentById(Integer id)
    {
        Student deletedStudent = findStudentById(id);
        userService.deleteUserById(deletedStudent.getUserInfo().getId());
        studentRepository.deleteById(id);
        return true;
    }

    public boolean deleteStudentsById(List<Integer> ids)
    {
        return ids.stream().allMatch(this::deleteStudentById);
    }
}
