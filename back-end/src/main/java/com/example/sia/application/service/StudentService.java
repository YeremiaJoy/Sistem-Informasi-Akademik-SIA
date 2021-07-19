package com.example.sia.application.service;

import com.example.sia.data.repository.MajorRepository;
import com.example.sia.data.repository.StudentRepository;
import com.example.sia.domain.entity.Major;
import com.example.sia.domain.entity.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.security.MessageDigest;
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
        student.setPassword("sia123");
        studentRepository.save(student);
    }

    public List<Student> findAll(){
        return this.studentRepository.findAll();
    }

    @Transactional
    public void updateStudent(Long idStudent, String nim, String name, Long idMajor, String password){
        String passMD5 = passwordToMD5(password);
        Student student = this.studentRepository.findById(idStudent).orElseThrow(() -> new IllegalStateException("Student tidak ditemukan"));
        Major major = this.majorRepository.findById(idMajor).orElseThrow(() -> new IllegalStateException("Major tidak ditemukan"));

        student.setNim(nim);
        student.setName(name);
        student.setMajor(major);
        student.setPassword(passMD5);
    }

    public void removeStudent(Long idStudent){
        student = this.studentRepository.findById(idStudent).orElseThrow(() -> new IllegalStateException("Student tidak ditemukan"));

        studentRepository.deleteById(idStudent);
    }

    public String passwordToMD5(String passwordToHash){
        String generatedPassword = null;
        try {
            // Create MessageDigest instance for MD5
            MessageDigest md = MessageDigest.getInstance("MD5");
            //Add password bytes to digest
            md.update(passwordToHash.getBytes());
            //Get the hash's bytes
            byte[] bytes = md.digest();
            //This bytes[] has bytes in decimal format;
            //Convert it to hexadecimal format
            StringBuilder sb = new StringBuilder();
            for(int i=0; i< bytes.length ;i++)
            {
                sb.append(Integer.toString((bytes[i] & 0xff) + 0x100, 16).substring(1));
            }
            //Get complete hashed password in hex format
            generatedPassword = sb.toString();
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
        return generatedPassword;
    }

    public Student login(String nim, String password){
        student = studentRepository.findByNimAndPassword(nim, password).orElseThrow(() -> new IllegalStateException("Salah password / Nim"));

        return student;
    }
}
