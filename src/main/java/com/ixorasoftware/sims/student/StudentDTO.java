package com.ixorasoftware.sims.student;

import lombok.Builder;

@Builder
public record StudentDTO(Integer id, Integer parent1, Integer parent2, String status, Integer userInfo)
{

    public StudentDTO(Integer parent1, Integer parent2, String status, Integer userInfo)
    {
        this(null, parent1, parent2, status, userInfo);
    }

    public StudentDTO(Integer parent1, String status, Integer userInfo)
    {
        this(null, parent1, null, status, userInfo);
    }

    public StudentDTO(String status, Integer userInfo)
    {
        this(null, null, null, status, userInfo);
    }
}
