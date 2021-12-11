package Composite.Model;

import java.util.ArrayList;
import java.util.List;

public class Topic extends Module {
    // private List<Topic> topics = new ArrayList<>();
    // private List<Lecture> lectures = new ArrayList<>();
    // private List<Video> videos = new ArrayList<>();
    private String name;

    private List<Module> modules = new ArrayList<>();

    public Topic(String name) {
        this.name = name;
    }

    // public void addTopic(Topic c) {
    // topics.add(c);
    // }

    // public void addVideo(Video v) {
    // videos.add(v);
    // }

    // public void addLecutre(Lecture lecture) {
    // lectures.add(lecture);
    // }

    public void addModule(Module m) {
        modules.add(m);
    }

    public void display(String indentLevel) {
        System.out.println(indentLevel + name);
        for (Module module : modules) {
            module.display(indentLevel + indentLevel);
        }
    }
    // public void display(String indentLevel) {
    // System.out.println(indentLevel + name);
    // for (Lecture lecture : lectures) {
    // lecture.display(indentLevel + indentLevel);
    // }
    // for (Video video : videos) {
    // video.display(indentLevel + indentLevel);
    // }
    // for (Topic topic : topics) {
    // topic.display(indentLevel + indentLevel);
    // }
}
