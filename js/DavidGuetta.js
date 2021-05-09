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
var playImg = document.getElementById("play-img")
var SayMyName = document.getElementById("Titanium")
SongChanges.addEventListener("click", PlayandPause)

function PlayandPause(){
    if(Titanium.paused){
       Titanium.play()
       playImg.src = "../img/pause button.png"
    }
    else{
        Titanium.pause()
        playImg.src = "../img/play-button (24)_5ab94929cf6aa.png"
        
    }
}
function smallButton1(){
    if(Titanium.paused){
       Titanium.play()
       
    }
    else{
        Titanium.pause()
        
        
    }
}
function smallButton2(){

}





