var express = require('express');
var router = express.Router();

var fs = require('fs'),  // file system module
	qs = require('qs'); // querystring parser
	Speak = require('tts-speak'); // tts-speak module


/* GET users listing. */
router.post('/', function(req, res, next) {

    var text = req.body.text;

    console.log("Reading text: " + text);

    // res.send('respond with a resource');
    var speak = new Speak({
        tts: {
            engine: 'google',               // The engine to use for tts
            lang: 'en-us',                  // The voice to use
            cache: __dirname + '/cache',    // The cache directory were audio files will be stored
            loglevel: 0,                    // TTS log level (0: trace -> 5: fatal)
            delayAfter: 500                 // Mark a delay (ms) after each message
        },
        speak: {
            engine: 'auto',                 // Auto select the audio player
            volume: 100,                    // Volume in %
            loglevel: 0                     // Audio player log level
        },
        loglevel: 0                         // Wrapper log level
    });
    speak.once('ready', function() {
        speak.say(text);
    });

});

module.exports = router;
