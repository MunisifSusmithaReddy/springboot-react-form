package com.cassandra.jpa.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cassandra.jpa.demo.entity.Person;
import com.cassandra.jpa.demo.repository.PersonRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PersonService {

    @Autowired
    private PersonRepository repository;

    public Person save(Person entity) {
        return repository.save(entity);
    }

    public Optional<Person> findById(String id) {
        return repository.findById(id);
    }

    public List<Person> findAll() {
        return repository.findAll();
    }

    public void deleteById(String id) {
        repository.deleteById(id);
    }

    // other service methods
}
