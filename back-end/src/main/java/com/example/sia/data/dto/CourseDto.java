package com.example.sia.data.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class CourseDto {
    @JsonProperty("name")
    private String name;
    @JsonProperty("sks")
    private int sks;
    @JsonProperty("semester")
    private int semester;
    @JsonProperty("major")
    private Long idMajor;
    @JsonProperty("teacher")
    private Long idTeacher;
}
