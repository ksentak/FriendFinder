var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post('/api/friends', function(req,res) {

    var friend = req.body;
    
    // ParseInt newFriend scores
    for(var i = 0; i < friend.scores.length; i++) {
      friend.scores[i] = parseInt(friend.scores[i]);
    }

    // Max Difference is defined as being the most points away and best friend has an identical score
    var bestFriend = 0;
    var maxDifference = 40;

    for (var i = 0; i < friends.length; i++) {
      var totalDifference = 0;
      
      for (var j = 0; j < friends[i].scores.length; j++) {
        var difference = Math.abs(friend.scores[j] - friends[i].scores[j]);
        totalDifference += difference;
      }

      if(totalDifference < maxDifference) {
        bestFriend = i;
        maxDifference = totalDifference;
      }
    }

    friends.push(friend);

    console.log(friends);

    res.json(friends[bestFriend]);

    console.log(bestFriend);
  });
};

