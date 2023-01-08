package com.spring.challenge.repository;

import com.spring.challenge.entities.Company;
import com.spring.challenge.entities.client;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ClientRepository extends JpaRepository<client, Long> {


    Optional<client> findByUsername(String username);
}