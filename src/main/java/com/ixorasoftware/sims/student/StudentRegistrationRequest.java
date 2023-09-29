package com.ixorasoftware.sims.student;

import com.ixorasoftware.sims.parent.Parent;
import com.ixorasoftware.sims.user.UserRegistrationRequest;

public record StudentRegistrationRequest(Integer parent1, Integer paren2, UserRegistrationRequest userDetails) {
}
