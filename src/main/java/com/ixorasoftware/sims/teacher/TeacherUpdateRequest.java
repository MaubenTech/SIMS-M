package com.ixorasoftware.sims.teacher;

import com.ixorasoftware.sims.user.UserUpdateRequest;

public record TeacherUpdateRequest(TeacherStatus status, UserUpdateRequest userDetails) {
}
