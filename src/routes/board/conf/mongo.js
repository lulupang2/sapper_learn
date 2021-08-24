var mongo = require('mongoose');

const mongourl = 'mongodb://3.37.159.52/sapper_1';

var promise = mongo.connect(mongourl, { useUnifiedTopology: true, useNewUrlParser: true }, {
    useNewUrlParser: true
});


var db = mongo.connection;
db.on('error', console.error.bind(console, 'connection error:')); // on(event, listener) 이벤트 리스너 추가
db.once('open', function() { //once(event,listener) 1회용
    console.log("접속성공");
});

exports.db = db;