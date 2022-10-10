package com.example.demo.student;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/")
@AllArgsConstructor

public class StudentController {

    private final StudentService studentService;
    @GetMapping("api/v1/students")
    public List<Student> getAllStudents(){
        /*List<Student> Students = Arrays.asList(
                new Student(1L,"aohn", "sou.iane@gzmafil.com", Gender.MALE),
                new Student(2L,"jbozhn", "sodu.ianqe@gdmail.com", Gender.FEMALE),
                new Student(3L,"jccohfzqn", "sozu.iane@zgmail.com", Gender.OTHER)
        );*/

        return studentService.getAllStudents();
    }

    @PostMapping("api/v1/students")
    public void addStudent(@RequestBody Student student){
        studentService.addStudent(student);
    }
}
