package com.example.sia.domain.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@Table(name = "students")
public class Student {
    @Id
    @SequenceGenerator(
            name = "student_sequence",
            sequenceName = "students_id_seq",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "students_id_seq"
    )
    private long id;
    private String nim;
    private String name;
    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    private Major major;
}
