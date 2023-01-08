package com.spring.challenge.controllers;

import javax.validation.Valid;

import com.spring.challenge.entities.Company;
import com.spring.challenge.entities.User;
import com.spring.challenge.entities.client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.challenge.payload.request.LoginRequest;
import com.spring.challenge.payload.request.SignupRequest;
import com.spring.challenge.payload.response.JwtResponse;
import com.spring.challenge.payload.response.MessageResponse;
import com.spring.challenge.repository.UserRepository;
import com.spring.challenge.security.jwt.JwtUtils;
import com.spring.challenge.security.services.UserDetailsImpl;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
  @Autowired
  AuthenticationManager authenticationManager;

  @Autowired
  UserRepository userRepository;



  @Autowired
  PasswordEncoder encoder;

  @Autowired
  JwtUtils jwtUtils;

  @PostMapping("/signin")
  public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

    Authentication authentication = authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

    SecurityContextHolder.getContext().setAuthentication(authentication);
    String jwt = jwtUtils.generateJwtToken(authentication);
    System.out.println(jwt);
    
    UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();


    return ResponseEntity.ok(new JwtResponse(jwt,
            "Bearer",
                         userDetails.getId(), 
                         userDetails.getUsername(), 
                         userDetails.getEmail(),
            userDetails.getRole()));
  }

  @PostMapping("/signup")
  public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
    if (userRepository.existsByUsername(signUpRequest.getUsername())) {
      return ResponseEntity.ok(new MessageResponse("Error: Username is already taken!"));
    }

    if (userRepository.existsByEmail(signUpRequest.getEmail())) {
      return
      ResponseEntity.ok(new MessageResponse(" Error: Email is already in use!"));
    }

    // Create new user's account



    User user = new User() ;
    user.setEmail(signUpRequest.getEmail());
    user.setPassword( encoder.encode(signUpRequest.getPassword()));
    user.setRole(signUpRequest.getRole());
      String role = String.valueOf(signUpRequest.getRole());


      switch (role) {
        case "ROLE_COMPANY":
          Company company = new Company();

          company.setEmail(signUpRequest.getEmail());
          company.setPassword( encoder.encode(signUpRequest.getPassword()));
          company.setRole(signUpRequest.getRole());
          company.setUsername(signUpRequest.getUsername());

          userRepository.save(company);

          break;
        case "ROLE_SEEKER":

         client client  = new client();

          client.setEmail(signUpRequest.getEmail());
          client.setPassword( encoder.encode(signUpRequest.getPassword()));
          client.setRole(signUpRequest.getRole());
          client.setUsername(signUpRequest.getUsername());
          userRepository.save(client);
          break;

        }

    return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
  }
}
