package com.ixorasoftware.sims.teacher;

import com.ixorasoftware.sims.subject.Subject;
import com.ixorasoftware.sims.user.UserDTO;
import lombok.Builder;

import java.util.List;

@Builder
public record TeacherDTO(TeacherStatus status, UserDTO userInfo) {
}
