function Playlist(data) {
  this.songs = data;
  this.playtimes = [0];
  for (var i = 0; i < this.songs.length; i++) {
    this.playtimes.push(this.songs[i].playtime);
  }
}

Playlist.prototype.addSong = function (song) {
  this.songs.push(song);
}

module.exports = Playlist;
