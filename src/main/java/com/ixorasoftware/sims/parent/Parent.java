package com.ixorasoftware.sims.parent;

import com.ixorasoftware.sims.student.Student;
import com.ixorasoftware.sims.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class Parent {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @OneToMany
    private List<Student> children;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private ParentStatus status;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User userInfo;

}
