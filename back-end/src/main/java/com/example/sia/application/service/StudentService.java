package com.example.sia.application.service;

import com.example.sia.data.repository.MajorRepository;
import com.example.sia.data.repository.StudentRepository;
import com.example.sia.domain.entity.Major;
import com.example.sia.domain.entity.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private MajorRepository majorRepository;

    private Major major;
    private Student student;

    public void addStudent(String nim, String name, long idMajor){
        major = new Major();
        major = majorRepository.findById(idMajor).orElseThrow(() -> new IllegalStateException("Major tidak ditemukan"));

        student = new Student();
        student.setNim(nim);
        student.setName(name);
        student.setMajor(major);
        studentRepository.save(student);
    }

    public List<Student> findAll(){
        return this.studentRepository.findAll();
    }

    @Transactional
    public void updateStudent(Long idStudent, String nim, String name, Long idMajor){
        Student student = this.studentRepository.findById(idStudent).orElseThrow(() -> new IllegalStateException("Student tidak ditemukan"));
        Major major = this.majorRepository.findById(idMajor).orElseThrow(() -> new IllegalStateException("Major tidak ditemukan"));

        student.setNim(nim);
        student.setName(name);
        student.setMajor(major);
    }

    public void removeStudent(Long idStudent){
        student = this.studentRepository.findById(idStudent).orElseThrow(() -> new IllegalStateException("Student tidak ditemukan"));

        studentRepository.deleteById(idStudent);
    }
}
