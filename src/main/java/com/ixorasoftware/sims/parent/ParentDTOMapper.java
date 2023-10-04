package com.ixorasoftware.sims.parent;

import com.ixorasoftware.sims.student.Student;
import com.ixorasoftware.sims.user.UserDTOMapper;

import java.util.function.Function;

public class ParentDTOMapper implements Function<Parent, ParentDTO> {
    @Override
    public ParentDTO apply(Parent parent) {
        return ParentDTO.builder()
                .id(parent.getId())
                .children(parent.getChildren().stream().map(Student::getId).toList())
                .status(parent.getStatus().name())
                .userInfo(new UserDTOMapper().apply(parent.getUserInfo()))
                .build();
    }
}
