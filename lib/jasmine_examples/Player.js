function Player() {
}

Player.prototype.play = function(song) {
  this.currentlyPlayingSong = song;
  this.isPlaying = true;
  console.log("playing " + song.title);
  song.getData();
  song.sing();
};

Player.prototype.playlist = function(playlist) {
  var self = this;
  var waitTime;
  var songToPlay;
  for (var i = 0; i < playlist.songs.length; i++) {
    waitTime = playlist.playtimes[i];
    songToPlay = playlist.songs[i];
    makeThemWait(songToPlay, waitTime);
  }

  function makeThemWait(songObj, millisecs) {
    var wait = setTimeout(function () {
        self.play(songObj);
      }, millisecs);
  }
};

Player.prototype.pause = function() {
  this.isPlaying = false;
  console.log("paused " + this.currentlyPlayingSong.title);
};

Player.prototype.resume = function() {
  if (this.isPlaying) {
    throw new Error("song is already playing");
  }

  this.isPlaying = true;
};

Player.prototype.makeFavorite = function() {
  this.currentlyPlayingSong.persistFavoriteStatus(true);
};

module.exports = Player;
