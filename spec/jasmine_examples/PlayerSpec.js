describe("Player", function() {
  var Player = require('../../lib/jasmine_examples/Player');
  var Song = require('../../lib/jasmine_examples/Song');
  var Playlist = require('../../lib/jasmine_examples/Playlist');
  var player;
  var song;
  var songData;
  var playlist;
  var playlistData = [[]];
  var playlistStrings;

  beforeEach(function() {
    playlistStrings = [
      ["title","artist","album","year","label"],
      ["title1","artist1","album1","year1","label1"],
      ["title2","artist2","album2","year2","label2"],
      ["title3","artist3","album3","year3","label3"]
    ];
    for (var i = 0; i < playlistStrings.length; i++) {
      playlistData[i] = new Song(playlistStrings[i]);
    }
    songData = ["title","artist","album","year","label"];
    song = new Song(songData);
    playlist = new Playlist(playlistData);
    player = new Player();
  });

  it("should be able to play a Song", function() {
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher--SEE SpecHelper.js
    expect(player).toBePlaying(song);
  });

  it("should be able to play a Playlist of Songs", function() {
    player.playlist(playlist);
    for (var i = 0; i < playlist.length; i++) {
      expect(player.currentlyPlayingSong).toEqual(playlist[i]);
    }
  })

  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });
});//ends DESCRIBE PLAYER
