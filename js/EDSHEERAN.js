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
function DOM(id){
    return document.getElementById(id)
}
var audio = new Audio();
var fileAudio = "songs/"
var ext = ".mp3"
var trackbox = DOM("trackbox")
var container = DOM("trackContainer")
var trackNumber = 1
var tracks = {
    "ShapeOfYou" : ["Shape of you", "Ed Sheeran - Shape of You (Official Music Video)"],
    "PERFECT" : ["Perfect", "Perfect - Ed Sheeran"],
    "IDON'TCARE" : ["I don't care" , "I Don_t Care - Ed Sheeran_ Justin Bieber"],
    "PHOTOGRAPH" : ["Photograph", "Photograph - Ed Sheeran"],
    "BeautifulPeople" : ["Beautiful people", "Beautiful People - Ed Sheeran_ Khalid"]
}
for(let track in tracks){
    
    var tb = document.createElement("div")
    var Songsbuttons = document.createElement("div")
    var trackName = document.createElement("div")
    container.appendChild(tb)
    tb.appendChild(Songsbuttons)
    tb.appendChild(trackName)
    tb.className = "trackBars"
    Songsbuttons.className = "Songsbuttons"
    trackName.className = "trackName"
    trackName.innerText = tracks[track][0]
    Songsbuttons.innerText = trackNumber
    trackNumber = trackNumber + 1
}
