package com.example.sia.application.service;

import com.example.sia.data.repository.CourseRepository;
import com.example.sia.data.repository.MajorRepository;
import com.example.sia.data.repository.TeacherRepository;
import com.example.sia.domain.entity.Course;
import com.example.sia.domain.entity.Major;
import com.example.sia.domain.entity.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class CourseService {
    @Autowired
    private CourseRepository courseRepository;
    @Autowired
    private TeacherRepository teacherRepository;
    @Autowired
    private MajorRepository majorRepository;

    private Major major;
    private Teacher teacher;
    private Course course;

    public void addCourse(String name, int semester, int sks, Long idMajor, Long idTeacher){
        major = majorRepository.findById(idMajor).orElseThrow(() -> new IllegalStateException("Major tidak ada"));
        teacher = teacherRepository.findById(idTeacher).orElseThrow(() -> new IllegalStateException("Teacher tidak ada"));

        course = new Course();
        course.setName(name);
        course.setSemester(semester);
        course.setSks(sks);
        course.setMajor(major);
        course.setTeacher(teacher);
        courseRepository.save(course);
    }

    public List<Course> findAllCourse(){ return this.courseRepository.findAll();}

    public List<Course> findAllCourseByStatus(){ return this.courseRepository.findAllCourse(false);}

    @Transactional
    public void updateCourse(Long idCourse, String name, int semester, int sks, Long idMajor, Long idTeacher){
        course = courseRepository.findById(idCourse).orElseThrow(() -> new IllegalStateException("Course tidak ada"));
        major = majorRepository.findById(idMajor).orElseThrow(() -> new IllegalStateException("Major tidak ada"));
        teacher = teacherRepository.findById(idTeacher).orElseThrow(() -> new IllegalStateException("Teacher tidak ada"));

        course.setName(name);
        course.setSemester(semester);
        course.setSks(sks);
        course.setMajor(major);
        course.setTeacher(teacher);
    }

    @Transactional
    public void deleteCourse(Long idCourse){
        course = courseRepository.findById(idCourse).orElseThrow(() -> new IllegalStateException("Course tidak ada"));

        course.setStatus_delete(true);
    }

    public List<Course> findAllCourseByMajor(Long idMajor){
        major = majorRepository.findById(idMajor).orElseThrow(() -> new IllegalStateException("Major tidak ditemukan"));

        return courseRepository.findAllCourseByMajor(major);
    }
}
