package com.ixorasoftware.sims.student;

import com.ixorasoftware.sims.classs.Classs;
import com.ixorasoftware.sims.classs.GradeLevel;
import com.ixorasoftware.sims.parent.Parent;
import com.ixorasoftware.sims.user.User;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

@Entity
@Data
@Builder
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column
    private Parent parent1;

    @Column
    private Parent parent2;

//    @Column(nullable = false)
//    private Classs currentClass;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private StudentStatus status;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User userInfo;
}
