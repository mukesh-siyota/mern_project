const express = require("express");
const StudentController = require("./app/controller/StudentController");
const TeacherController = require("./app/controller/TeacherController");
const AuthController = require("./app/controller/AuthController")
const mongoose = require("mongoose");
const { PORT } = require("./app/utils/constants.utils");
const { authMiddleware } = require("./app/middleware/authMiddleware");
const app = express();

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/StudentDB");


app.post("/student", [authMiddleware],StudentController.create);
app.get("/student" , [authMiddleware],  StudentController.readAll);
app.get("/student/:id",[authMiddleware], StudentController.readOne);
app.put("/student/:id", [authMiddleware], StudentController.update);
app.delete("/student/:id", [authMiddleware], StudentController.destroy);

app.post("/teacher", [authMiddleware], TeacherController.create);
app.get("/teacher", [authMiddleware], TeacherController.readAll);
app.get("/teacher/:id", [authMiddleware], TeacherController.readOne);
app.put("/teacher/:id", [authMiddleware], TeacherController.update);
app.delete("/teacher/:id", [authMiddleware], TeacherController.destroy);

app.post("/register", AuthController.register),
app.post("/login", AuthController.login)


app.get("/", (req, res)=> {
    res.send("welcome to the coding world!");
});

app.get("/about", (req, res)=> {
    res.send("something about me");
});

app.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}`);
});