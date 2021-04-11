var innerTopsongs = document.getElementById("inner-topsongs")
innerTopsongs.addEventListener('mouseover', () => {
    innerTopsongs.style.backgroundColor = "purple"
    // transition đc đưa vào trong thẻ và được giữ lại ở đó
    innerTopsongs.style.transition = "1s background-color"
})
innerTopsongs.addEventListener('mouseout', () => {
    innerTopsongs.style.backgroundColor = "black"
    
})

var Titanium = document.getElementById("Titanium")
var SongChanges = document.getElementById("song-change")

SongChanges.addEventListener("click", PlayandPause)
function PlayandPause(){
    if(Titanium.paused){
       Titanium.play()
    }
    else{
        Titanium.pause()
    }
}





