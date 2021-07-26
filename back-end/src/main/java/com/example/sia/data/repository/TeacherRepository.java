package com.example.sia.data.repository;

import com.example.sia.domain.entity.Student;
import com.example.sia.domain.entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Long>, JpaSpecificationExecutor<Teacher> {
    Optional<Teacher> findByUsernameAndPassword(String username, String password);
}
