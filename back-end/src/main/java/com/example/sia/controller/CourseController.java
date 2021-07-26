package com.example.sia.controller;

import com.example.sia.application.service.CourseService;
import com.example.sia.data.dto.CourseDto;
import com.example.sia.data.repository.CourseRepository;
import com.example.sia.domain.entity.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class CourseController {
    @Autowired
    private CourseService courseService;

    @PostMapping(value = "/addCourse")
    public void addCourse(@RequestBody CourseDto courseDto){
        this.courseService.addCourse(courseDto.getName(), courseDto.getSemester(), courseDto.getSks(), courseDto.getIdMajor(), courseDto.getIdTeacher());
    }

    @GetMapping(value = "/findAllCourseByMajor/{idMajor}")
    public List<Course> findAllCourseByMajor(@PathVariable("idMajor") Long idMajor){
        return this.courseService.findAllCourseByMajor(idMajor);
    }

    @GetMapping(value = "/findAllCourse")
    public List<Course> findAllCourse(){ return this.courseService.findAllCourse();}

    @GetMapping(value = "/findAllCourseByStatus")
    public List<Course> findAllCourseByStatus(){ return this.courseService.findAllCourseByStatus();}

    @PostMapping(value = "/updateCourse/{idCourse}")
    public void updateCourse(@PathVariable("idCourse") Long idCourse, @RequestBody CourseDto courseDto){
        this.courseService.updateCourse(idCourse, courseDto.getName(), courseDto.getSemester(), courseDto.getSks(), courseDto.getIdMajor(), courseDto.getIdTeacher());
    }

    @DeleteMapping(value = "/deleteCourse/{idCourse}")
    public void deleteCourse(@PathVariable("idCourse") Long idCourse){
        this.courseService.deleteCourse(idCourse);
    }
}
