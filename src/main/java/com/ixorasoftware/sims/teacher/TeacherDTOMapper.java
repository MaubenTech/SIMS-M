package com.ixorasoftware.sims.teacher;

import java.util.function.Function;

public class TeacherDTOMapper implements Function<Teacher, TeacherDTO>
{
    @Override
    public TeacherDTO apply(Teacher teacher) {
        return TeacherDTO.builder()
                .userInfo(teacher.getUserInfo().getId())
                .status(teacher.getStatus())
                .build();
    }
}
