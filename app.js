var express = require('express');
var mongoose = require('mongoose');
var app   = express()
var cors = require('cors')
var bodyParser = require('body-parser')
app.use(cors({
    origin:"*",
    optionsSuccessStatus: 200,

}))

const connect  = ()=>{
    return mongoose.connect("mongodb+srv://boat123:boat123@cluster0.zcqewyi.mongodb.net/?retryWrites=true&w=majority")
}
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


require("./mainRoutes")(app);
app.get("/checking", (req,res) => {
res.send("hello")

})
app.listen(3333,()=>{
    connect()
    console.log("db connected")
})