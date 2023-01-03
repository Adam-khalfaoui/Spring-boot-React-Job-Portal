package com.spring.challenge.serviceimpl;

import com.spring.challenge.entities.Company;
import com.spring.challenge.entities.Job;
import com.spring.challenge.entities.client;
import com.spring.challenge.entities.JobApplication;
import com.spring.challenge.repository.ClientRepository;
import com.spring.challenge.repository.JobApplicationRepository;
import com.spring.challenge.repository.JobRepository;
import com.spring.challenge.service.JobApplicationI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service

public class JobAppliactoinImpl implements JobApplicationI {
    @Autowired
    private JobRepository jobRepository;
    @Autowired
    private JobApplicationRepository JobApplicationRepository;

    @Autowired
    private ClientRepository clientRepository;
    @Override
    public List<JobApplication> retrieveAllAppliaction() {
        List<JobApplication> JobApplications = (List<JobApplication>) JobApplicationRepository.findAll();
        return JobApplications;
    }

    @Override
    public JobApplication addAppliaction(JobApplication ja ,String username,Long idJob) {
        client client = clientRepository.findByUsername(username).orElse(null);
        System.out.println(username);
        Job job = jobRepository.getById(idJob);
        ja.setJob(job);
        ja.setClient(client);


        JobApplicationRepository.save(ja);
        return ja;

    }

    @Override
    public void deleteJAppliaction(Long j) {
        jobRepository.deleteById(j);

    }

    @Override
    public JobApplication updateAppliaction(JobApplication j) {
        return JobApplicationRepository.save(j);
    }


    @Override
    public JobApplication retrieveAppliaction(Long id) {
        JobApplication application = JobApplicationRepository.findAllById(id);
        return application;
    }



}
