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
            name = "major_sequence",
            sequenceName = "majors_id_seq",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "majors_id_seq"
    )
    private long id;
    private String code;
    private String name;
    @Column(columnDefinition = "BOOLEAN DEFAULT false", nullable = false)
    private boolean status_delete;
}
