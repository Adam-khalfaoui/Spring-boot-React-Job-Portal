package com.spring.challenge.service;

import com.spring.challenge.entities.Job;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface JobI {

    List<Job> retrieveAllJob();

    Job addJob(Job j);

    @Transactional
    void deleteJob(Long j);

    Job updateJob(Job j);

    Job findByIdJob(Long id);

    Job  retrieveJob(Long id);


}
