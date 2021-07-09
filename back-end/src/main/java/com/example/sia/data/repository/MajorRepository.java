package com.example.sia.data.repository;

import com.example.sia.domain.entity.Major;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MajorRepository extends JpaRepository<Major, Long>, JpaSpecificationExecutor<Major> {
    Optional<Major> findByCodeAndName(String code, String name);
    Optional<Major> findByCode(String Code);
}
