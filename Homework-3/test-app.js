use school;

students = db.students;
students.count();

// what do we want?
query = {_id : 137};

//give me the query that is in the students collection in the school database oh and make it pretty!!!
students.find(query).pretty();

students.aggregate( { '$unwind' : '$scores' } , { '$group' : { '_id' : '$_id' , 'average' : { $avg : '$scores.score' } } } , { '$sort' : { 'average' : -1 } } , { '$limit' : 1 } )
