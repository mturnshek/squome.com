// Squome.com

$( document ).ready(function() {

	// Firebase setup
	var myRootRef = new Firebase('https://popping-fire-5741.firebaseIO.com');

	myRootRef.push({
   		date: (new Date()).toString(),
   		connection: "User connected",
   		user: navigator.userAgent
	});

	// Squome main logic
	var banner = $("#banner");
	var inputBar = $("#inputBar");
	var message = $("#message");

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

	$("#input").submit(function(event) {
		myRootRef.push({
   			message: $("#inputBar").val(),
   			date: (new Date()).toString(),
   			user: navigator.userAgent
		});
  		event.preventDefault();
  		this.reset();
  		message.fadeIn(600, function(){});
  		setTimeout(messageOut, 1200);
	});

});