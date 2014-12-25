// Squome.com

$( document ).ready(function() {

	// Firebase setup
	var myRootRef = new Firebase('https://popping-fire-5741.firebaseIO.com');

	// Setting the DOM elements to variables
	var banner = $("#banner");
	var inputBar = $("#inputBar");
	var message = $("#message");

	// Squome fading logic
	document.body.style.opacity = .8; // so green can shade the website

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

	green = function() {
		document.body.style.background = "#C5E3BF";
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
		if ($("#inputBar").val() == "green") {
			green();
		}

	  	this.reset();
	});

});