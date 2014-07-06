// Squome.com

$( document ).ready(function() {
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
  		event.preventDefault();
  		this.reset();
  		message.fadeIn(600, function(){});
  		setTimeout(messageOut, 1200);
	});

});