package com.spring.challenge.entities;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Company extends User{


    @OneToMany(mappedBy = "postedBy", targetEntity = Job.class, cascade = { CascadeType.PERSIST, CascadeType.MERGE,
            CascadeType.REFRESH, CascadeType.DETACH })
    private List<Job> postedJobs;


}
