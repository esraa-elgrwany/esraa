import express from "express";

const app = express();
const students = [
    {
        name:"esraa",
},
{
    name:"aya", 
},
{
    name:"areej",  
},

{
    name:"ahmed", 
},
{
    name:"ali", 
},
{
    name:"nada", 
}
];

const Studentlist = (req, res) => {
    let output = "<ul>"

    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        output += "<li>" + student.name + "</li>";
    }

    output += "</ul>"
    res.send(output)
};

app.get("/students", Studentlist)

app.listen(5000);


