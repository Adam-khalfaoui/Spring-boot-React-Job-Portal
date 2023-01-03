package com.spring.challenge.controllers;

import com.spring.challenge.entities.Job;
import com.spring.challenge.entities.JobApplication;
import com.spring.challenge.entities.client;

import com.spring.challenge.security.services.UserDetailsImpl;
import com.spring.challenge.security.services.UserDetailsServiceImpl;
import com.spring.challenge.service.JobApplicationI;
import com.spring.challenge.serviceimpl.JobImpl;
import org.hibernate.internal.JdbcObserverImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/job")
public class JobController {


    @Autowired
    JobImpl jobImpml ;

    @Autowired
    UserDetailsServiceImpl userDetailsImpl;

    @Autowired
    JobApplicationI jobApplicationImpml ;


    @PostMapping("applyToJob/{id}" )
    @ResponseBody
    public JobApplication applyToJob(@PathVariable("id") Long jobId, @RequestBody JobApplication ja, Principal principal)
    {
        String username = principal.getName();
        JobApplication application = jobApplicationImpml.addAppliaction(ja,username,jobId);



        return application;
    }

    @GetMapping("/all")
    public List<Job> getJobs() {
        List<Job> listJobs = jobImpml.retrieveAllJob();
        return listJobs;
    }

    @PostMapping(value="/add" )
    public ResponseEntity<Object> addJob(@RequestBody Job j, Principal principal) throws NoSuchFieldException {
        String username = principal.getName();

        Job job = jobImpml.addJob(j,username);

        if(job==null){
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }else


        return new ResponseEntity<>(job, HttpStatus.OK);
    }


    @DeleteMapping("delete/{id}")
    public void deletejOB(@PathVariable("id") Long jobId) {

        jobImpml.deleteJob(jobId);
    }




    @GetMapping("/find/{id}")
    @ResponseBody
    public Job findById(@PathVariable("id") Long jobId ){

        Job job = jobImpml.findByIdJob(jobId);

        return job;
    }



    @PutMapping("update/{id}")
    @ResponseBody
    public Job updateProduit(@PathVariable("id") Long id, @RequestBody Job j) {
        Job job = jobImpml.updateJob(j);
        return job;
    }




    @GetMapping("/allApllication")
    public List<JobApplication> getApps() {
        List<JobApplication> listApps = jobApplicationImpml.retrieveAllAppliaction();
        return listApps;
    }
}
