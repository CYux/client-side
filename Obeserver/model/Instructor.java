package model;

public class Instructor {
    private String name;
    private Course course = null;

    public Instructor(String name) {
        this.name = name;
    }


    public void prepareModule(String moduleName) {
        System.out.println(name + " is preparing " + moduleName);
        String contents = "make up some thins and sound convincing";
        LectureModule lectureModule = new LectureModule(moduleName, contents);
        course.addLectureModule(lectureModule);
    }

    public void assignCourse(Course course) {
        this.course = course;
    }


}