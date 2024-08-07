package com.cassandra.jpa.demo.entity;

import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

import lombok.Data;

@Table
@Data
public class Person {

    @PrimaryKey
    private String id;

    private String name;
    private String email;
}
