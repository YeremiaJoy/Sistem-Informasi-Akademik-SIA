package com.example.sia.controller;

import com.example.sia.application.service.StudentService;
import com.example.sia.data.dto.EditStudentDto;
import com.example.sia.data.dto.LoginStudentDto;
import com.example.sia.data.dto.StudentDto;
import com.example.sia.domain.entity.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping(value = "/addStudent")
    public void addStudent(@RequestBody StudentDto studentDto){
        this.studentService.addStudent(studentDto.getNim(), studentDto.getName(), studentDto.getIdMajor());
    }

    @GetMapping(value = "/findAllStudent")
    public List<Student> findAllStudent(){
        return this.studentService.findAll();
    }

    @PostMapping(value = "/updateStudent/{idStudent}")
    public void updateStudent(@PathVariable("idStudent") Long idStudent, @RequestBody EditStudentDto editStudentDto){
        this.studentService.updateStudent(idStudent, editStudentDto.getNim(), editStudentDto.getName(), editStudentDto.getIdMajor(), editStudentDto.getPassword());
    }

    @DeleteMapping(value = "/deleteStudent/{idStudent}")
    public void deleteStudent(@PathVariable("idStudent") Long idStudent){
        this.studentService.removeStudent(idStudent);
    }

    @PostMapping(value = "/loginStudent")
    public Student login(@RequestBody LoginStudentDto loginStudentDto){
        return this.studentService.login(loginStudentDto.getNim(), loginStudentDto.getPassword());
    }
}
