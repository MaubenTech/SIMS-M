package com.ixorasoftware.sims.user;

import java.util.NoSuchElementException;

public enum Gender
{
    MALE("Male"),
    FEMALE("Female");


    private final String name;
    Gender(String name)
    {
        this.name = name;
    }

    public String getName()
    {
        return name;
    }

    public static Gender fromName(String name) throws NoSuchElementException
    {
        try
        {
            return Gender.valueOf(name.toUpperCase());
        }
        catch (IllegalArgumentException e)
        {
            throw new NoSuchElementException("Gender %s does not exist".formatted(name));
        }
    }
}
