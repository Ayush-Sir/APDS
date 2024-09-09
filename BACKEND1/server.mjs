import express from "express";

//set the port
const PORT = 3001;
const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('I am finally figuring this out, no more crying')
})

// start the Express server
app.listen(PORT)