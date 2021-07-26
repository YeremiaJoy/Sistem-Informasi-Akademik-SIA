package com.example.sia.domain.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@Table(name = "teachers")
public class Teacher {
    @Id
    @SequenceGenerator(
            name = "teacher_sequence",
            sequenceName = "teachers_id_seq",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "teachers_id_seq"
    )
    private Long id;
    private String name;
    private String username;
//    @Column(columnDefinition = "varchar(255) default 'teacher123'", nullable = false)
    private String password;
    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    private Major major;
}
