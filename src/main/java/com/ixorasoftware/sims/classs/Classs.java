package com.ixorasoftware.sims.classs;

import lombok.Data;
import lombok.NoArgsConstructor;

//@Entity
@NoArgsConstructor
@Data
public class Classs
{
    private GradeLevel gradeLevel;

    private final String arm = "$";

    public Classs(GradeLevel gradeLevel) {
        this.gradeLevel = gradeLevel;
    }
}
