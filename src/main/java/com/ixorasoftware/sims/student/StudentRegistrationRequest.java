package com.ixorasoftware.sims.student;

import com.ixorasoftware.sims.parent.Parent;
import com.ixorasoftware.sims.user.UserRegistrationRequest;
import lombok.Getter;

public record StudentRegistrationRequest(Integer parent1, Integer parent2, UserRegistrationRequest userDetails) {
}
