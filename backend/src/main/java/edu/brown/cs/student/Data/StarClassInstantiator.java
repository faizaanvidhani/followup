package edu.brown.cs.student.Data;

import java.util.List;

/**
 * This class is used to instantiate a new object of type StarClass and inherits IDataInstantiator.
 *
 * @author taishinishizawa
 */
public class StarClassInstantiator implements IDataInstantiator<StarClass> {
  @Override
  public StarClass instantiateClass(List<String> arguments) {
    return new StarClass(arguments);
  }
}
