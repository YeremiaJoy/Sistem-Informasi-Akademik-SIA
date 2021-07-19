package com.example.sia.data.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class LoginStudentDto {
    @JsonProperty("nim")
    private String nim;
    @JsonProperty("password")
    private String password;
}
