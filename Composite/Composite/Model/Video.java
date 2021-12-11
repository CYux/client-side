package Composite.Model;

public class Video extends Module{
    private String name;

    public Video(String name) {
        this.name = name;
    }
    
    public void display(String indentLevel) {
        System.out.println(indentLevel + name);
    }
}