package edu.brown.cs.student.symptomlog;

public class SymptomLog {
  private final int patient_id;
  private final String time;
  private final int question_id;
  private final String answer;

  public SymptomLog(int patient_id, String time, int question_id, String answer) {
    this.patient_id = patient_id;
    this.time = time;
    this.question_id = question_id;
    this.answer = answer;
  }
}
