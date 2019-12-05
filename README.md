# LIRI Bot
- LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.For example LIRI is like iphone's SIRI.


## How it works
  - Using using node js LIRI will accept commands from command line to execute the following and display requested details.
  #### movie-this - will display movie related details fetched from OMDB. A default movie listing will be returned if no movie title is specified. 
  Example: _node liri movie-this it_  you will see:
  - Movie Title: Dr. Who and the Daleks
  - Release Year: 1965
  - IMDB Rating: 5.7
  - RottenTomato Rating: 47%
  - Made In : UK
  - Language : English
  - Movie Plot : An eccentric inventor and his companions travel in his TARDIS to the Planet Skaro .. and battle the evil    menace of the Daleks.
  - Actors : Peter Cushing, Roy Castle, Jennie Linden, Roberta Tovey
____________________________________________
  #### spotify-this-song - will fetch album/song rlated details from spotify. if no song is specified a default song detail will be displayed.
  Example: node liri spotify-this-song good girls gone bad
  - Artist Name:  the JaneDear girls
  - Album Name:  Good Girls Gone Bad
  - Song Name:  Good Girls Gone Bad
  - Preview URL:  https://p.scdn.co/mp3-preview/94a2961a61de7ebc0756fa3a9798d991c36ddd14?cid=a71a989a70ee4636974eb314328472a7

  ____________________________________________________________________
  #### do-what-it-says - will read details from a random.txt file and execute the command. Eg. if spotify-this,"I Want it That Way" is the file content then the song details for this song is returned.
  Example: node liri.js do-what-it-says
  - Artist Name:  Backstreet Boys
  - Album Name:  The Hits--Chapter One
  - Song Name:  I Want It That Way
  - Preview URL:  https://p.scdn.co/mp3-preview/e72a05dc3f69c891e3390c3ceaa77fad02f6b5f6?cid=a71a989a70ee4636974eb314328472a7

  ____________________________________________

  #### concert-this - will fetch band/artist events from bandintown api. this also uses momentjs to display time in mm/dd/yyyy format.
  Example: node liri concert-this taylor swift
  - Venue Name: Capital's Jingle Bell Ball
  - Venue Location: London, United Kingdom
  - Venue Coordinates: 51.503038, 0.0031543
  - Date of the Event: 12/08/2019
=================================
 - Venue Name: Z100's Jingle Ball Presented by Capital One
 - Venue Location: New York, United States
 - Venue Coordinates: 40.7507387, -73.9937978
 - Date of the Event: 12/13/2019
================================= 

## Tools Used

- [Visual Studio Code](#vscode)
- [Chrome Browser](#chrome)
- [GitLab](https://ucb.bootcampcontent.com/)
- [GitHub](https://github.com/)
- [W3Schools](https://www.w3schools.com/default.asp)
- [SlackForum] (#slackforum)
- [StackOver Flow](https://stackoverflow.com/)

## Core Technologies Used
- JavaScript
- Node JS

## API's  Used
 - [OMDB](http://www.omdbapi.com)
 - [Spotify](https://developer.spotify.com/)
 - [Bands In Town](http://www.artists.bandsintown.com/bandsintown-api)
 
## NPM packages used
- [Axios] (https://www.npmjs.com/package/axios)
- [Moment](https://www.npmjs.com/package/moment)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Node Spotify API](https://www.npmjs.com/package/node-spotify-api)
- [File System](https://nodejs.org/api/fs.html)

## Challenges in getting this to work:
 - Using the dotenv to hide the actual apikeys was good learning and took a few tries to get it right. 
 - Using multiple node js packages was fun and learned things can be done differently.
 - How the keys are hidden :
 - this is the keys.js file and it contains the id and secret for spotify. The .env file contains the actual values of the id and secret.
 ```javascript
 exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
```
- In the liri.js we have the following:
```javascript
var spotify = new Spotify(keys.spotify);  
var omdb = keys.omdb.apikey;
var bit = keys.bit.apikey;
```
- With just one line we are able to keep the keys secure



