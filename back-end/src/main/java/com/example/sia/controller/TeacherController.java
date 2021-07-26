package com.example.sia.controller;

import com.example.sia.application.service.TeacherService;
import com.example.sia.data.dto.EditTeacherDto;
import com.example.sia.data.dto.LoginTeacherDto;
import com.example.sia.data.dto.TeacherDto;
import com.example.sia.domain.entity.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class TeacherController {

    @Autowired
    private TeacherService teacherService;

    @PostMapping(value = "/addTeacher")
    public void addTeacher(@RequestBody TeacherDto teacherDto){
        this.teacherService.addTeacher(teacherDto.getName(), teacherDto.getUsername(), teacherDto.getIdMajor());
    }

    @GetMapping(value = "/findAllTeacher")
    public List<Teacher> findAllTeacher(){return this.teacherService.findAllTeacher();}

    @DeleteMapping(value = "/deleteTeacher/{idTeacher}")
    public void deleteTeacher (@PathVariable("idTeacher") Long idTeacher){
        this.teacherService.deleteTeacher(idTeacher);
    }

    @PostMapping(value = "/updateTeacher/{idTeacher}")
    public void updateTeacher(@PathVariable("idTeacher") Long idTeacher, @RequestBody EditTeacherDto editTeacherDto){
        this.teacherService.updateTeacher(idTeacher, editTeacherDto.getName(), editTeacherDto.getUsername(), editTeacherDto.getIdMajor(), editTeacherDto.getPassword());
    }

    @PostMapping(value = "/loginTeacher")
    public Teacher loginTeacher(@RequestBody LoginTeacherDto loginTeacherDto){
        return this.teacherService.login(loginTeacherDto);
    }
}
