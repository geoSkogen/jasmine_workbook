var Song = require('./Song');
var Playlist = require('./Playlist');
var Player = require('./Player');
var popData = [
  ["poppy", "popstarz", "we are poptarts", "1976", "blueberrybill", 6000],
  ["jellyfishers", "milo stylo", "bubbleblower", "2006", "shirtface", 9000],
  ["pizzabike", "jackie microwave", "blue carrots", "3034", "crispycity", 12000]
];

var popSongs = [[]];
for (var i = 0; i < popData.length; i++) {
  popSongs[i] = new Song(popData[i]);
}

var playlist1 = new Playlist(popSongs);
var player1 = new Player();

player1.initPlaylist(playlist1);

/*
var strings = ["hello", "hello node", "hello jasmine", "hello BDD"];
var waitFors = [0, 6000, 9000, 12000];
var timeLimits = [6000, 9000, 12000, 9000];
var word;
var delay;
var duration;
var index = 0;

function makeThemWait(string, timeLimit, waitFor) {
  var wait = setTimeout(function () { stepByStep(string, timeLimit); }, waitFor);
  index++;
}

function stepByStep(string, limit) {
  var step = 1000;
  var counter = 0;
  var timer = setInterval(function () { makeItStart(); }, step);


  function makeItStart() {
    console.log(string);
    console.log(counter);
    counter += step;
    if (counter >= limit) {
      makeItStop();
    }
  }

  function makeItStop() {
    clearInterval(timer);
    nextInLine();
    return;
  }
}

function nextInLine() {
  if (strings[index]) {
    makeThemWait(strings[index], timeLimits[index], waitFors[index]);
  } else {
    return;
  }
}


makeThemWait(strings[index], timeLimits[index], waitFors[index]);
*/

/*
var one = setTimeout(function () { console.log("playing short song"); }, 0);
var two = setTimeout(function () { console.log("playing med song"); }, 5000);
var three = setTimeout(function () { console.log("playing long song"); }, 12000);
var four = setTimeout(function () { console.log("done"); }, 24000);
*/
