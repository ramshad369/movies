var express = require("express")
var app = express()
const cors = require("cors")
var routes = require("./routes")
var mongoose = require("mongoose")
var MONGO_URL = process.env.MONGO_URL|| "mongodb+srv://ramshadak:5267447689rty@cluster0.5txro.mongodb.net/test?authSource=admin&replicaSet=atlas-brh9v0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true"
var PORT  = process.env.PORT || 4000

app.use(cors())
app.options("*",cors())

mongoose.connect(MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.use('/api',routes)
app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.listen(PORT, ()=>{
console.log("app listenig to port"+PORT)
})
