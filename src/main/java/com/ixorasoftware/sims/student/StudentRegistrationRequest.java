package com.ixorasoftware.sims.student;

import com.ixorasoftware.sims.user.UserRegistrationRequest;

public record StudentRegistrationRequest(Integer parent1, Integer parent2, UserRegistrationRequest userDetails) {
}
