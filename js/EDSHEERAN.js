var innerTopsongs = document.getElementById("inner-topsongs")
innerTopsongs.addEventListener('mouseover', () => {
    innerTopsongs.style.backgroundColor = "purple"
    // transition đc đưa vào trong thẻ và được giữ lại ở đó
    innerTopsongs.style.transition = "1s background-color"
})
innerTopsongs.addEventListener('mouseout', () => {
    innerTopsongs.style.backgroundColor = "black"
    
})

var ShapeOfYou = document.getElementById("ShapeOfYou")
var SongChanges = document.getElementById("song-change")
var playImg = document.getElementById("play-img")

SongChanges.addEventListener("click", PlayandPause)

function PlayandPause(){
    if(ShapeOfYou.paused){
        ShapeOfYou.play()
       playImg.src = "../img/pause button.png"
    }
    else{
        ShapeOfYou.pause()
        playImg.src = "../img/play-button (24)_5ab94929cf6aa.png"
        
    }
}
function idTracker(id){
    return document.getElementById(id)
}

var fileAudio = "songs/"
var ext = ".mp3"
var audio_playing = false
var trackbox = idTracker("trackbox")
var container = idTracker("trackContainer")
var trackBar = idTracker("trackBars")
var button = document.getElementsByClassName("PlayAndPause")
var trackName = document.getElementsByClassName("trackName")

function smallButton1(){
    if(ShapeOfYou.paused){
        ShapeOfYou.play()
        button.innerText = "Pause"
        button.style.color = "green"
        trackName.style.color = "green"
        Perfect.pause()
    }
    else{
        ShapeOfYou.pause()
        button.innerText = "Play"
        button.style.color = "white"
        trackName.style.color = "grewhiteen"
    }
}
var Perfect = idTracker("Perfect")
function smallButton2(){
    if(Perfect.paused){
        Perfect.play()
        button.innerText = "Pause"
        button.style.color = "green"
        trackName.style.color = "green"
        ShapeOfYou.pause()
    }
    else{
        Perfect.pause()
        button.innerText = "Play"
        button.style.color = "white"
        trackName.style.color = "grewhiteen"
    }
}
