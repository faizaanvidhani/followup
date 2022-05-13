package edu.brown.cs.student.questionnaire;

import java.util.List;

public class MultipleChoiceQuestion implements Questionnaire {

  private final int questionID;
  private final String questionText;
  private final List<String> answerOptions;

  public MultipleChoiceQuestion(int questionID, String text, List<String> answerOptions) {
    this.questionID = questionID;
    this.questionText = text;
    this.answerOptions = answerOptions;
  }

  public int getQuestionID() {
    return this.questionID;
  }

  public String getQuestionText() {
    return this.questionText;
  }
}
