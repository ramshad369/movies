var express = require("express")
var router = express.Router()
var movieModel = require('../models/movieModel')
var ensureToken = require('../auth/token')

router.get('/listmovies',ensureToken, async(req,res)=>{
    var result = await movieModel.listmovies()
    if(!result){
        res.status(400)
        res.json({error:"List of movies is empty!"})
        return
    }
    res.json(result)
})

router.get('/listmoviesbygenre',ensureToken, async(req,res)=>{
    var result = await movieModel.listmoviesbygenre()
    if(!result){
        res.status(400)
        res.json({error:"List of movies is empty!"})
        return
    }
    res.json(result)
})

module.exports = router