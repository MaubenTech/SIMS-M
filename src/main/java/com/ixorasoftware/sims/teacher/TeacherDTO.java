package com.ixorasoftware.sims.teacher;

import com.ixorasoftware.sims.subject.Subject;
import lombok.Builder;

import java.util.List;

@Builder
public record TeacherDTO(TeacherStatus status, Integer userInfo) {
}
