// Squome.com

$( document ).ready(function() {

	// Firebase setup
	var myRootRef = new Firebase('https://popping-fire-5741.firebaseIO.com');

	// Squome main logic
	var inputBar = $("#inputBar");
	var message = $("#message");

	loadBar = function() {
		inputBar.fadeIn(800, function(){});
	}

	setTimeout(loadBar, 800);

	messageOut = function() {
		message.fadeOut(600, function(){});
	}

	$("#input").submit(function(event) {
		myRootRef.push({
   			message: $("#inputBar").val(),
   			date: (new Date()).toString()
		});
  		event.preventDefault();
  		this.reset();
  		message.fadeIn(600, function(){});
  		setTimeout(messageOut, 1200);
	});

});