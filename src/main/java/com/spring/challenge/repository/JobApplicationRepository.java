package com.spring.challenge.repository;

import com.spring.challenge.entities.JobApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobApplicationRepository extends JpaRepository<JobApplication, Long> {
    JobApplication findAllById(Long id);
}