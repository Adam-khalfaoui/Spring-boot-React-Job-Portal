package com.spring.challenge.repository;

import com.spring.challenge.entities.Company;
import com.spring.challenge.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {


    Optional<Company> findByUsername(String username);

}