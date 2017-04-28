function Player() {
}

Player.prototype.play = function(song) {
  this.currentlyPlayingSong = song;
  this.isPlaying = true;
  console.log("playing " + song.title);
  song.getData();
  song.sing(this);
};

Player.prototype.initPlaylist = function(playlist) {
  this.playlistIndex = 0;
  this.currentPlaytimes = playlist.playtimes;
  this.currentPlaylist =  playlist.songs;
  songToPlay = this.currentPlaylist[0];
  waitTime = this.currentPlaytimes[0];
  this.playPlaylist(songToPlay, waitTime);
};

Player.prototype.playPlaylist = function (songObj, waitTime) {
  var self = this;
  var wait = setTimeout(function () {
      self.play(songObj);
    }, waitTime);
}

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
