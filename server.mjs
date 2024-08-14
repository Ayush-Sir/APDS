import express from "express";

//set the port
const PORT = 3000;
const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('I am finally figuring this out')
})

app.listen(PORT)