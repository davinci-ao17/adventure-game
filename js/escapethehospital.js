var hasDopper = false;
var hasKey = false;
var hasKey1 = false;
var death = new Audio("music/classic_hurt.ogg");
var sure1 = new Audio("music/sure.mp3");
var glass = new Audio("music/glass1.ogg");
var fall = new Audio("music/elytra_loop.ogg");
var locked = new Audio("music/locked.mp3");
var rollover = new Audio("music/rollover1.wav");
var strange = new Audio("music/Strangeness.mp3");
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
var desc = document.getElementById("desc");
var deur = document.getElementById("deur1");
var dubbeleladder = document.getElementById("dubbeleladder1");
var raam = document.getElementById("raam1");
var nokeyd = document.getElementById("noKeyd");
var afbeelding6D = document.getElementById("afbeelding6d");
var receptie = false;
var schuur = document.getElementById("schuur");
var hasLadder = false;
var key1 = document.getElementById("key1");
var titles = document.getElementById("titles");
var firstmessage = false;

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

    if (strange.paused) {
        strange.currentTime = 0;
        strange.play();
    } else {
        strange.pause();
    }
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
    } else if (hasDopper && hasKey && hasKey1) {
      hideAll();
      afbeelding5.style.display = "inline";
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

function noD() {
    hideAll();
}

function ingang() {
    hideAll();
    ingang1.style.display = "inline";
    key1.style.display = "none";
}

function voorkant() {
    if (hasKey1) {
    hideAll();
    voorkant1.style.display = "inline";
    deur.style.display = "inline";
    }
    if (!hasLadder) {
      dubbeleladder.style.display = "none";
    } else {
      desc.innerHTML = "You don't have the key!";
    }
}

function schuur1() {
    hideAll();
    schuur.style.display = "inline";
    if (!hasLadder) {
    dubbeleladder.style.display = "inline";
  }
}

function raam1() {
  dubbeleladder.style.display = "inline";
}

function pickupKey() {
    hasKey = true;
    key.style.margin = "150px 1530px";
    desc.innerHTML = "Perhaps I need this key to access another room.";
}

function pickupLadder() {
    hasLadder = true;
    dubbeleladder.style.margin = "150px 1515px";
    dubbeleladder.style.width = "80px";
    dubbeleladder.style.height = "80px";
    }

function pickupKey1() {
    hasKey1 = true;
    afbeelding6.style.display = "inline";
    key1.style.display = "inline";
    key1.style.margin = "130px 1490px";

    noKeyf();
}

function dopper1() {
    if (!hasDopper) {
        hasDopper = true;
    dopper.style.margin = "20px 1530px";
    desc.innerHTML = "Mmm delicious water";
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

function strange2() {
    strange1.play();
}