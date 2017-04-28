function Song(data) {
  this.title = data[0];
  this.artist = data[1];
  this.album = data[2];
  this.year = data[3];
  this.label = data[4];
  this.playtime = data[5];
};

Song.prototype.sing = function(player) {
    var title = this.title;
    var limit = this.playtime;
    var counter = 0;
    var step = 1000;
    var timer = setInterval(function () {
      makeItStart();
    }, step);

    function makeItStart() {
      counter += step;
      if (counter <= limit) {
        console.log("counter: " + counter);
        console.log("playing: " + title);
        if (counter === limit) {
          makeItStop();
        }
      } else {
        makeItStop();
      }
    }

    function makeItStop() {
      clearInterval(timer);
      tryNext();
      return;
    }

    function tryNext() {
      if (player.playlistIndex || player.playlistIndex === 0) {
        player.playlistIndex++;
        if (player.currentPlaylist[player.playlistIndex]) {
          player.playPlaylist(player.currentPlaylist[player.playlistIndex], player.currentPlaytimes[player.playlistIndex]);
        }
      }
    }
};


Song.prototype.getData = function () {
  this.showData = "\"" + this.title + "\" by " + this.artist.toUpperCase() + ", " +
  this.album + ", " + this.year + " " + this.label;
  console.log(this.showData);
};

Song.prototype.persistFavoriteStatus = function(value) {
  // something complicated
  throw new Error("not yet implemented");
};

module.exports = Song;
