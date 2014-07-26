// Squome.com

$( document ).ready(function() {

	// Firebase setup
	var myRootRef = new Firebase('https://popping-fire-5741.firebaseIO.com');

	myRootRef.push({
   		date: (new Date()).toString(),
   		connection: "User connected",
   		user: navigator.userAgent
	});

	// Setting the DOM elements to variables
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

	setTimeout(loadBanner, 100);
	setTimeout(loadBar, 100);

	messageOut = function() {
		message.fadeOut(600, function(){});
	}

	// Keyword function calls
	yo = function() {
		apitokenvalue = "8ffe3194-fd3a-16cc-7de7-cbe211bc1515"
		$.post('http://api.justyo.co/yoall/',
			   {'api_token': apitokenvalue });
	}

	// Eval loop
	$("#input").submit(function(event) {
		event.preventDefault();
		// This is to prevent someone from spamming no message
		if ($("#inputBar").val() != "") {
			myRootRef.push({
	   			message: $("#inputBar").val(),
	   			date: (new Date()).toString(),
	   			user: navigator.userAgent
			});
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