package com.example.sia.data.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class TeacherDto {
    @JsonProperty("name")
    private String name;
    @JsonProperty("major")
    private long idMajor;
}
