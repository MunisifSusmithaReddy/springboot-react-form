package com.cassandra.jpa.demo.repository;

import org.springframework.data.cassandra.repository.CassandraRepository;

import com.cassandra.jpa.demo.entity.Person;

public interface PersonRepository extends CassandraRepository<Person, String> {
    // Custom query methods, if needed
}
