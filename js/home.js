let ArtistName = document.getElementById("ArtistName")

ArtistName.addEventListener("mouseover", ()=>{
    ArtistName.style.backgroundColor = "yellow"
    ArtistName.style.transition = "background-color 1s"
    ArtistName.style.cursor = "pointer"
})
ArtistName.addEventListener("mouseout", ()=>{
    ArtistName.style.backgroundColor = "black"
    ArtistName.style.cursor = "default"
    ArtistName.style.transition = "background-color 1s"
})