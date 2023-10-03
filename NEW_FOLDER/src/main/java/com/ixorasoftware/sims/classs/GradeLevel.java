package com.ixorasoftware.sims.classs;

import lombok.Getter;

import java.util.NoSuchElementException;

@Getter
public enum GradeLevel
{
    JSS1("Junior Secondary School 1", 7),
    JSS2("Junior Secondary School 2", 8),
    JSS3("Junior Secondary School 3", 9),
    SSS1("Senior Secondary School 1", 10),
    SSS2("Senior Secondary School 2", 11),
    SSS3("Senior Secondary School 3", 12);

    private final String name;
    private final int gradeNumber;

    GradeLevel(String name, int gradeNumber)
    {
        this.name = name;
        this.gradeNumber = gradeNumber;
    }

    public static GradeLevel fromName(String name)
    {
        if(name.length() <= 4)
            name = name.toUpperCase();
        return switch(name)
        {
            case "JS1", "JSS1", "Junior Secondary School 1" -> GradeLevel.JSS1;
            case "JS2", "JSS2", "Junior Secondary School 2" -> GradeLevel.JSS2;
            case "JS3", "JSS3", "Junior Secondary School 3" -> GradeLevel.JSS3;
            case "SS1", "SSS1", "Senior Secondary School 1" -> GradeLevel.SSS1;
            case "SS2", "SSS2", "Senior Secondary School 2" -> GradeLevel.SSS2;
            case "SS3", "SSS3", "Senior Secondary School 3" -> GradeLevel.SSS3;
            default -> throw new NoSuchElementException("GradeLevel %s does not exist".formatted(name));
        };
    }

    public static GradeLevel fromGradeNumber(int gradeNumber)
    {
        return switch(gradeNumber)
        {
            case 7 -> GradeLevel.JSS1;
            case 8 -> GradeLevel.JSS2;
            case 9 -> GradeLevel.JSS3;
            case 10 -> GradeLevel.SSS1;
            case 11 -> GradeLevel.SSS2;
            case 12 -> GradeLevel.SSS3;
            default -> throw new NoSuchElementException("GradeLevel %d does not exist".formatted(gradeNumber));
        };
    }
}
