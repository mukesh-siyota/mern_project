const TeacherModel = require("../models/TeacherModel");
const mongoose = require("mongoose")

const TeacherController = {
   async create(req, res) {
        const body = req.body
        await TeacherModel.create(body)
        res.send({message : "Success! New Record Created."});
    },
    async readAll(req, res) {
        const teacherDetail = await TeacherModel.find()
        res.send({message : "Success! 46 Records Found.",
            data : teacherDetail
        });
    },
   async readOne(req, res) {
        const params = req.params
        const teacherRecord = await TeacherModel.findById(params.id)
        res.send({message : "Success! Student Details Found.",
            data : teacherRecord
        });
    },
   async update(req, res) {
        const params = req.params
        const body = req.body
       await TeacherModel.findByIdAndUpdate(params.id, body)
        res.send({message : "Success! Student Records updated."});
    },
   async destroy(req, res) {
        const params = req.params
        await TeacherModel.findByIdAndDelete(params.id)
        res.send({message : "Success! Record has been deleted."});
    }
}

module.exports = TeacherController;