//首頁
var mongodb = require('mongodb');
var ObjectId = require('mongodb').ObjectID;
var mc = mongodb.MongoClient;

//列出資料
exports.index = function(req, res) {
    mc.connect('mongodb://process.env.db_user:process.env.pwd@ds115738.mlab.com:15738/messageboard', (err,db) => {
        var collection = db.collection('test2');

        collection.find().toArray((err, result) => {
            if(!err){
                res.render('pages/index', {
                         listdata: result
                });
                // for (var i = 0; i < result.length ; i++) {
                //     //data[i] = result[i];
                //     res.render('pages/index', {
                //         listdata: data
                //     });
                // }
            }else{
                console.log(err);
            }
        });    
        db.close()  
    });
    
};

//傳統輸入 
exports.post = function(req, res) {
    //console.log(req.body);
    //res.render('pages/success');
    mc.connect('mongodb://process.env.db_user:process.env.pwd@ds115738.mlab.com:15738/messageboard', (err,db) => {
        var collection = db.collection('test2');

        var Today = new Date();
        var str=(Today.getFullYear()+ " 年 " + (Today.getMonth()+1) + " 月 " + Today.getDate() + " 日");
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
        db.close()
    });
    res.render('pages/success');
};

//刪除
exports.delete = function(req, res) {
    
    mc.connect('mongodb://process.env.db_user:process.env.pwd@ds115738.mlab.com:15738/messageboard', (err,db) => {
    var collection = db.collection('test2');

    console.log(req.body.id);
    var condition = {"_id": ObjectId(req.body.id)};
    collection.remove(condition, (err, result) => {
        if(!err){
            res.send('success');
        }else{
            res.send('error');
        }
    });
    db.close()
    });

}

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

