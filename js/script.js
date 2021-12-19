import config from "./config.js";

const spotifyHolders = [...document.querySelectorAll(".spotify > span")];
const spotifyIcon = document.querySelector(".spotify > svg");
const spotifyName = document.querySelector("#name");
const spotifyArtist = document.querySelector("#artist");

// spotify currently playing track
fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    method: "GET",
    headers: new Headers({
        "Authorization": `Bearer ${config.AUTH_TOKEN}`
    })
})
.then(response => {
    console.log(response.status)
    if (response.status !== 200){
        spotifyHolders.forEach(el => {
            el.style.color = "#EF431E";
        });
        spotifyIcon.style.fill = "#EF431E";
    } else {
        spotifyHolders.forEach(el => {
            el.style.color = "#1DB954";
        });
        spotifyIcon.style.fill = "#1DB954";
    }
    return response.json();
})
.then(data => {
    spotifyName.innerHTML = data.item.name;
    spotifyArtist.innerHTML = data.item.artists[0].name;
});