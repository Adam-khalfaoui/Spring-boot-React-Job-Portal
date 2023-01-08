package com.spring.challenge.repository;

import com.spring.challenge.entities.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface JobRepository extends JpaRepository<Job, Long> {


    public void deleteByIdJob(Long id);


  public  Job findAllByIdJob(Long id);
}