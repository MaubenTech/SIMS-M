package com.ixorasoftware.sims.classs;

import lombok.Data;

//@Entity
@Data
public class Classs
{
    private final GradeLevel gradeLevel;

    private final String arm = "$";

    public Classs(GradeLevel gradeLevel) {
        this.gradeLevel = gradeLevel;
    }
}
