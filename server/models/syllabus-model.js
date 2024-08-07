const  { Schema, model, Mongoose} = require("mongoose");

const syllabusSchema = new Schema({
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
    },
});

const Syllabus = new model("Syllabus",syllabusSchema);

module.exports = Syllabus;


