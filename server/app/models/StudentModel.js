const {Schema,model} = require("mongoose");
const StudentSchema = new Schema({
    name : {
        type : String,
        required : true
    },

    fatherName : {
        type : String,
    },

    email : {
        type : String
    },

    phoneNumber : {
        type : String,
        required : true
    },

    dob : {
        type : Date,
        required : true
    }

})

const StudentModel = model("Student", StudentSchema);
module.exports = StudentModel;