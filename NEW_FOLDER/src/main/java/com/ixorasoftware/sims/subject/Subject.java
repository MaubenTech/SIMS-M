package com.ixorasoftware.sims.subject;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Subject
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false)
    private String name;

    @Column
    private String description;

}
