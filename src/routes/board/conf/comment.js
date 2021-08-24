var mongo = require('mongoose');
var Schema = mongo.Schema;

var commentSchema = new Schema({
    contents: String,
    usrname: String,
    comment_date: { type: Date, default: Date.now() }

});

module.exports = mongo.model('comment', commentSchema);