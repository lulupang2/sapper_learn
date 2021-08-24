var mongo = require('mongoose');
var Schema = mongo.Schema;
var commentSchema = new Schema({
    contents: String,
    usrname: String,
    comment_date: { type: Date, default: Date.now() }
});

var boardSchema = new Schema({
    title: String,
    contents: String,
    usrname: String,
    write_date: { type: Date, default: Date.now() },
    comments: [commentSchema]
});

//module.exports = mongo.model('board'.boardSchema);