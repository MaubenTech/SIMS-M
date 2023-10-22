package com.ixorasoftware.sims.parent;

import com.ixorasoftware.sims.user.UserUpdateRequest;

import java.util.List;

public record ParentUpdateRequest(List<Integer> children, String parentStatus, UserUpdateRequest userDetails)
{

}
