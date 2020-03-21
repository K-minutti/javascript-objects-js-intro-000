
var playlist = {artistNames: "songTitles"}


function updatePlaylist(playlist, artistNames, songTitle){
  return Object.assign({}, playlist, {[artistNames]: songTitle})
}



function removeFromPlaylist(playlist, artistName){
  return Object.assign({}, playlist, [artistNames])
}
