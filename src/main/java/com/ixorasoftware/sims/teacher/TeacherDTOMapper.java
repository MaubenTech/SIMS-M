package com.ixorasoftware.sims.teacher;

import com.ixorasoftware.sims.user.UserDTOMapper;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class TeacherDTOMapper implements Function<Teacher, TeacherDTO>
{

    @Override
    public TeacherDTO apply(Teacher teacher) {
        return TeacherDTO.builder()
                .userInfo(new UserDTOMapper().apply(teacher.getUserInfo()))
                .status(teacher.getStatus())
                .build();
    }
}
