package com.spring.challenge.service;

import com.spring.challenge.entities.Job;
import com.spring.challenge.entities.JobApplication;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface JobApplicationI {

    List<JobApplication> retrieveAllAppliaction();

    JobApplication addAppliaction(JobApplication ja ,String username,Long idJob);

    @Transactional
    void deleteJAppliaction(Long j);

    JobApplication updateAppliaction(JobApplication j);

    JobApplication  retrieveAppliaction(Long id);

}
