const mongoose = require("mongoose")
const StudentModel = require("../models/StudentModel")
const StudentController = {
    create(req, res) {
        const body = req.body
        StudentModel.create(body);
        res.status(201).json({
            message: "Success! New Record Created.",
            body
        });
    },
    async readAll(req, res) {
        const studentRecords = await StudentModel.find();
        res.send({ message: "Success! 46 Records Found.", data: studentRecords });
    },
    async readOne(req, res) {
        const params = req.params
        const studentDetails = await StudentModel.findById(params.id)
        res.send({
            message: "Success! Student Details Found.",
            data: studentDetails
        });
    },
    async update(req, res) {
        const params = req.params

        const body = req.body
        await StudentModel.findByIdAndUpdate(params.id, body)
        res.send({ message: "Success! Student Records updated."});
    },
    async destroy(req, res) {
        const params = req.params
        await StudentModel.findByIdAndDelete(params.id)
        res.send({ message: "Success! Record has been deleted." });
    }
}

module.exports = StudentController