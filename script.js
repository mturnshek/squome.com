// Squome.com

$( document ).ready(function() {

	// Firebase setup
	var myRootRef = new Firebase('https://popping-fire-5741.firebaseIO.com');

	// This also cluttered things.
	// While more information is nice, it's better to just have messages.
	/*
	myRootRef.push({
   		date: (new Date()).toString(),
   		connection: "User connected",
   		user: navigator.userAgent
	});
	*/

	// Setting the DOM elements to variables
	var background = $("#background");
	var banner = $("#banner");
	var inputBar = $("#inputBar");
	var message = $("#message");

	// Squome fading logic
	loadBanner = function() {
		banner.fadeIn(800, function(){});
	}
	loadBar = function() {
		inputBar.fadeIn(800, function(){});
	}
	loadBackground = function() {
		background.fadeIn(800, function(){});
	}

	setTimeout(loadBanner, 100);
	setTimeout(loadBar, 100);
	setTimeout(loadBackground, 100);

	messageOut = function() {
		message.fadeOut(600, function(){});
	}

	// Keywords

	yoTime = 0;
	yo = function() {
		yoCooldown = 30000
		if ((yoTime + yoCooldown) < Date.now()) {
			apitokenvalue = "8ffe3194-fd3a-16cc-7de7-cbe211bc1515"
			$.post('http://api.justyo.co/yoall/',
				   {'api_token': apitokenvalue });
			yoTime = Date.now();
		}
	}

	// Eval loop
	$("#input").submit(function(event) {
		event.preventDefault();
		// "yo" doesn't appear in the logs
		// blank messages don't appear in the logs
		if ($("#inputBar").val() != "") {
			if ($("#inputBar").val() != "yo") {
				myRootRef.push({
	   				message: $("#inputBar").val(),
	   				date: (new Date()).toString()
	   				// user: navigator.userAgent // This was sort of cluttered
				});
			}
	  		message.fadeIn(600, function(){});
	  		setTimeout(messageOut, 1200);
	  	}

	  	// Keywords //

	  	// "yo"
	  	// This sends a yo to everyone that has yo'd squome
	  	if ($("#inputBar").val() == "yo") {
			yo();
		}

	  	this.reset();
	});

});