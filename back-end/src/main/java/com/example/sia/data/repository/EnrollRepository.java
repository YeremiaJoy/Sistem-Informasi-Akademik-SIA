package com.example.sia.data.repository;

import com.example.sia.domain.entity.Enroll;
import com.example.sia.domain.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EnrollRepository extends JpaRepository<Enroll, Long>, JpaSpecificationExecutor<Enroll> {
    @Query("SELECT enroll FROM Enroll enroll WHERE(enroll.status = ?1 and enroll.student = ?2)")
    List<Enroll> allEnrollByStatusAndStudent(boolean status, Student student);

    @Query("SELECT enroll FROM Enroll enroll WHERE(enroll.student = ?1)")
    List<Enroll> allEnrollByStudent(Student student);
}
