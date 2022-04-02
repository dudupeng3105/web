(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
//youtube API 불러오는 부분
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 자막 객체로 만드는 부분
var fs = require('fs');
var array = fs.readFileSync('subtitles3.txt').toString().split("\n");

replaceInString = function(fullString, search, replacement) {
  return fullString.split(search).join(replacement);
};

for(i in array) {      
    let captionObj = JSON.parse(array[i]);
    console.log(captionObj);
}


// my variable
var videotime = 0;
var timeupdater = null;
var captionIndex = 1
var makedCaption = 'caption'

// DOM varible
var main = document.getElementById('main');


//플레이어 변수 설정
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    //width&height를 설정할 수 있으나, 따로 css영역으로 뺐다.
    videoId: 'vO5Rio_skIU',
    events: {
      'onReady': onPlayerReady,//로딩중에 이벤트 실행한다
      'onStateChange': onPlayerStateChange//플레이어 상태 변화 시 이벤트를 실행한다.
    }
  });
}


//로딩된 후에 실행될 동작을 작성한다(소리 크기,동영상 속도를 미리   지정하는 것등등...)  
function onPlayerReady(event) {
  function updateTime() {
    var oldTime = videotime;    
    videotime = player.getCurrentTime();
    var captionObj = JSON.parse(array[captionIndex]);
    console.log(captionObj.text);
    makeCaption()
    function makeCaption() {      
      if (captionObj.start >= oldTime) {
        makedCaption = captionObj.text;        
      } else {
        captionIndex += 1;
      }
    }
    main.innerHTML = `<h2><strong>${makedCaption}</strong></h2>`;
  }
  timeupdater = setInterval(updateTime, 1000);
  // event.target.playVideo();//자동재생
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    done = true;
    //플레이어가 재생중일 때 작성한 동작이 실행된다.(원하는 시간만큼만 재생되고 멈추게 하는 것도 가능하다.)
  }
}



},{"fs":1}]},{},[2]);
