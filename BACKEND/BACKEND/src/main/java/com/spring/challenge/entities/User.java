package com.spring.challenge.entities;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


@Data
@Inheritance(strategy=InheritanceType.TABLE_PER_CLASS)
@Entity
public class User {
  @Id
  @GeneratedValue

  private Long id;

  @NotBlank
  @Size(max = 20)
  private String username;

  @NotBlank
  @Size(max = 50)
  @Email
  private String email;

  @NotBlank
  @Size(max = 120)
  private String password;

  @Enumerated
  private ERole role ;

  public User() {
  }


  }

