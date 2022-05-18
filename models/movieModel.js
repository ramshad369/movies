var mongoose = require('mongoose')
var Schema = mongoose.Schema

var movieSchema = new Schema({
    backdrop:{type: String},
    cast: { type: Array},
    classification: { type: String},
    director: { type: String},
    genres: {type: Array},
    imdb_rating: { type: Number},
    length: { type: String},
    overview: {type: String},
    poster: { type: String},
    released_on: { type: String},
    slug: { type: String},
    title: { type: String}
})

movieModel = mongoose.model('movie',movieSchema)


module.exports.listmovies = async()=>{
    try{
        return await movieModel.find({})
    }
    catch{
        return []
    }
}

module.exports.listmoviesbygenre = async()=>{
    try{
        return await movieModel.aggregate([{$unwind : "$genres"},{$group:{_id:"$genres", movies: { $push: "$$ROOT"}}}])
    }
    catch{
        return []
    }
}