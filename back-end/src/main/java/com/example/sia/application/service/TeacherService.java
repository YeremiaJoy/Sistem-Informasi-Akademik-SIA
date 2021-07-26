package com.example.sia.application.service;

import com.example.sia.data.dto.LoginTeacherDto;
import com.example.sia.data.repository.MajorRepository;
import com.example.sia.data.repository.TeacherRepository;
import com.example.sia.domain.entity.Major;
import com.example.sia.domain.entity.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.security.MessageDigest;
import java.util.List;

@Service
public class TeacherService {

    @Autowired
    private TeacherRepository teacherRepository;
    @Autowired
    private MajorRepository majorRepository;

    private Major major;
    private Teacher teacher;

    public List<Teacher> findAllTeacher(){
        return this.teacherRepository.findAll();
    }
    public void addTeacher(String name, String username, Long idMajor){
        Teacher teacher = new Teacher();
        major = new Major();
        String passMD5 = passwordToMD5("teacher123");
        major = majorRepository.findById(idMajor).orElseThrow(() -> new IllegalStateException("Major tidak ditemukan"));

        teacher.setName(name);
        teacher.setUsername(username);
        teacher.setMajor(major);
        teacher.setPassword(passMD5);
        teacherRepository.save(teacher);
    }

    public void deleteTeacher(Long idTeacher){
        teacher = teacherRepository.findById(idTeacher).orElseThrow(() -> new IllegalStateException("Teacher tidak ada"));

        teacherRepository.deleteById(idTeacher);
    }

    @Transactional
    public void updateTeacher(Long idTeacher, String name, String username, Long idMajor, String password){
        String passMD5 = passwordToMD5(password);
        teacher = teacherRepository.findById(idTeacher).orElseThrow(() -> new IllegalStateException("Teacher tidak ada"));

        major = majorRepository.findById(idMajor).orElseThrow(() -> new IllegalStateException("Major tidak ditemukan"));
        teacher.setName(name);
        teacher.setUsername(username);
        teacher.setMajor(major);
        teacher.setPassword(passMD5);
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

    public Teacher login(LoginTeacherDto loginTeacherDto){
        String passMD5 = passwordToMD5(loginTeacherDto.getPassword());

        teacher = teacherRepository.findByUsernameAndPassword(loginTeacherDto.getUsername(), passMD5).orElseThrow(() -> new IllegalStateException("Username / password salah"));

        return teacher;
    }
}
