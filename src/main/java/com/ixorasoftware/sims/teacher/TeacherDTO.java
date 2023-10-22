package com.ixorasoftware.sims.teacher;

import com.ixorasoftware.sims.user.UserDTO;
import lombok.Builder;

@Builder
public record TeacherDTO(TeacherStatus status, UserDTO userInfo) {
}
