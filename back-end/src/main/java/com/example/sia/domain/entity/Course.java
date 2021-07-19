package com.example.sia.domain.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@Table(name = "courses")
public class Course {
    @Id
    @SequenceGenerator(
            name = "course_sequence",
            sequenceName = "courses_id_seq",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "courses_id_seq"
    )
    private long id;
    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    private Major major;
    private String name;
    private int sks;
    private int semester;
    @Column(columnDefinition = "BOOLEAN DEFAULT false", nullable = false)
    private boolean status_delete;
    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    private Teacher teacher;
}
