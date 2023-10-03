package com.ixorasoftware.sims.parent;

import com.ixorasoftware.sims.student.Student;
import com.ixorasoftware.sims.user.UserDTO;
import lombok.Builder;

import java.util.List;

@Builder
public record ParentDTO(Integer id, List<Integer> children, String status, UserDTO userInfo)
{
    public ParentDTO(List<Integer> children, String status, UserDTO userInfo)
    {
        this(null, children, status, userInfo);
    }

    public ParentDTO(String status, UserDTO userInfo)
    {
        this(null, null, status, userInfo);
    }
}