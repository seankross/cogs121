
/*
 * GET home page.
 */
//var songs = require('../recentlyplayed.json');
var firebase = require('firebase');
var Lyricist = require('lyricist/node6');

var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': '230d6325-2d8f-4b0c-b63a-2492560619bb',
  'password': 'fDgvgDyZUh3j',
  'version': '2018-03-16'
});



// Initialize Firebase
/*var config = {
  apiKey: "AIzaSyBvWcAaeczS12VRY__XiOXQMBD6hd3dAH0",
  authDomain: "spotimood.firebaseapp.com",
  databaseURL: "https://spotimood.firebaseio.com",
  projectId: "spotimood",
  storageBucket: "spotimood.appspot.com",
  messagingSenderId: "723908026631"
};
firebase.initializeApp(config); */

// Get a database reference to our blog


exports.view = function(req, res){

    var database = firebase.database();
    var ref = database.ref('recentlyplayed');
    var songs = " ";
    ref.on('value', snap => {
      
      songs = snap.val();
      //console.log(songs);

      res.render('mood', songs);
    });

    //console.log(songs.songs[0].name);

    //GET lyrics
    /*var accessToken = 'Dd3-2dZAw-MZnId7W0V-cSHAdRP1mR72k3YE3CKTqZj6PHan4NlotPg3VW5X_yVN';
    const lyricist = new Lyricist(accessToken);
    var songName = songs.songs[1].name.split("-")[0];
    var query = songName  + " " + songs.songs[1].artist;
    //console.log(query);
    lyricist.search(query)
      .then(response => {
        //console.log(response[0].full_title);
        console.log(response[0].id);

        var songID = response[0].id;


        lyricist.song(songID, { fetchLyrics: true })
        .then(songlyric => {
          
          console.log(songlyric.lyrics);


          var parameters = {
            'text': songlyric.lyrics,
            'features': {
              'emotion': {
                'document': true
              }
            }
          }
          
          natural_language_understanding.analyze(parameters, function(err, response) {
            if (err)
              console.log('error:', err);
            else
              console.log(JSON.stringify(response, null, 2));
          });
        });
        

      });*/



    
    
  };


