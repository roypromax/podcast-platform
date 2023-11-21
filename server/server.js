const express = require("express");
const {connection} = require("./configs/db.js");
require('dotenv').config();

const port = process.env.port || 8080;

const app = express();


app.get("/",(req,res)=>{
    res.send("Podcast Platform Backend");
})

app.listen(port,async()=>{
    try {
        await connection;
        console.log("Connected to database")
    } catch (error) {
        console.log("Error connecting to database");
        console.log({error:error});
    }
    console.log(`Server is running at port ${port}`);
})