package com.example.sia.controller;

import com.example.sia.application.service.EnrollService;
import com.example.sia.data.dto.EnrollDto;
import com.example.sia.domain.entity.Enroll;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class EnrollController {
    @Autowired
    private EnrollService enrollService;

    @PostMapping(value = "/enroll")
    public void enroll(@RequestBody EnrollDto enrollDto){
        this.enrollService.enroll(enrollDto.getIdCourse(), enrollDto.getIdStudent());
    }

    @GetMapping(value = "/findAllEnrollByStatusAndStudent/{idStudent}")
    public List<Enroll> findAllEnrollByStatusAndStudent(@PathVariable("idStudent") Long idStudent){
        return this.enrollService.findAllEnrollByStatusAndStudent(idStudent);
    }

    @GetMapping(value = "/findAllEnrollByStudent/{idStudent}")
    public List<Enroll> findAllEnrollByStudent(@PathVariable("idStudent") Long idStudent){
        return this.enrollService.findALlEnrollByStudent(idStudent);
    }

    @PostMapping(value = "/done/{idEnroll}")
    public void done(@PathVariable("idEnroll") Long idEnroll){
        this.enrollService.done(idEnroll);
    }

    @DeleteMapping(value = "/deleteEnroll/{idEnroll}")
    public void deleteEnroll(@PathVariable("idEnroll") Long idEnroll){
        this.enrollService.delete(idEnroll);
    }

    @PostMapping(value = "/updateEnroll/{idEnroll}")
    public void updateEnroll(@PathVariable("idEnroll") Long idEnroll, @RequestBody EnrollDto enrollDto){
        this.enrollService.updateEnroll(idEnroll, enrollDto.getIdCourse(), enrollDto.getIdStudent());
    }
}
