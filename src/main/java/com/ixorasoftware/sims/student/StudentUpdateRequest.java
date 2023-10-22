package com.ixorasoftware.sims.student;

import com.ixorasoftware.sims.user.UserUpdateRequest;

public record StudentUpdateRequest(Integer parent1, Integer parent2, String studentStatus, UserUpdateRequest userDetails) {
}
