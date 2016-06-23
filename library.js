var library = {
  tracks: { "123": { id: "123",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            "456": { id: "456",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            "789": { id: "789",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { "111": { id: "111",
                      name: "Coding Music",
                      tracks: ["123", "456"]
                    },
               "222": { id: "222",
                      name: "Empty Playlist",
                      tracks: []
                    }
             }
}
// FUNCTIONS TO IMPLEMENT:
// prints a list of all playlists, in the form:
// 123: Coding Music - 10 tracks
var printPlaylists = function () {
  for (var numPlay in library.playlists) {
      console.log(library.playlists[numPlay].id + ": " + library.playlists[numPlay].name + " - " + library.playlists[numPlay].tracks.length + " tracks");
  }
}
//printPlaylists(); hidden for now
// prints a list of all tracks, in the form:
// 123: Code Monkey by Jonathan Coulton (Thing a Week Three)
var printTracks = function () {
  for (var numtrack in library.tracks) {
      console.log(library.tracks[numtrack].id + ": " + library.tracks[numtrack].name + " by " +library.tracks[numtrack].artist + "(" + library.tracks[numtrack].album + ")");
    }
}
// prints a list of tracks for a given playlist, in the form:
// 123: Coding Music - 10 tracks
// 345: Code Monkey by Jonathan Coulton (Thing a Week Three)
var printPlaylist = function (playlistId) {
  console.log(library.playlists[playlistId].id + ": " + library.playlists[playlistId].name + " - " + library.playlists[playlistId].tracks.length + " tracks");
  for (var numtrack in library.tracks) {
    if ((-1) !== library.playlists[playlistId].tracks.indexOf(numtrack)) {
      console.log(library.tracks[numtrack].id + ": " + library.tracks[numtrack].name + " by " +library.tracks[numtrack].artist + "(" + library.tracks[numtrack].album + ")");
    }
  }
}
//printPlaylist("111"); hidden for now
​
​
// adds an existing track to an existing playlist
​
var addTrackToPlaylist = function (trackId, playlistId) {
​
library.playlists[playlistId].tracks.push(trackId);
}
​
// printPlaylist("222");
// addTrackToPlaylist("456", "222");
// printPlaylist("222");
​
///
​
// generates a unique id
// (use this for addTrack and addPlaylist)
​
var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
​
​
// adds a track to the library
​
var addTrack = function (name, artist, album) {
var id = uid();
​
    library.tracks[id]= {
    id: id,
    name: name,
    artist: artist,
    album: album
};
​
}
​
// addTrack("Best country song ever", "Billy Joe Dog", "Truck");
​
// printTracks();
​
// console.log(library);
​
// adds a playlist to the library
​
var addPlaylist = function (name) {
​
var id = uid();
​
    library.playlists[id]= {
    id: id,
    name: name,
    tracks: []
};
​
}
​
addPlaylist("I don't have a boston accent =(");
​
printPlaylists();
​
console.log(library);
​
​
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use RegExp.test()
​
var printSearchResults = function(query) {
​
}