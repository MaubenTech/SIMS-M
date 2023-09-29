package com.ixorasoftware.sims.teacher;

import com.ixorasoftware.sims.user.UserUpdateRequest;

public record TeacherUpdateRequest(String teacherStatus, UserUpdateRequest userDetails) {
}
