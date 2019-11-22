var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post('/api/friends', function(req,res) {
    var userScore = req.body.scores;

    console.log(userScore);

    
  });

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friends.length = 0;

    res.json({ ok: true });
  });




}