package com.ixorasoftware.sims.teacher;

import lombok.Getter;

import java.util.NoSuchElementException;

@Getter
public enum TeacherStatus
{
    WORKING("W"), SUSPENDED("S"), RESIGNED("R"), FIRED("F");

    private final String name;

    TeacherStatus(String name)
    {
        this.name = name;
    }

    public static TeacherStatus fromName(String name)
    {
        name = name.toUpperCase();

        return switch(name)
        {
            case "W", "WORKING" -> TeacherStatus.WORKING;
            case "S", "SUSPENDED" -> TeacherStatus.SUSPENDED;
            case "R", "RESIGNED" -> TeacherStatus.RESIGNED;
            case "F", "FIRED" -> TeacherStatus.FIRED;
            default -> throw new NoSuchElementException("TeacherStatus %s does not exist".formatted(name));
        };
    }
}
