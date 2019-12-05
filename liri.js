require("dotenv").config(); //for using env to hide keys
var axios = require("axios");   //Import axios for GET calls
var moment = require('moment'); //Import moment for time conversion/display
var Spotify = require("node-spotify-api");  // Import the node-spotify-api 
var keys = require("./keys"); // Import the API keys
var fs = require("fs"); // Import the FS package for read/write.
var spotify = new Spotify(keys.spotify);  // Initialise spotify with apikeys and secret
var omdb = keys.omdb.apikey;
var bit = keys.bit.apikey;


var usrInput = process.argv[2]; //get the cmdline inputs
var usrQuery = process.argv.slice(3).join(" ");//get the cmdline inputs

/* read in the action user is requesting and execute*/
function cmdLinePrompt(usrInput,usrQuery){
    switch(usrInput){
        case "movie-this": movieThis();
        break;
        case "spotify-this-song": spotifyThis();
        break;
        case "do-what-it-says":doThis(usrQuery);
        break;
        case "concert-this":concertThis();
        break;
    }
};
cmdLinePrompt(usrInput,usrQuery);

function movieThis(){
    var axios = require("axios");
if(!usrQuery){
    usrQuery="Mr. Nobody";    //if no movie is specified default values is this
}

var queryUrl = "http://www.omdbapi.com/?t=" + usrQuery + "&y=&plot=short&apikey="+omdb;


axios.get(queryUrl).then(
    function(response) {
        
      console.log("Movie Title: " + response.data.Title);
      console.log("Release Year: " + response.data.Year);
      console.log("IMDB Rating: " + response.data.imdbRating);
      console.log("RottenTomato Rating: " + response.data.Ratings[1].Value);
      console.log("Made In : " + response.data.Country);
      console.log("Language : " + response.data.Language);
      console.log("Movie Plot : " + response.data.Plot);
      console.log("Actors : " + response.data.Actors);
      
    })
    .catch(function(error) {
      if (error.response) {
        
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {
        
        console.log(error.request);
      } else {
        
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}

function spotifyThis(){
    if(!usrQuery){
        usrQuery="The Sign";
    }
    
    spotify
    .search({ type: 'track', query: usrQuery ,limit:1})
    .then(function(response) {
    //   console.log(response);
    
      var albumArr = response.tracks.items;
    //   console.log(albumArr)
       for (var i=0; i<albumArr.length;i++){  
           console.log("Artist Name: ",albumArr[i].artists[0].name);
           console.log("Album Name: ",response.tracks.items[i].album.name);
           console.log("Song Name: ",response.tracks.items[i].name);
           console.log("Preview URL: ",response.tracks.items[i].preview_url);
           
       }
    })
    .catch(function(err) {
      console.log(err);
    });
     
}

function doThis(){
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) throw err;
        var randomTxt = data.split(",");
        usrInput = randomTxt[0];
        usrQuery =randomTxt[1];
        cmdLinePrompt(usrInput,usrQuery);
    });
}

function concertThis(){
    
var queryUrl = "https://rest.bandsintown.com/artists/"  + usrQuery + "/events?app_id="+bit;
console.log(queryUrl);
axios.get(queryUrl).then(
    function(response) {
        for (var i = 0; i < response.data.length; i++) {
            console.log("Venue Name: "+ response.data[i].venue.name);
            console.log("Venue Location: " + response.data[i].venue.city + ", " + response.data[i].venue.country);
            console.log("Venue Coordinates: " + response.data[i].venue.latitude + ", " + response.data[i].venue.longitude);
            console.log("Date of the Event: " + moment(response.data[i].datetime).format("L"));
            console.log("=================================");
        }

        
    })
    .catch(function(error) {
      if (error.response) {
        
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {
        
        console.log(error.request);
      } else {
        
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}

