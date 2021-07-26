package com.example.sia.data.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class LoginTeacherDto {
    @JsonProperty("username")
    private String username;
    @JsonProperty("password")
    private String password;
}
