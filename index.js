"use strict"
function showGame1(){
    alert("🎮 xploring: Assassin's Creed\n Genre: Acion🔥");
}

function showGame2(){
    alert("🎮 xploring: Cyberpunk 2077\n Genre: Open World🔥");
}

function showGame3(){
    alert("🎮 xploring: God of War\n Genre: Adventure🔥");
}

function showGame4(){
    alert("🎮 xploring: Elden Ring\nGenre: Fantasy🔥");
}

function showGame5(){
    alert("🎮 xploring:Halo Infinite \nGenre: Shooter🔥");
}

function showGame6(){
    alert("🎮 xploring:The Witcher3 \nGenre: RPG🔥");
}

function Viewall1(){
    alert("🚀 Loading all Most Played games… (Feature coming soon!)")
}

function Viewall2(){
    alert("🚀 Loading all Most Played games… (Feature coming soon!)")
}


function Searchgame(){
    let searchValue = document.getElementById("Search").valu;

    let gameName = document.querySelectorAll("game").value;
    let found = false;
    games.forEach(function(game) {
        if(game.innerText == searchValue){
                 found = true;
        }
    });
    if(found){
        alert(" ✅Game Found")
    }
    else{
        alert("❎Game Not Found")
    }
}