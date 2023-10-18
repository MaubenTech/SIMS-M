package com.ixorasoftware.sims.student;

import com.ixorasoftware.sims.user.UserDTOMapper;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class StudentDTOMapper implements Function<Student, StudentDTO>
{
    @Override
    public StudentDTO apply(Student student)
    {
        return StudentDTO.builder()
                .id(student.getId())
                .parent1(student.getParent1().getId())
                .parent2(student.getParent2().getId())
                .status(student.getStatus().getName())
                .userInfo(new UserDTOMapper().apply(student.getUserInfo()))
                .build();
    }
}
