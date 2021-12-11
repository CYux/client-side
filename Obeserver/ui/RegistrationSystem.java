package ui;

import model.*;

import java.util.ArrayList;
import java.util.List;

public class RegistrationSystem {
    //private List<Student> students = new ArrayList<>();
    private List<Course> courses = new ArrayList<>();
    private List<Instructor> instructors = new ArrayList<>();

    public RegistrationSystem() {

        Instructor prof_A = new Instructor("prof_A");
        Instructor prof_B = new Instructor("prof_B");
        Instructor prof_C = new Instructor("prof_C");
        instructors.add(prof_A);
        instructors.add(prof_B);
        instructors.add(prof_C);

        Course filmMaking = new Course("Film Making");
        filmMaking.addInstructor(prof_A);
        courses.add(filmMaking);

        Course howToCode = new Course("How to Code");
        howToCode.addInstructor(prof_B);
        courses.add(howToCode);

        Course fashion = new Course("Fashion");
        fashion.addInstructor(prof_C);
        courses.add(fashion);

        registerStudent(new OnlineStudent(1, "Adam"), filmMaking);
        registerStudent(new OnlineStudent(2, "Chan"), filmMaking);
        filmMaking.printEnrolled();

        System.out.println("\n\n");

        prof_A.prepareModule("Take a photo");
    }

    public void registerStudent(Student s, Course c) {
        c.addStudent(s);
    }
    
    public static void main(String[] args) {
        new RegistrationSystem();
    }
}
