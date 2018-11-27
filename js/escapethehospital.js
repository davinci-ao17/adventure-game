var hasDopper = false;
var hasKey = false;
var hasKey1 = false;
var receptie = false;
var hasLadderExtension = false;
var hasShowered = false;
var hasLadder = false;
var firstmessage = false;
var hasKey3 = false;

var deaths1;

var x = document.getElementById("strange");

var death = new Audio("music/classic_hurt.ogg");
var sure1 = new Audio("music/sure.mp3");
var glass = new Audio("music/glass1.ogg");
var fall = new Audio("music/elytra_loop.ogg");
var locked = new Audio("music/locked.mp3");
var rollover = new Audio("music/rollover1.wav");
var pop = new Audio("music/pop.ogg");

var dopper = document.getElementById("dopper");
var afbeelding2 = document.getElementById("afbeelding2");
var afbeelding3 = document.getElementById("afbeelding3");
var afbeelding4 = document.getElementById("afbeelding4");
var afbeelding5 = document.getElementById("afbeelding5");
var afbeelding5d = document.getElementById("afbeelding5d");
var afbeelding6 = document.getElementById("afbeelding6");
var ingang1 = document.getElementById("ingang1");
var nokey = document.getElementById("noKey");
var nod = document.getElementById("noD");
var voorkant1 = document.getElementById("voorkant1");
var key = document.getElementById("key");
var deur = document.getElementById("deur1");
var dubbeleladder = document.getElementById("dubbeleladder1");
var extensionLadder = document.getElementById("extensionLadder1");
var raam = document.getElementById("raam1");
var nokeyd = document.getElementById("noKeyd");
var afbeelding6D = document.getElementById("afbeelding6d");
var schuur = document.getElementById("schuur");
var kamer1 = document.getElementById("kamer");
var bathroom1 = document.getElementById("bathroom");
var keyBox = document.getElementById("keyBox1");
var tv = document.getElementById("tv");
var laptop = document.getElementById("laptop");
var bed = document.getElementById("bed");

var key1 = document.getElementById("key1");
var titles = document.getElementById("titles");
var desc = document.getElementById("desc");
var key3a = document.getElementById("key3");

function hideAll() {
    afbeelding1.style.display = "none";
    afbeelding2.style.display = "none";
    afbeelding3.style.display = "none";
    afbeelding4.style.display = "none";
    afbeelding5.style.display = "none";
    afbeelding5d.style.display = "none";
    afbeelding6.style.display = "none";
    nokey.style.display = "none";
    nod.style.display = "none";
    nokeyd.style.display = "none";
    afbeelding6D.style.display = "none";
    schuur.style.display = "none";
    kamer1.style.display = "none";
    bathroom1.style.display = "none";

    ingang1.style.display = "none";
    voorkant1.style.display = "none";
    raam.style.display = "none";
}

function begin() {
    hideAll();

    document.getElementById("home").style.display = "none";
    document.getElementById("audio1").style.display = "none";
    document.getElementById("audio2").style.display = "none";
    if (!hasDopper) {
        dopper.style.display = "none";
    }
    if (!hasKey) {
        key.style.display = "none";
    }
    if (!hasKey1) {
        key1.style.display = "none";
    }
    if (!firstmessage) {
        desc.innerHTML = "Mmmm I don't see anyone perhaps there is someone<br> somewhere else.";
        firstmessage = true;
    } else {
        desc.innerHTML = "Perhaps I can look at the Reception.";
    }
    titles.innerHTML = "Hospitalbed";
    afbeelding1.style.display = "inline";

    console.log("Hospitalbed");
}

function info() {
    desc.innerHTML = "Finish the game by clicking on the screen.";
}

function afbeelding2f() {
    hideAll();
    desc.style.display = "inline";
    afbeelding2.style.display = "inline";
    desc.innerHTML = "Perhaps I can escape by jumping out of the window.";
    titles.innerHTML = "Storage cabinet";

    if (!hasDopper) {
        dopper.style.display = "inline";
    }

    if (!hasKey) {
        key.style.display = "inline";
    }

    console.log("Storage cabinet");
}

function afbeelding3f() {
    hideAll();
    afbeelding3.style.display = "inline";
    desc.innerHTML = "The Reception is at the right.";
    titles.innerHTML = "Corridor";

  console.log("Corridor");
}

function afbeelding4f() {
    hideAll();
    afbeelding4.style.display = "inline";
    receptie = false;
    console.log("Reception hallway");
    desc.innerHTML = "This is the Reception.";
    titles.innerHTML = "Reception hallway";
}

function afbeelding5df() {
    hideAll();
    afbeelding5d.style.display = "inline";
}

function afbeelding5f() {
    hideAll();
    afbeelding5.style.display = "inline";
  console.log("Reception");
}

function keyD() {
    if (hasKey && !hasDopper) {
        //heeft wel key maar geen dopper
        receptie = true;
        hideAll();
        afbeelding5d.style.display = "inline";
        key.style.display = "none";
        titles.innerHTML = "Reception";

    } else if (hasDopper && !hasKey) {
        //heeft wel dopper maar geen key
        desc.innerHTML = "I need a key to get in.";
        locked.play();
    } else if (hasDopper && hasKey) {
        //heeft beide items
        hideAll();
        console.log("Reception");
        afbeelding5.style.display = "inline";
        key.style.display = "none";
        titles.innerHTML = "Reception";
    } else if (hasDopper && hasKey && hasKey1) {
        hideAll();
        afbeelding5.style.display = "inline";
        titles.innerHTML = "Reception";
      //heeft dopper sleutel en sleutel
    } else {
        //heeft geen items
        locked.play();
    }
}

function noKeyf() {
    hideAll();
    if (hasKey1) {
    noKey.style.display = "inline";
    }
}

function keyf() {
    hideAll();
    if (hasKey1) {
        nokey.style.display = "inline";
    } else {
        afbeelding6.style.display = "inline";
        desc.innerHTML = "The key of the entrance.";
    }
}

function deaths() {
    glass.play();
    setTimeout(function () {
        fall.play();
    }, 2);
    setTimeout(function () {
        death.play();
    }, 10000);
    setTimeout(function () {
        alert("You died!");
    }, 10000);
    setTimeout(function () {
        alert("Click 'OK' to reload the page"); window.location.reload(true);
    }, 10000);
}

function sure() {
    desc.innerHTML = "Are you sure you want to jump out of the window?";
    sure1.play();
}

function noD1() {
    hideAll();
    noD.style.display = "inline";
}

function ingang() {
    hideAll();
    ingang1.style.display = "inline";
    key1.style.display = "none";
    titles.innerHTML = "Entrance";
    desc.innerHTML = "Click on the top left to go home.";
    console.log("Entrance");
}

function voorkant() {
        if (hasKey3) {
        voorkant1.style.display = "inline";
        desc.innerHTML = "<li><ul onclick='unlockRoom();'>Click here to unlock the door and go to your room</ul></li>";
        kamer1.style.display = "none";
    } else if (hasKey1) {
        hideAll();
        voorkant1.style.display = "inline";
        deur.style.display = "inline";
        raam.style.display = "inline";
        titles.innerHTML = "House";
        console.log("House");
    }
    else if(!hasLadder && hasDopper && hasKey1) {
        dubbeleladder.style.display = "none";
        titles.innerHTML = "House";
        console.log("House");
    } else if(!hasLadderExtension && hasDopper && hasKey1) {
        extensionLadder.style.display = "none";
        titles.innerHTML = "House";
        console.log("House");
      } else if (hasKey3) {
        desc.innerHTML = "<li><ul onclick='unlockRoom();'>Click here to unlock the door and go to your room</ul></li>"
    } else {
        desc.innerHTML = "You don't have the key!";
    }
}

function unlockRoom() {
    titles.innerHTML = "Your Room";
    tv.style.display = "inline";
    key3a.style.display = "none"
    desc.innerHTML = "<li><ul onclick='useTv();'>Click here to Watch tv</ul><ul onclick='useLaptop();'>Click here to use your laptop</ul><ul onclick='useBed();'>Click here to sleep</ul></li>"
}

function useTv() {
      deaths1 = setTimeout(function () {
        alert("You died because you get too tired"); window.location.reload(true);
    }, 10000);
    desc.innerHTML = "<li><ul onclick='useBed();'>Click here to sleep</ul></li>";

}

function useLaptop() {
    laptop.style.display = "inline";
        deaths1 = setTimeout(function () {
        alert("You died because you get too tired"); window.location.reload(true);
    }, 10000);
    desc.innerHTML = "<li><ul onclick='useBed();'>Click here to sleep</ul></li>";
}

function useBed() {
  bed.style.display = "inline";
  stopDeath();
  desc.innerHTML = "";
  titles.innerHTML = "";
  alert("You finished click on ok to play again."); window.location.reload(true);
}

function stopDeath() {
    clearTimeout(deaths1);
}

function schuur1() {
    hideAll();
    schuur.style.display = "inline";
    titles.innerHTML = "Shed";
    console.log("Shed");
    if (!hasLadder) {
        dubbeleladder.style.display = "inline";
        extensionLadder.style.display = "inline";
    }
}

function raam2() {
    if (hasLadder && hasLadderExtension) {
        desc.innerHTML = "<li><ul onclick='placeDubbele();'>Doubleladder</ul><ul onclick='placeExtension();'>Extension ladder</ul></li>";
    }
}

function placeDubbele() {
    dubbeleladder.style.display = "inline";
    death.play();
    setTimeout(function () {
        alert("The ladder has collapsed"); window.location.reload(true);
    }, 500);
}

function placeExtension() {
    hideAll();
    kamer1.style.display = "inline";
    desc.innerHTML = "<li><ul>I can take a shower here or go directly to the key box.</ul> <ul onclick='openKeyBox();'>Find the key of your house</ul></li>";
    extensionLadder.style.display = "none";
    titles.innerHTML = "Room";
    console.log("Room");
}

function takeShower() {
    if (hasShowered === true) {
        desc.innerHTML = "<li><ul>You have already have taken a shower.</ul> <ul onclick='openKeyBox();'>Find the key of your house</ul></li>";
    } else {
        bathroom1.style.display = "inline";
        hasShowered = true;
        desc.innerHTML = "Showering..."
        titles.innerHTML = "Bathroom";
        console.log("Shower");
    setTimeout(function () {
            kamer1.style.display = "inline";
            bathroom1.style.display = "none";
            desc.innerHTML = "<ul onclick='openKeyBox();'>Find the key of your house</ul></li>"
            titles.innerHTML = "Room";
        }, 5000);
    }
}

function openKeyBox() {
    keyBox.style.display = "inline";
    desc.innerHTML = "<li><ul>Find the key of your house</ul><ul onclick='pickupKey3();'></ul></li>";
    if (hasShowered === true) {
        key3a.style.display = "inline";
        titles.innerHTML = "Keybox";
        console.log("Keyboy");
    } else if (hasKey3 === true) {
        desc.innerHTML = "You already found your house key.";
    } else {
        desc.innerHTML = "You are too tired to see your house key.";
        titles.innerHTML = "Keybox";
        console.log("Keybox");
    setTimeout(function () {
            kamer1.style.display = "inline";
            keyBox.style.display = "none";
            titles.innerHTML = "Room";
        }, 5000);
    }
}

function pickupKey3() {
    hasKey3 = true;
    key3a.style.display = "inline";
    key3a.style.margin = "250px 1530px";
    pop.play();
    kamer1.style.display = "inline";
    keyBox.style.display = "none";
    titles.innerHTML = "Room";
    console.log("Room");
    desc.innerHTML = "<li><ul onclick='voorkant();'>Click here to go back to the street.</ul></li>";
}

function pickupKey() {
    hasKey = true;
    key.style.margin = "150px 1530px";
    desc.innerHTML = "Perhaps I need this key to access another room.";
    pop.play();
}

function pickupLadder() {
    hasLadder = true;
    dubbeleladder.style.margin = "150px 1515px";
    dubbeleladder.style.width = "80px";
    dubbeleladder.style.height = "80px";
    pop.play();
}

function pickupLadderExtension() {
    hasLadderExtension = true;
    extensionLadder.style.margin = "250px 1515px";
    extensionLadder.style.width = "80px";
    extensionLadder.style.height = "80px";
    pop.play();
}

function pickupKey1() {
    hasKey1 = true;
    afbeelding6.style.display = "inline";
    key1.style.display = "inline";
    key1.style.margin = "130px 1490px";
    noKeyf();
    pop.play();
}

function dopper1() {
    if (!hasDopper) {
        hasDopper = true;
        dopper.style.margin = "20px 1530px";
        desc.innerHTML = "Mmm delicious water";
        pop.play();
    }
}

function playSound() {
    rollover.play();
}

function stopSound() {
    var thissound = document.getElementById("mySound");
    rollover.pause();
    rollover.currentTime = 0;
}

function enableLoop() { 
    x.loop = true;
    x.load();
} 

function disableLoop() { 
    x.loop = false;
    x.load();
} 