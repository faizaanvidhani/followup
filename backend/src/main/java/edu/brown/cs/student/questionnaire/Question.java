package main.java.edu.brown.cs.student.questionnaire;

public class Question {

  private final int questionID;
  private final String questionText;
  private final String questionType;

  public Question(int questionID, String text, String type) {
    this.questionID = questionID;
    this.questionText = text;
    this.questionType = type;
  }
}
