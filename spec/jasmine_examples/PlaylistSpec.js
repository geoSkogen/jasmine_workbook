describe("Playlist", function () {
  var Playlist = require("../../lib/jasmine_examples/Playlist");
  var Song = require("../../lib/jasmine_examples/Song");
  var playlist;
  var addData = ["addTitle", "addArtist", "addAlbum", "addYear", "addLabel", 240000];
  var playlistStrings = [
    ["title","artist","album","year","label", 240000],
    ["title1","artist1","album1","year1","label1", 240000],
    ["title2","artist2","album2","year2","label2", 240000],
    ["title3","artist3","album3","year3","label3", 240000]
  ];
  var playlistData = [[]];

  beforeEach(function () {
    for (var i = 0; i < playlistStrings.length; i++) {
      playlistData[i] = new Song(playlistStrings[i]);
    }
  });
  playlist = new Playlist(playlistData);

  it("should be able to add a song", function () {
    playlist.addSong(addData);
    expect(playlist.songs.indexOf(addData)).toEqual(playlist.songs.length-1);
  });

});
