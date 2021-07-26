package com.example.sia.data.repository;

import com.example.sia.domain.entity.Course;
import com.example.sia.domain.entity.Major;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long>, JpaSpecificationExecutor<Course> {
    @Query("SELECT course FROM Course course WHERE(course.status_delete = ?1)")
    List<Course> findAllCourse(boolean status_delete);
    @Query("SELECT course FROM Course course WHERE(course.major = ?1)")
    List<Course> findAllCourseByMajor(Major major);

}
