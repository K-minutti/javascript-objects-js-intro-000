
var playlist = {artistNames: "songTitles"}


function updatePlaylist(playlist, artistNames, songTitles){
  return Object.assign({}, playlist, { [artistNames]: songTitles })
}






Create a function removeFromPlaylist that accepts two arguments (the playlist object and the artist name). The body of the function should delete the key-value pair from the playlist and return the updated playlist.


function removeFromPlaylist(playlist, artistName)
