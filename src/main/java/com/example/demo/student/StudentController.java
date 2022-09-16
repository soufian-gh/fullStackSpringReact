package com.example.demo.student;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/")

public class StudentController {
    @GetMapping("api/v1/students")
    public List<Student> getAllStudents(){
        List<Student> Students = Arrays.asList(
                new Student(1L,"aohn", "sou.iane@gzmafil.com", Gender.MALE),
                new Student(2L,"jbozhn", "sodu.ianqe@gdmail.com", Gender.FEMALE),
                new Student(3L,"jccohfzqn", "sozu.iane@zgmail.com", Gender.OTHER)
        );
        return Students;
    }
}
