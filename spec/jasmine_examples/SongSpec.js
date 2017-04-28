describe("Song", function () {
  var Song = require("../../lib/jasmine_examples/Song");
  var song;
  var songData = ["title", "artist", "album", "year", "label"];

  beforeEach(function () {
    song = new Song(songData);
  });

  it("should should display info about itself", function () {
    song.getData();
    expect(song.showData).toEqual("\"title\" by ARTIST, album, year label");
  });
});
