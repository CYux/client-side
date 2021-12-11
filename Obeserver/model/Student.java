package model;

import java.util.ArrayList;
import java.util.List;

import observer.LectureObserver;

public abstract class Student implements Teachable, LectureObserver {

    private String name;
    private int id;
    private List<Course> courses = new ArrayList<>();

    public Student(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public void addCourse(Course c) {
        if (!courses.contains(c)) {
            courses.add(c);
            c.addStudent(this);
        }
    }

    @Override
    public void update(LectureModule lModule) {
        System.out.println("Prof has posted lecture module" + lModule);
    }

    public void printRecord() {
        System.out.println(id + ":" + name);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null || getClass() != obj.getClass())
            return false;
        Student student = (Student) obj;
        return name.equals(student.name);
    }

    @Override
    public int hashCode() {
        return name.hashCode();
    }

}