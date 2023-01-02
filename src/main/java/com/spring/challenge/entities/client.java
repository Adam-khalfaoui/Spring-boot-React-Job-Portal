package com.spring.challenge.entities;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.List;

@Data
@Entity
public class client extends User{

    @OneToMany(targetEntity = JobApplication.class)
    private List<JobApplication> appliedJobs;


}
