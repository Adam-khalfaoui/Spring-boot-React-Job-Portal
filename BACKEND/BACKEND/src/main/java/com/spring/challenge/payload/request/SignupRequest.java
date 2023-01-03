package com.spring.challenge.payload.request;

import com.spring.challenge.entities.ERole;
import lombok.Data;

import javax.persistence.Enumerated;
import javax.validation.constraints.*;

@Data
public class SignupRequest {
  @NotBlank
  @Size(min = 3, max = 20)
  private String username;

  @NotBlank
  @Size(max = 50)
  @Email
  private String email;
  @Enumerated
  private ERole role;

  @NotBlank
  @Size(min = 6, max = 40)
  private String password;


}
