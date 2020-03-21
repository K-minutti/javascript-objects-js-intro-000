
var playlist = {artistName: "songTitle"}


function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign(playlist, {[artistName]: songTitle})
}



function removeFromPlaylist(playlist, artistName){
  return Object.assign(playlist, {0, [artistName]:} )
}
