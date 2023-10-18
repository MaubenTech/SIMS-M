package com.ixorasoftware.sims.student;

import com.ixorasoftware.sims.parent.Parent;
import com.ixorasoftware.sims.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @JoinColumn
    @ManyToOne
    private Parent parent1;

    @JoinColumn
    @ManyToOne
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
