import express from "express";

//set the port
const PORT = 3000;
const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('I am finally figuring this out, no more crying')
})

// start the Express server
app.listen(PORT)

/*import http from "http";

const PORT = 3000;

const server = http.createServer((req,res)=>{
    res.end('I am crying less because my server is working')
})

server.listen(PORT)*/