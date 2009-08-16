/**
 * @author lrbabe
 * Jaxer.load("/home/lrbabe/workspace/todoso/server/config/todoso.sh.js");
 */
Jaxer.load("file:///home/lrbabe/workspace/todoso/server/script/active.jaxer.js");
Jaxer.load("file:///home/lrbabe/workspace/todoso/server/config/reset.js");
Jaxer.load("file:///home/lrbabe/workspace/todoso/server/script/model.js");
Jaxer.load("file:///home/lrbabe/workspace/todoso/server/config/add3presentations.js");

ActiveRecord.logging = true;
ActiveRecord.connect(ActiveRecord.Adapters.JaxerSQLite);
//Reset();
Model();
Add3presentations();
Jaxer.Log.info("Done!")
ActiveRecord.logging = false;