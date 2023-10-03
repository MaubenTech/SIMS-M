package com.ixorasoftware.sims.student;

import java.util.function.Function;

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
                .userInfo(student.getUserInfo().getId())
                .build();
    }
}
