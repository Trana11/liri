var keys = require("./keys.js");

var Twitter = require("twitter");

var getMyTweets = function() {
  var client = new Twitter(keys.twitterKeys);
};
var params = { screen_name: "" };

var getArtistNames = function(artist) {
  return artist.name;
};
var getMeSpotify = function(songName) {
  spotify.search({ type: "track", query: "dancing in the moonlight" }, function(
    err,
    data
  ) {
    if (err) {
      console.log("error");
      return;
    }
    var songs = data.tracks.items;
    for (var i = 0; i < songs.length; i++) {
      console.log(i);
      console.log("artist(s): " + songs[i].artists.map(getArtistNames));
      console.log("song name: " + songs[i].name);
      console.log("preview songs: " + songs[i].preview_url);
      console.log("album: " + songs[i].ablum.name);
    }
  });
};

var pick = function(caseData, functionData) {
  switch (caseData) {
    case "my0tweets":
      getMyTweets();
      break;
    case "spotify-this-song":
      getMeSpotify(functionData);
      break;
    default:
      console.log("Liri doesn't know");
  }
};

var runThis = function(argOne, argTwo) {
  pick(argOne, argTwo);
};

runThis(process.argv[2], process.argv[3]);
