const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require("./routes")

app.use(express.json())

mongoose.connect('mongodb+srv://karthikmongo:soal@2511@cluster0.dvete.mongodb.net/hackernews?retryWrites=true&w=majority',
{
    useUnifiedTopology:true,
    useNewUrlParser:true
}
)

app.use("/api", routes) 



app.listen(3000, ()=>{
    console.log('server has started')
})