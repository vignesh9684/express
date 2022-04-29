const express = require('express');
const app = express();
const port = process.env.port || 8081;
const bodyparser = require('body-parser');
app.use(bodyparser.json());


var students = [
    {   
    name :"vicky",
    class : "msc",
    year : "5th"
    },
    {
        name :"james",
        class : "msc",
        year : "5th"
    },
    {
        name :"john",
        class : "msc",
        year : "5th"
    }
]


app.get('/all', (req, res) =>{
    res.send(students);
})

app.get('/:id', (req, res) =>{

    if(req.params.id<students.length){
    // console.log(req.params.id);
    res.status(200).send({
        statusCode:200,
        datas:students[req.params.id]
       });
    }
    else
    {
        res.status(404).send({
            statusCode: 404,
            message: "invalid id"
        })
    }   
})

// app.get('/:name', (req, res) =>{
//     console.log(students[req.params.name]);
//     res.json(students[req.params.name]);
// })

app.post('/add',(req,res)=>{
    students.push(req.body);
    res.send({
        statusCode:201,
        message:"new data added successfully"
       });
})

app.put('/edit/:id',(req, res)=>{
    
    if(req.params.id<students.length)
    {
    students.splice(req.params.id,1,req.body);
    res.send({
        statusCode:201,
        message:"data edited successfully"
       });
    }
    else
    {
        req.send({
            statusCode:404,
            message:"Invalid Id"
        })
    }
    })

app.delete('/delete/:id',(req, res)=>{
       
        if(req.params.id<students.length)
        {
        students.splice(req.params.id,1);    
        res.send({
            statusCode:200,
            message:"data deleted successfully"
           });
        }
        else
        {
            req.send({
                statusCode:404,
                message:"Invalid Id"
            })
        }
        })

app.listen(port,()=>{console.log("listening on port",port)})