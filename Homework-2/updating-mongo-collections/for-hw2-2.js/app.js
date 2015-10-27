// use weather;
// db = weather;
// db.data.find().sort({'State':1,'Temperature':-1}).limit(5).pretty();
// db.data.count();



var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/weather', function(err, db) {
    if(err) throw err;
    //  console.log('connected to: weather');

    var grades = db.collection('data');

    var state = '';
    var cursor = grades.find({}).sort({'State':1,'Temperature':-1}).limit(10);


    cursor.toArray(function(error,doc){
      doc.forEach(function(element){
         if(element["State"] !== state){
        console.dir(element["State"]+': '+element["Temperature"]);
        return db.close();
      }
    });
  });
});
