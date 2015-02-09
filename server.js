
var http = require('http'), // http module
	fs = require('fs'),  // file system module
	qs = require('qs'); // querystring parser
	Speak = require('tts-speak'); // tts-speak module

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

// store the contents of 'index.html' to a buffer
var html = fs.readFileSync('./index.html');

speak.once('ready', function() {

	// create the http server
	http.createServer(function (req, res) {

	  // handle the routes
	  if (req.method == 'POST') {

	    // pipe the request data to the console
	    req.pipe(process.stdout);

		    speak.say("lorem sandwich!");

	    // pipe the request data to the response to view on the web
	    res.writeHead(200, {'Content-Type': 'text/plain'});
	    req.pipe(res);

	  } else {
	    
	    // for GET requests, serve up the contents in 'index.html'
	    res.writeHead(200, {'Content-Type': 'text/html'});
	    res.end(html);
	  }

	}).listen(8000);
});





