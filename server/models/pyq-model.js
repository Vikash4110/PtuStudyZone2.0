const  { Schema, model, Mongoose} = require("mongoose");

const pyqSchema = new Schema({
    service : {
        type : String,
        required : true
    },
    semester : {
        type : String,
        required : true
    },
    subject : {
        type : String,
        required : true
    },
    subjectcode : {
        type : String,
        required : true
    },
    linka : {
        type : String,
        required : true
    },
    linkb : {
        type : String,
        required : true
    },
    linkc : {
        type : String,
        required : true
    },
});

const Pyq = new model("Pyq",pyqSchema);

module.exports = Pyq;


