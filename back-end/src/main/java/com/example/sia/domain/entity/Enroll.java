package com.example.sia.domain.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@NoArgsConstructor
@Table(name = "enrolls")
public class Enroll {
    @Id
    @SequenceGenerator(
            name = "enroll_sequence",
            sequenceName = "enrolls_id_seq",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "enrolls_id_seq"
    )
    private long id;
    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    private Student student;
    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    private Course course;
    @Column(name = "enroll_date",columnDefinition = "TIMESTAMP", nullable = false)
    private LocalDateTime enrollDate;
    @Column(columnDefinition = "BOOLEAN DEFAULT true", nullable = false)
    private boolean status;
}
