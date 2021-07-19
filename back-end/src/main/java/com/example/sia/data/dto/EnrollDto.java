package com.example.sia.data.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class EnrollDto {
    @JsonProperty("student")
    private Long idStudent;
    @JsonProperty("course")
    private Long idCourse;
}
