package com.spring.challenge.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.List;

@Data
@Entity
public class client extends User{

    @JsonIgnore
    @OneToMany(targetEntity = JobApplication.class)
    private List<JobApplication> appliedJobs;


}
