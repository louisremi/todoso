function Reset() {

ActiveRecord.execute("DROP TABLE IF EXISTS users");
ActiveRecord.execute("DROP TABLE IF EXISTS articles");
ActiveRecord.execute("DROP TABLE IF EXISTS tags");
ActiveRecord.execute("DROP TABLE IF EXISTS sections");
ActiveRecord.execute("DROP TABLE IF EXISTS scripts");
ActiveRecord.execute("DROP TABLE IF EXISTS styles");
ActiveRecord.execute("DROP TABLE IF EXISTS htmls");


}
