package com.example.sia.domain.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@Table(name = "majors")
public class Major {
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
    private String code;
    private String name;
}
