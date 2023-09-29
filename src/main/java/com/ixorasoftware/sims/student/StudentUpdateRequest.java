package com.ixorasoftware.sims.student;

import com.ixorasoftware.sims.parent.Parent;
import com.ixorasoftware.sims.user.UserUpdateRequest;

public record StudentUpdateRequest(Parent parent1, Parent parent2, StudentStatus status, UserUpdateRequest userDetails) {
}
