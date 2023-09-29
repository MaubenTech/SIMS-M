package com.ixorasoftware.sims.teacher;

import com.ixorasoftware.sims.subject.Subject;
import com.ixorasoftware.sims.user.User;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Teacher
{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private TeacherStatus status;

    @OneToOne
    private User userInfo;
}
