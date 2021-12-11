package Composite.ui;

import Composite.Model.Lecture;
import Composite.Model.Topic;
import Composite.Model.Video;

public class Main {

    public static void main(String[] args) {
        Topic designPattern = new Topic("Design pattern");
        Topic obsever = new Topic("Obsever");
        Topic composite = new Topic("Composite");
        Lecture patternIntro = new Lecture("Intro to patterns");
        Lecture obseverIntro = new Lecture("Intro to obsever");
        Video compositeIntro = new Video("Let's Compose!");
        designPattern.addModule(obsever);
        designPattern.addModule(composite);
        designPattern.addModule(patternIntro);
        obsever.addModule(obseverIntro);
        composite.addModule(compositeIntro);
        designPattern.display(" ");
    }
}