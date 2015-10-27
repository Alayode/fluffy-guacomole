// use weather;
// db = weather;
// db.data.find().sort({'State':1,'Temperature':-1}).limit(5).pretty();

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/weather', function(err, db) {
    if(err) throw err;
      console.log('connected to: weather');
      db.close();
});
