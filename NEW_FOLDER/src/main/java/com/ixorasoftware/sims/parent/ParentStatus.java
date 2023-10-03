package com.ixorasoftware.sims.parent;

import lombok.Getter;

import java.util.NoSuchElementException;

@Getter
public enum ParentStatus
{
    ACTIVE("A"), INACTIVE("I");

    private final String name;

    ParentStatus(String name)
    {
        this.name = name;
    }

    public static ParentStatus fromName(String name)
    {
        name = name.toUpperCase();

        return switch(name)
        {
            case "A", "ACTIVE" -> ParentStatus.ACTIVE;
            case "I", "INACTIVE" -> ParentStatus.INACTIVE;
            default -> throw new NoSuchElementException("ParentStatus %s does not exist".formatted(name));
        };
    }
}
