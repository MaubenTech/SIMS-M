package com.ixorasoftware.sims.parent;

import com.ixorasoftware.sims.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ParentService
{

    private final ParentRepository parentRepository;

    public List<Parent> getAllParents()
    {
        return parentRepository.findAll();
    }

    public Parent getParentById(Integer id)
    {
        return parentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Parent with id %d does not exist".formatted(id)));
    }
}
