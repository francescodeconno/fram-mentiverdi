var iframe = document.getElementById('video');
var player = $f(iframe);
var playButton = document.getElementById("playDiv");
var playText = document.getElementById("playText");
var cambiaButton = document.getElementById("cambia");

function playerPlay() {
	playText.innerHTML = "Pausa";
	player.api("play");
}

function playerPausa() {
	playText.innerHTML = "Play";
	player.api("pause");
}

playButton.addEventListener("click", function() {
  if (playText.innerHTML == "Play") {
    playerPlay();
  } else {
    playerPausa();
  }  
});

cambiaButton.addEventListener("click", function() {
  var FIRST_VIDEO_SRC = "https://player.vimeo.com/video/506305271?autoplay=1&loop=1&title=0&byline=0&portrait=0&api=1";
  var SECOND_VIDEO_SRC = "https://player.vimeo.com/video/506323651?autoplay=1&loop=1&title=0&byline=0&portrait=0&api=1";
  
  var iframe = document.getElementById('video');
  if (iframe.src == SECOND_VIDEO_SRC) {
    iframe.src = FIRST_VIDEO_SRC
  } else {
    iframe.src = SECOND_VIDEO_SRC
  }
  playerPlay();
});
