package edu.brown.cs.student.Data;

import java.util.List;

/**
 * This interface is used to instantiate a new object of Class type S. This is used in CSVParser
 * as a way to instantiate new objects in a generic way. Currently, StarClassInstantiator and
 * StudentInstantiator inherit from this interface. If we come across a new type of data
 * that would require its own class (such as StarClass and Student), we would also need to
 * create another class of "[ClassName]Instantiator" that would implement this interface.
 *
 * @param <S> - Class of the object to instantiate, such as Student and StarClass
 * @author taishinishizawa
 */
public interface IDataInstantiator<S> {
  /**
   * This method instantiates a new object of the given class S, taking in a list of
   * arguments which get passsed to the constructor of class S.
   *
   * @param arguments - the list of arguments (String) required by the constructor of Class S
   * @return the newly instantiated object of class S
   */
  S instantiateClass(List<String> arguments);
}
