package model;

import java.util.ArrayList;
import java.util.List;
import observer.Subject;

public class Course extends Subject {
    private String courseName;
    private Instructor instructor;
    private List<Student> students = new ArrayList<>();
    private List<LectureModule> lectureModules = new ArrayList<>();

    public Course(String courseName) {
        this.courseName = courseName;
    }

    public void addInstructor(Instructor ins) {
        this.instructor = ins;
        instructor.assignCourse(this);
    }

    public void addStudent(Student student) {
        if (!students.contains(student)) {
            students.add(student);
            student.addCourse(this);
            addObserver(student);
        }
    }

    public void printEnrolled() {
        for (Student s : students) {
            s.printRecord();
        }
    }

    public void addLectureModule(LectureModule lectureModule) {
        lectureModules.add(lectureModule);
        notifyObserver(lectureModule);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null || getClass() != obj.getClass())
            return false;
        Course course = (Course) obj;
        return courseName.equals(course.courseName);
    
    }

}