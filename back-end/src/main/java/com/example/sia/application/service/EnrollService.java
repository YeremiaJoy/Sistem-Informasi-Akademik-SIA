package com.example.sia.application.service;

import com.example.sia.data.repository.CourseRepository;
import com.example.sia.data.repository.EnrollRepository;
import com.example.sia.data.repository.MajorRepository;
import com.example.sia.data.repository.StudentRepository;
import com.example.sia.domain.entity.Course;
import com.example.sia.domain.entity.Enroll;
import com.example.sia.domain.entity.Major;
import com.example.sia.domain.entity.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;

@Service
public class EnrollService {
    @Autowired
    private EnrollRepository enrollRepository;
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private CourseRepository courseRepository;

    private Enroll enroll;
    private Student student;
    private Course course;

    public void enroll(Long idCourse, Long idStudent){
        course = courseRepository.findById(idCourse).orElseThrow(() -> new IllegalStateException("Course tidak ada"));
        student = studentRepository.findById(idStudent).orElseThrow(() -> new IllegalStateException("Student tidak ada"));

        LocalDateTime now = LocalDateTime.now();

        enroll = new Enroll();
        enroll.setCourse(course);
        enroll.setStudent(student);
        enroll.setStatus(true);
        enroll.setEnrollDate(now);

        enrollRepository.save(enroll);
    }

    public List<Enroll> findAllEnrollByStatusAndStudent(Long idStudent){
        student = studentRepository.getOne(idStudent);
        return this.enrollRepository.allEnrollByStatusAndStudent(true, student);
    }

    public List<Enroll> findALlEnrollByStudent(Long idStudent){
        student = studentRepository.getOne(idStudent);
        return this.enrollRepository.allEnrollByStudent(student);
    }

    public void delete(Long idEnroll){
        enroll = enrollRepository.findById(idEnroll).orElseThrow(() -> new IllegalStateException("Enroll tidak ada"));

        enrollRepository.deleteById(idEnroll);
    }

    @Transactional
    public void updateEnroll(Long idEnroll, Long idCourse, Long idStudent){
        enroll = enrollRepository.findById(idEnroll).orElseThrow(() -> new IllegalStateException("Enroll tidak ada"));
        course = courseRepository.findById(idCourse).orElseThrow(() -> new IllegalStateException("Course tidak ada"));
        student = studentRepository.findById(idStudent).orElseThrow(() -> new IllegalStateException("Student tidak ada"));

        enroll.setCourse(course);
        enroll.setStudent(student);
    }

    @Transactional
    public void done(Long idEnroll){
        enroll = enrollRepository.findById(idEnroll).orElseThrow(() -> new IllegalStateException("Enroll tidak ada"));

        enroll.setStatus(false);
    }
}
