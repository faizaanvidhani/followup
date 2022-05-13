package edu.brown.cs.student.Data;

import java.util.List;

/**
 * This class is used to instantiate a new object of type Student and inherits IDataInstantiator.
 * @author taishinishizawa
 */
public class StudentInstantiator implements IDataInstantiator<Student> {
  @Override
  public Student instantiateClass(List<String> arguments) {
    return new Student(arguments);
  }
}
