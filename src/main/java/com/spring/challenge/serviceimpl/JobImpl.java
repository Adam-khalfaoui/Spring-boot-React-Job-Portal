package com.spring.challenge.serviceimpl;

import com.spring.challenge.entities.User;
import com.spring.challenge.repository.CompanyRepository;
import com.spring.challenge.entities.Company;
import com.spring.challenge.entities.Job;
import com.spring.challenge.repository.JobRepository;
import com.spring.challenge.repository.UserRepository;
import com.spring.challenge.service.JobI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class JobImpl implements JobI {

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CompanyRepository companyRepository;

    @Override
    public List<Job> retrieveAllJob() {
        List<Job> jobs = (List<Job>) jobRepository.findAll();
        return jobs;
    }

    @Override
    public Job addJob(Job j, String username) {



        Company company = companyRepository.findByUsername(username).orElse(null);
System.out.println(company.getEmail());
        j.setPostedBy(company);

        jobRepository.save(j);
        return j;
    }

    @Override
    public void deleteJob(Long id) {
        jobRepository.deleteById(id);
    }

    @Override
    public Job updateJob(Job j) {
        return jobRepository.save(j);

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
