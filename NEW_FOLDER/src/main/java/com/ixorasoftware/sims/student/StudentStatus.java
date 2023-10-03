package com.ixorasoftware.sims.student;

import lombok.Getter;

import java.util.NoSuchElementException;

@Getter
public enum StudentStatus
{
    GRADUATED("G"), LEFT_SCHOOL("L"), CURRENTLY_IN_SCHOOL("C"), SUSPENDED("S"), EXPELLED("E");

    private final String name;

    StudentStatus(String status)
    {
        this.name = status;
    }

    public static StudentStatus fromName(String name)
    {
        name = name.toUpperCase();

        return switch(name)
        {
            case "G", "GRADUATED" -> StudentStatus.GRADUATED;
            case "L", "LEFT_SCHOOL" -> StudentStatus.LEFT_SCHOOL;
            case "C", "CURRENTLY_IN_SCHOOL" -> StudentStatus.CURRENTLY_IN_SCHOOL;
            case "S", "SUSPENDED" -> StudentStatus.SUSPENDED;
            case "E", "EXPELLED" -> StudentStatus.EXPELLED;
            default -> throw new NoSuchElementException("StudentStatus %s does not exist".formatted(name));
        };
    }
}
