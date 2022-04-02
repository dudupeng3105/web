// https://stackoverflow.com/questions/10175367/youtube-api-event-on-a-specified-time

// first, load the YouTube Iframe API:
var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// some variables (global here, but they don't have to be)
var player;
var videoId = 'SomeYoutubeIdHere';
var videotime = 0;
var timeupdater = null;

// load your player when the API becomes ready
function onYoutubeIframeAPIReady() {
  player = new YT.Player('myPlayer', {
    width: '640',
    height: '390',
    videoId: videoId,
    events: {
      'onReady': onPlayerReady
    }
  });
}

// when the player is ready, start checking the current time every 100 ms.
function onPlayerReady() {
  function updateTime() {
    var oldTime = videotime;
    if(player && player.getCurrentTime) {
      videotime = player.getCurrentTime();
    }
    if(videotime !== oldTime) {
      onProgress(videotime);
    }
  }
  timeupdater = setInterval(updateTime, 100);
}

// when the time changes, this will be called.
function onProgress(currentTime) {
  if(currentTime > 20) {
    console.log("the video reached 20 seconds!");
  }
}