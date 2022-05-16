package edu.brown.cs.student.db_proxy.GenericDatabase;

import com.google.common.cache.CacheBuilder;
import com.google.common.cache.CacheLoader;
import com.google.common.cache.LoadingCache;
import edu.brown.cs.student.db_proxy.Exceptions.CommandNotFoundException;
import edu.brown.cs.student.db_proxy.Exceptions.TableNotFoundException;
import edu.brown.cs.student.db_proxy.Exceptions.SQLPermissionDeniedException;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.concurrent.TimeUnit;

/**
 * Class for instantiating a Cache for a database.
 */
public class Cache {
  private LoadingCache<String, ResultSet> sqlCache;
  private static final int MAX_SIZE = 10;
  private static final int EVICTION_TIME = 300;

  /**
   * Constructor which will instantiate a Cache of SQL query to ResultSet.
   *
   * @param conn the connection to the database
   */
  public Cache(Connection conn) {
    RunSQL rSql = new RunSQL(conn);
    CacheLoader<String, ResultSet> sqlLoader = new CacheLoader<>() {
      @Override
      public ResultSet load(String s)
              throws SQLException, SQLPermissionDeniedException, TableNotFoundException,
              CommandNotFoundException {
        return rSql.runCommand(s);
      }
    };
    this.sqlCache = CacheBuilder.newBuilder().maximumSize(MAX_SIZE).
            expireAfterWrite(EVICTION_TIME, TimeUnit.SECONDS).build(sqlLoader);
  }

  /**
   * method which returns the current cache.
   *
   * @return the LoadingCache containing the SQL query and its corresponding ResultSet
   */
  public LoadingCache<String, ResultSet> getSqlCache() {
    return this.sqlCache;
  }
}
