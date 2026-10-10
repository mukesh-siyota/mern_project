const { Schema,model } = require("mongoose");


const TeacherSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    phone : {
        type : String
    }
})



const TeacherModel = model("teacher", TeacherSchema)
module.exports = TeacherModel;
