package Composite.Model;

public class Lecture extends Module{
    private String name;

    public Lecture(String name) {
        this.name = name;
    }

    public void display(String indentLevel) {
        System.out.println(indentLevel + name);
    }
}