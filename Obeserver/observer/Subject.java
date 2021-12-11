package observer;

import java.util.ArrayList;
import java.util.List;

import model.LectureModule;

public class Subject {
    private List<LectureObserver> lectureObservers = new ArrayList<>();

    public void addObserver(LectureObserver lectureObserver) {
        if (!lectureObservers.contains(lectureObserver)) {
            lectureObservers.add(lectureObserver);
        }
    }

    public void notifyObserver(LectureModule lModule) {
        for (LectureObserver observer : lectureObservers) {
            observer.update(lModule);
        }
    }
}
