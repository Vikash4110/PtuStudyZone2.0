const  { Schema, model, Mongoose} = require("mongoose");

const notesSchema = new Schema({
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
    link : {
        type : String,
        required : true
    }
});

const Notes = new model("Notes",notesSchema);

module.exports = Notes;


