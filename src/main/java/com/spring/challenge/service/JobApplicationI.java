package com.spring.challenge.service;

import com.spring.challenge.entities.Job;
import com.spring.challenge.entities.JobApplication;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface JobApplicationI {

    List<JobApplication> retrieveAllAppliaction();

    JobApplication addAppliaction(JobApplication j);

    @Transactional
    void deleteJAppliaction(Long j);

    JobApplication updateAppliaction(Job j);

    JobApplication  retrieveAppliaction(Long id);

}
