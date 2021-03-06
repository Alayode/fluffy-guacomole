// use weather;
// db = weather;
// db.data.find().sort({'State':1,'Temperature':-1}).limit(5).pretty();
// db.data.count();



var MongoClient = require('mongodb').MongoClient;

queries = [];
MongoClient.connect('mongodb://localhost:27017/weather', function(err, db) {
    if(err) throw err;
    //  console.log('connected to: weather');

    var grades = db.collection('data');

    var state = '';
    var cursor = grades.find({}).sort({'State':1,'Temperature':-1});


    cursor.toArray(function(error,doc){
      doc.forEach(function(element){
         if(element["State"] !== state){
        //console.dir(element["State"]+': '+element["Temperature"]);
        state = element["State"];

        queries.push({
          "State": element["State"],
          "Temperature": element["Temperature"]
          });
//        console.dir()
}
});
          queries.forEach (function(query){
            //we should have four different states with the highest temps for that state.
            console.log(query);//prints four objects
            var operator = {$set: {'month_high': true}};

            db.collection('data').update(query,operator,function(err,updated){
              // created the update function where we will use the query and operators parameters and
              //callback function
              console.log('updated');
              return db.close();
            });

            db.collection('data').find(query,function(err,doc){
              if (err)  return db.close();
              console.log(doc)
            });


          })


        // return db.close();
  });
});
