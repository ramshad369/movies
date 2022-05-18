

ensureToken = (req, res, next)=> {
    var authHeader = req.headers.authorization
    var token = authHeader.split(" ") [1]
    if(token === undefined){
        res.status(401).send({error: "No token provided!"})
        return
    }
   else if(token !== "FSMovies2021"){
    res.status(400).send({error: "Authentication failed!"})
    return
   }
        else{
            next()
        }
  }
  module.exports = ensureToken