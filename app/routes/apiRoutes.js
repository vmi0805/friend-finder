const frienddata = require("../data/friends.js");

module.exports = function(app){

  app.get("/api/friends", function(req, res) {
    res.json(frienddata);
  });

  app.post("/api/friends", function(req, res){
  	frienddata.push(req.body);
  	res.json(frienddata)
  });

}