package com.spring.challenge.serviceimpl;

import com.spring.challenge.entities.Job;
import com.spring.challenge.repository.JobRepository;
import com.spring.challenge.service.JobI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service

public class JobImpl implements JobI {

    @Autowired
    private JobRepository jobRepository;

    @Override
    public List<Job> retrieveAllJob() {
        List<Job> jobs = (List<Job>) jobRepository.findAll();
        return jobs;
    }

    @Override
    public Job addJob(Job j) {
        jobRepository.save(j);
        return j;
    }

    @Override
    public void deleteJob(Long id) {
        jobRepository.deleteById(id);
    }

    @Override
    public Job updateJob(Job j) {
        ©
    }

    @Override
    public Job findByIdJob(Long id) {
        Job job = jobRepository.findById(id).orElse(null);
        return job;
    }

    @Override
    public Job retrieveJob(Long id) {
        return null;
    }
}
