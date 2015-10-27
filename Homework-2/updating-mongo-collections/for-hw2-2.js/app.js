use weather;
db = weather;
db.data.find().sort({'State':1,'Temperature':-1}).limit(5).pretty();


// var MongoClient = require('mongodb').MongoClient;
//
// MongoClient.connect('mongodb://localhost:27017/weather', function(err, db) {
//     if(err) throw err;
//
//     var query ={};
//
//         db.collection('data').findOne(query, function(err, doc) {
//         if(err) throw err;
//         if(!doc) {
//             console.log('No documents for assignment ' + query.assignment + ' found!');
//             return db.close();
//         }
//         //
//         // console.log(doc)
//         // // query['_id'] = doc['_id'];
//         // // doc['date_returned'] = new Date();
//         //
//         // db.collection('data').update(query, doc, function(err, updated) {
//         //     if(err) throw err;
//         //
//         //     console.dir("Successfully updated " + updated + " document!");
//         //
//         //     return db.close();
//         // });
//     });
// });
