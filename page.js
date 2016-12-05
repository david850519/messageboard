//首頁

exports.index = function(req, res) {
        
       
            var mongodb = require('mongodb');
            var mc = mongodb.MongoClient;
            mc.connect('mongodb://zitim:999TIMTI@ds115738.mlab.com:15738/messageboard', (err,db) => {
            var collection = db.collection('test2');
    //查詢
            collection.find().toArray((err, result) => {
                if(!err){
                    
                    for (var i = 0; i < result.length ; i--) {
                        //data[i] = result[i];
                        res.render('pages/index', {
                            listdata: result
                        });
                    }
  
                }else{
                    console.log(err);
                }
            });
           

            //結束
            db.close()
            });
             
};

/*exports.index = function(req, res) {
    var mongodb = require('mongodb');
    var mc = mongodb.MongoClient;

    mc.connect('mongodb://zitim:999TIMTI@ds115738.mlab.com:15738/messageboard', (err,db) => {
    var collection = db.collection('test2');

    //查詢
    //var condition = {title: '324'};
    collection.find().toArray((err, result) => {
      if(!err){
        for (var i = result.length - 1; i >= 0; i--) {
          var data = result[i];
            res.render('pages/index', {
            ogheadTitle: '留言板',
            listdata: data
        });
        }
          //console.log(result);
      }else{
          console.log(err);
      }
  });


  //結束
  db.close()


  

});
    
};*/

//傳統輸入 

exports.post = function(req, res) {
    console.log(req.body);
    res.render('pages/success');

var mongodb = require('mongodb');
var mc = mongodb.MongoClient;

mc.connect('mongodb://zitim:999TIMTI@ds115738.mlab.com:15738/messageboard', (err,db) => {
    var collection = db.collection('test2');
    var Today = new Date();
    var str=(Today.getFullYear()+ " 年 " + (Today.getMonth()+1) + " 月 " + Today.getDate() + " 日");
    console.log(str);
    //新增資料
    var data = {
        title: str,
        message: req.body.password,
    };
    collection.insert(data, (err, result) => {
        if(!err){
            console.log(result);
        }else{
            console.log(err);
        }
    });

    //結束
    db.close()


  

});
    //res.send(req.body.password);
};

exports.postAjax = function(req, res) {
    // ajax
   if (req.body.password == 1234) {
        res.send('success');
    } else(
        res.send('error')
    );

};

//get取得資料
exports.getAjax = function(req, res) {
    res.send([{
        name: '王小名',
        tel: '0922194720'
    }, {
        name: '李小花',
        tel: '0983026183'
    }, {
        name: '王大雄',
        tel: '0929735162'
    }]);
};


//get取得Json
exports.getJson = function(req, res){
    var tours = [
        { id: 0, name: 'Hood River', price: 99.99 },
        { id: 1, name: 'Oregon Coast', price: 149.95}
    ];

    res.json(tours);
};

