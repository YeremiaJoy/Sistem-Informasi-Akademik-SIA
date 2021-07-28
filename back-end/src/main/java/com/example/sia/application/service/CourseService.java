package com.example.sia.application.service;

import com.example.sia.data.repository.*;
import com.example.sia.domain.entity.*;
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
    @Autowired
    private EnrollRepository enrollRepository;
    @Autowired
    private StudentRepository studentRepository;

    private Major major;
    private Teacher teacher;
    private Course course;
    private Enroll enroll;
    private Student student;

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

    public List<Course> findAllCourseByMajor(Long idMajor, Long idStudent){
        major = majorRepository.findById(idMajor).orElseThrow(() -> new IllegalStateException("Major tidak ditemukan"));
        student = studentRepository.findById(idStudent).orElseThrow(() -> new IllegalStateException("Student tidak ditemukan"));

        List<Enroll> enroll = enrollRepository.allEnrollByStudent(student);

        List<Course> course = courseRepository.findAllCourseByMajor(major, false);

        int enrollSize = enroll.size();
        int courseSize = course.size();

        boolean foundEnroll = false;
        int tempCourse = 0;
        int tempEnroll = 0;

        while (tempCourse < courseSize){

            tempEnroll = 0;
            foundEnroll = false;
            while (!foundEnroll && tempEnroll < enrollSize){
                if (course.get(tempCourse).getId() == enroll.get(tempEnroll).getCourse().getId()) {
                    course.remove(tempCourse);
                    foundEnroll = true;
                }else{
                    tempEnroll++;
                }
            }

            if (foundEnroll){
                tempCourse = 0;
                courseSize-=1;
            }else{
                tempCourse++;
            }
        }
        
        return course;
    }
}
