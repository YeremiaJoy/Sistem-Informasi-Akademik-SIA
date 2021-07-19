package com.example.sia.data.repository;

import com.example.sia.domain.entity.Major;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MajorRepository extends JpaRepository<Major, Long>, JpaSpecificationExecutor<Major> {
    Optional<Major> findByCodeAndName(String code, String name);
    Optional<Major> findByCode(String Code);
    @Query("SELECT major FROM Major major WHERE(major.status_delete = ?1)")
    List<Major> findAllMajor(boolean status_delete);
}
