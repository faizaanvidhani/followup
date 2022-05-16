package edu.brown.cs.student.questionnaire;

public class FreeResponseQuestion implements Questionnaire {

  private final int questionID;
  private final String questionText;

  public FreeResponseQuestion(int questionID, String text) {
    this.questionID = questionID;
    this.questionText = text;
  }

  public int getQuestionID() {
    return this.questionID;
  }

  public String getQuestionText() {
    return this.questionText;
  }
}
