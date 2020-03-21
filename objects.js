
var playlist = {artistNames: "songTitles"}

Create a function updatePlaylist that accepts three parameters: the playlist (an object), an artist name (a string), and a song title. The body of the function should add the song and artist as a key-value pair to the playlist object. The function should return the whole playlist.

function updatePlaylist(playlist, artistNames, songTitles){
  return Object.assign({}, playlist, { [artistNames]: songTitles })
}
function updateObjectWithObject(targetObject, updatesObject) {
  return Object.assign({}, targetObject, updatesObject)
}






Create a function removeFromPlaylist that accepts two arguments (the playlist object and the artist name). The body of the function should delete the key-value pair from the playlist and return the updated playlist.


function removeFromPlaylist(playlist, artistName)
