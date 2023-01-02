package com.spring.challenge.entities;

import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import javax.persistence.Id;
import java.time.LocalDate;
import java.util.List;

@Data
@Entity
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private String jobTitle;

    private String jobDescription;

    private  String location;

    @Enumerated
    private ContarctType contarctType;

    private Integer views;

    @ManyToOne(targetEntity = User.class, cascade = { CascadeType.MERGE, CascadeType.REFRESH })
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "recruiter_id")
    private Company postedBy;

    private LocalDate postedDate = LocalDate.now();


    @OneToMany(mappedBy = "job", targetEntity = JobApplication.class, cascade = { CascadeType.MERGE,
            CascadeType.REFRESH })
    @OnDelete(action = OnDeleteAction.CASCADE)
    private List<JobApplication> jobApplications;
}
