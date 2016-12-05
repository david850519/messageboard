
var mongodb = require('mongodb');
var mc = mongodb.MongoClient;

mc.connect('mongodb://zitim:999TIMTI@ds115738.mlab.com:15738/messageboard', (err,db) => {
	var collection = db.collection('test2');
	var data;
	//查詢
	//var condition = {title: '324'};
	collection.find().toArray((err, result) => {
	    if(!err){
	    	for (var i = result.length - 1; i >= 0; i--) {
	    		data[i]= result[i];
	    		console.log(result[i]);
	    	}
	        //console.log(result);
	    }else{
	        console.log(err);
	    }
	});


	//結束
	db.close()


  

});



