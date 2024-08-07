package com.cassandra.jpa.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.cassandra.jpa.demo.entity.Person;
import com.cassandra.jpa.demo.service.PersonService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class PersonController {

    @Autowired
    private PersonService service;

    @PostMapping("/person")
    public Person createEntity(@RequestBody Person entity) {
        return service.save(entity);
    }

    @GetMapping("/person/{id}")
    public Optional<Person> getEntity(@PathVariable String id) {
        return service.findById(id);
    }
    @DeleteMapping("/person/{id}")
     public void deleteEntity(@PathVariable String id) {
     service.deleteById(id);
  }

    @GetMapping("/persons")
    public List<Person> getEntities() {
        return service.findAll();
    }

    // other endpoints
}
