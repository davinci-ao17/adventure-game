//other
var updateOnce = true;
var htp = false;
var stopTimerBool = false;

//get elements
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img = document.getElementById("view1Img");
var btn = document.getElementById("buttonLocation");
var useBtn = document.getElementById("useBtn");
var phoneBtn = document.getElementById("phoneBtn");
var htpElem = document.getElementById("howToPlay");
var menuElem = document.getElementById("menu");
var hintElem = document.getElementById("hintText");
var dsElem = document.getElementById("deathScreen");
var dsVideoElem = document.getElementById("deathScreenVideo");
var deathMessage = document.getElementById("deathMessage");
var bonusBtn = document.getElementById("bonusBtn");
var winScreen = document.getElementById("winScreen");
var girlName = document.getElementById("girlName");
dsElem.style.display = "none";
dsVideoElem.volume = 0;

//audio effects
var pvAudio = new Audio("Audios/phoneVibrate.wav");
var sAudio = new Audio("Audios/scream.wav");
var tAudio = new Audio("Audios/typing.wav");
var nAudio = new Audio("Audios/notification.wav");
var dOAudio = new Audio("Audios/doorOpen.wav");
var dCAudio = new Audio("Audios/doorClose.wav");
var stairsAudio = new Audio("Audios/stairs.wav");
var fDAudio = new Audio("Audios/frontDoor.wav");
var rAudio = new Audio("Audios/running.wav");
var rsAudio = new Audio("Audios/runningStreet.wav");
var backgroundMusic = new Audio("Audios/background.wav");


//phone variables
var herName = "";
var her = true;
var togglePhone = true;
var enableChat = false;
var index = 0;
var idNumb = 0;
var i = 0;

//inventory
var hasPhone = false;

//typing
var hasPressed = false;

//interval vars
var lps = null;
var intv = null;
var pva = null;
var losInt = null;

//hint texts
var hints = [
    "",
    "dont wait to long",
    "a scream coming from the backyard",
    "there is a light coming from the shack",
    "you need a crowbar to break the barricade"
];

//scene images
var scenes = {
    0 : {
        images: [
            "Images/WakingUp/1.png",
            "Images/WakingUp/2.png",
            "Images/WakingUp/3.png",
            "Images/WakingUp/4.png",
        ]
    },
    1 : {
        images: [
            "Images/PickingUpPhone/1.png",
            "Images/PickingUpPhone/2.png",
        ]
    },
    2 : {
        images: [
            "Images/LeaveRoom/1.png",
        ]
    },
    3 : {
        images: [
            "Images/Hallway/1.png",
            "Images/Hallway/2.png",
        ]
    },
    4 : {
        images: [
            "Images/Forest/1.png",
            "Images/Forest/2.png",
            "Images/Forest/3.png",
            "Images/Forest/4.png",
        ]
    },
    5 : {
        images: [
            "Images/herHouse/1.png",
        ]
    },
    6 : {
        images: [
            "Images/Option1/1.png",
        ]
    },
    7 : {
        images: [
            "Images/FollowingForest/1.png",
            "Images/FollowingForest/2.png",
        ]
    },
    8 : {
        images: [
            "Images/FollowingCave/1.png",
            "Images/FollowingCave/2.png",
            "Images/FollowingCave/3.png",
            "Images/FollowingCave/4.png",
        ]
    },
    9 : {
        images: [
            "Images/AfterCave/1.png",
            "Images/AfterCave/2.png",
            "Images/AfterCave/3.png",
        ]
    },
    10 : {
        images: [
            "Images/escape/1.png",
            "Images/escape/2.png",
        ]
    },
    11 : {
        images: [
            "Images/escape/option1/1.png",
            "Images/escape/option1/2.png",
        ]
    },
    12 : {
        images: [
            "Images/escape/option2/1.png",
            "Images/escape/option2/2.png",
            "Images/escape/option2/3.png",
        ]
    },
    13 : {
        images: [
            "Images/escape/option3/1.png",
            "Images/escape/option3/2.png",
        ]
    },
}

//chat messages
var messages = {
    0 : {
        done: false,
        you: false,
        message : "Hey, are you there?!"
    },
    1 : {
        done: false,
        you: false,
        message : "Please wake up"
    },
    2 : {
        done: false,
        you: false,
        message : "PLEASE!"
    },
    3 : {
        done: false,
        you: true,
        message : "yeah im here"
    },
    4 : {
        done: false,
        you: true,
        message : "whats wrong?"
    },
    5 : {
        done: false,
        you: false,
        message : "There are people in my house"
    },
    6 : {
        done: false,
        you: false,
        message : "please come help me!"
    },
    7 : {
        done: false,
        you: true,
        message : "give me a moment. im on my way!"
    },
    8 : {
        done: false,
        you: false,
        message : "Thank you!"
    },
    9 : {
        done: true,
        you: false,
        message : "Please hurry!"
    },
};

//load game when page loaded
window.onload = function(){
    init();
}

backgroundMusic.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

//set data and start game
function init(){
    console.log("Loading JS");
    herName = prompt("Who are you going to save?", "");
    //functions
    setInterval(Update, 1000);
    loadFirstScene();
    backgroundMusic.play();
    backgroundMusic.volume = 0.15;
    bonusBtn.style.display = "none";
    //variables
    btn.style.display = "none";
}

//if spacebar is pressed
document.body.onkeydown = function(e){
    if(enableChat && !hasPressed){
        chatter();
        hasPressed = true;
    }
};
document.body.onkeyup = function(e){
    if(enableChat && hasPressed){
        hasPressed = false;
    }
};

//check for game 
function Update(){
    console.log("Updating...");
    girlName.innerHTML = herName;
    if(!window.screenTop && !window.screenY) {
        alert("PLEASE PRESS F11 TO ENTER FULLSCREEN");
    }
    if(!hasPhone){
        var elem = document.getElementById("view2");
        elem.style.display = "none";
    }else{
        if(updateOnce){
            var elem = document.getElementById("view2");
            elem.style.display = "block";
            updateOnce = false;
        }
        if(her){
            intv = setInterval(chatter,1000);
            her = false;
        }
    }
}

//waking up scene
var lfsIndex = 0;
var lfsDelay = 2;
function loadFirstScene(){
    console.log("first scene");
    pva = setInterval(function(){
        pvAudio.volume = 1.0;
        pvAudio.play();
    }, 1000);
    fadeIn(img1, 1, true);
    setTimeout(function(){
        fadeIn(img2, 1, true);
        setTimeout(function(){
            fadeIn(img3, 1, true);
            img.style.opacity = 1;
            img.style.zIndex = "-1";
            img.style.display = "block";
            setTimeout(function(){
                menuElem.style.display = "block";
            },3000);
        },2000);
    },2000);
}

//phone pickup scene
var lpsIndex = 0;
function LoadPhoneScene(){
    console.log("phone scene");
    useBtn.onclick = function() {  };
    phoneBtn.onclick = function() {  };
    menuElem.style.display = "none";
    clearInterval(pva);
    fadeOut(img);
    setTimeout(function(){
        fadeIn(img, 1, false);
        phoneBtn.onclick = function() {};
        btn.style.display = "table";
        img.src = scenes[1].images[0];
        setTimeout(function(){useBtn.onclick = function() { HasPhoneScene(); };}, 2500);
    }, 2000);
}

function HasPhoneScene(){
    console.log("chatting scene");
    useBtn.onclick = function() {  };
    phoneBtn.onclick = function() {  };
    fadeOut(img);
    setTimeout(function(){
        fadeIn(img, 1, false);
        img.src = scenes[1].images[1];
        hasPhone = true;
        useBtn.onclick = function() {  };
    }, 2000);
}

//button function leave room
function leaveRoom(){
    console.log("Leave room scene");
    startTimer(3500);
    dOAudio.play();
    LoadHallwayScene();
}

//hallway scene
var lhsIndex = 0;
function LoadHallwayScene(){
    console.log("Hallway scene");
    useBtn.onclick = function() {  };
    phoneBtn.onclick = function() {  };
    if(lhsIndex == 0){
        dCAudio.play();
        fadeOut(img);
        setTimeout(function(){
            fadeIn(img, 1, false);
            showPhone();
            img.src = scenes[3].images[0];
            setTimeout(
                function(){
                    useBtn.onclick = function() {
                        LoadHallwayScene();
                    };
                }, 2500
            );
        }, 2000);
    }else if(lhsIndex == 1){
        stairsAudio.play();
        fadeOut(img);
        setTimeout(function(){
            fadeIn(img, 1, false);
            img.src = scenes[3].images[1];
            setTimeout(function(){useBtn.onclick = function() {
                fDAudio.play();
                fadeOut(img);
                setTimeout(function(){
                    fadeIn(img, 1, false);
                    LoadOutsideScene();
                    losInt = setInterval(LoadOutsideScene,1250);
                }, 2000);
            };}, 2500);
        }, 2000);
    }
    lhsIndex++;
}

//function leave building
var losIndex = 0;
function LoadOutsideScene(){
    console.log("Outside scene");
    useBtn.onclick = function() {  };
    phoneBtn.onclick = function() {  };
    if(losIndex == 0){
        useBtn.onclick = function() {  };
        rAudio.play();
    }
    if(losIndex == 2){
        setTimeout(function(){rAudio.pause();},200);
    }
    if(losIndex == 3){
        rsAudio.play();
        clearInterval(losInt);
        useBtn.onclick = function() { herHouseScene(); };
    }
    img.src = scenes[4].images[losIndex];
    losIndex++;
}

function herHouseScene(){
    console.log("Her house scene");
    useBtn.onclick = function() {  };
    phoneBtn.onclick = function() {  };
    fadeOut(img);
    setTimeout(function(){
        fadeIn(img, 1, false);
        img.src = scenes[5].images[0];
        useBtn.innerHTML = "take the stairs";
        phoneBtn.innerHTML = "go to the backyard";
        setTimeout(function(){
            stopTimer();
            sAudio.play();
            sAudio.volume = 0.1;
            hintElem.innerHTML = hints[2];
            setTimeout(function(){hintElem.innerHTML = hints[0];}, 2000);
            setTimeout(function(){
                useBtn.onclick = function() { death("you went upstairs while she was being draged outside. when you went outside you coudn't find any trace of her"); };
                phoneBtn.onclick = function() { outSide(); };
            }, 500);
        },2000);
    }, 2000);
}

function outSide(){
    console.log("Outside scene");
    useBtn.onclick = function() {  };
    phoneBtn.onclick = function() {  };
    fadeOut(img);
    setTimeout(function(){
        fadeIn(img, 1, false);
        img.src = scenes[6].images[0];
        useBtn.innerHTML = "follow the road into the forest";
        phoneBtn.innerHTML = "go into the open shack";
        setTimeout(function(){
            hintElem.innerHTML = hints[3];
            setTimeout(function(){hintElem.innerHTML = hints[0];}, 2000);
            setTimeout(function(){
                useBtn.onclick = function() { followForest(); };
                phoneBtn.onclick = function() { followShack(); };
            }, 500);
        },2000);
    }, 2000);
}

function followForest(){
    console.log("forest scene");
    useBtn.onclick = function() {  };
    phoneBtn.onclick = function() {  };
    fadeOut(img);
    setTimeout(function(){
        fadeIn(img, 1, false);
        img.src = scenes[7].images[0];
        useBtn.innerHTML = "go further into the forest";
        phoneBtn.innerHTML = "go back";
        setTimeout(function(){
            setTimeout(function(){
                useBtn.onclick = function() { followForest2(); };
                phoneBtn.onclick = function() { outSide(); };
            }, 500);
        },2000);
    }, 2000);
}

function followForest2(){
    console.log("forrest option 2 scene");
    useBtn.onclick = function() {  };
    phoneBtn.onclick = function() {  };
    fadeOut(img);
    setTimeout(function(){
        fadeIn(img, 1, false);
        img.src = scenes[7].images[1];
        useBtn.innerHTML = "go further into the forest";
        phoneBtn.innerHTML = "follow the light on the right";
        setTimeout(function(){
            setTimeout(function(){
                useBtn.onclick = function() { death("you got lost in the forest and never made your way back."); };
                phoneBtn.onclick = function() { death("the light came from a road. you couldnt make it back in time."); };
            }, 500);
        },2000);
    }, 2000);
}

function followShack(){
    console.log("shack scene");
    useBtn.onclick = function() {  };
    phoneBtn.onclick = function() {  };
    fadeOut(img);
    setTimeout(function(){
        fadeIn(img, 1, false);
        img.src = scenes[8].images[0];
        useBtn.innerHTML = "enter cave";
        phoneBtn.innerHTML = "go back";
        setTimeout(function(){
            setTimeout(function(){
                useBtn.onclick = function() { cave(); };
                phoneBtn.onclick = function() { death("the light came from a flashlight. you couldn't make it back in time."); };
            }, 500);
        },2000);
    }, 2000);
}

var caveIndex = 1;
function cave(){
    console.log("cave scene");
    useBtn.onclick = function() {  };
    phoneBtn.onclick = function() {  };
    if(caveIndex == 1){
        fadeOut(img);
        setTimeout(function(){
            fadeIn(img, 1, false);
            img.src = scenes[8].images[1];
            useBtn.innerHTML = "continue";
            phoneBtn.innerHTML = "go back";
            setTimeout(function(){
                setTimeout(function(){
                    useBtn.onclick = function() { cave(); };
                    phoneBtn.onclick = function() { death("you didnt know where to go anymore"); };
                }, 500);
            },2000);
        }, 2000);
    }else if(caveIndex == 2){
        fadeOut(img);
        setTimeout(function(){
            fadeIn(img, 1, false);
            img.src = scenes[8].images[2];
            useBtn.innerHTML = "go left";
            phoneBtn.innerHTML = "go right";
            setTimeout(function(){
                setTimeout(function(){
                    useBtn.onclick = function() { exitCave(); };
                    phoneBtn.onclick = function() { death("it was a trap. got stuck and never where able to escape"); };
                }, 500);
            },2000);
        }, 2000);
    }
    caveIndex++;
}

function exitCave(){
    console.log("Exit cave scene");
    useBtn.onclick = function() {  };
    phoneBtn.onclick = function() {  };
    fadeOut(img);
    setTimeout(function(){
        fadeIn(img, 1, false);
        img.src = scenes[8].images[3];
        useBtn.innerHTML = "exit cave";
        phoneBtn.innerHTML = "go back";
        setTimeout(function(){
            setTimeout(function(){
                useBtn.onclick = function() { forest(); };
                phoneBtn.onclick = function() { death("you didnt make it in time"); };
            }, 500);
        },2000);
    }, 2000);
}

var forestIndex = 0;
function forest(){
    console.log("forest 2 scene");
    useBtn.onclick = function() {  };
    phoneBtn.onclick = function() {  };
    if(forestIndex == 0){
        fadeOut(img);
        setTimeout(function(){
            fadeIn(img, 1, false);
            img.src = scenes[9].images[0];
            useBtn.innerHTML = "enter forest";
            phoneBtn.innerHTML = "go back";
            setTimeout(function(){
                setTimeout(function(){
                    useBtn.onclick = function() { forest(); };
                    phoneBtn.onclick = function() { death("you didnt make it in time"); };
                }, 500);
            },2000);
        }, 2000);
    }else if(forestIndex == 1){
        fadeOut(img);
        setTimeout(function(){
            fadeIn(img, 1, false);
            img.src = scenes[9].images[1];
            useBtn.innerHTML = "continue";
            phoneBtn.innerHTML = "go back";
            setTimeout(function(){
                setTimeout(function(){
                    useBtn.onclick = function() { forest(); };
                    phoneBtn.onclick = function() { death("you didnt make it in time"); };
                }, 500);
            },2000);
        }, 2000);
    }else if(forestIndex == 2){
        fadeOut(img);
        setTimeout(function(){
            fadeIn(img, 1, false);
            img.src = scenes[9].images[2];
            useBtn.innerHTML = "go off the path";
            phoneBtn.innerHTML = "follow the path";
            setTimeout(function(){
                setTimeout(function(){
                    useBtn.onclick = function() { escape(); };
                    phoneBtn.onclick = function() { death("the path leads back to the cave exit. you where to late to help her."); };
                }, 500);
            },2000);
        }, 2000);
    }
    forestIndex++;
}

var escapeIndex = 0;
var foundHer = false;
var hasCrowbar = false;
function escape(){
    console.log("escape scene");
    switch(escapeIndex) {
        case 0:
            img.src = scenes[10].images[0];
            useBtn.innerHTML = "enter barricaded house";
            phoneBtn.innerHTML = "go back";
            useBtn.onclick = function() { escapeIndex++; escape(); };
            phoneBtn.onclick = function() { death("you gave up..."); };
            break;
        case 1:
            useBtn.style.display = "block";
            bonusBtn.style.display = "block";
            phoneBtn.style.display = "block";

            img.src = scenes[10].images[1];
            useBtn.innerHTML = "left corner";
            phoneBtn.innerHTML = "right corner";
            bonusBtn.innerHTML = "ladder";

            useBtn.onclick = function() { escapeIndex = 2; escape();};
            phoneBtn.onclick = function() { escapeIndex = 3; escape();};
            bonusBtn.onclick = function() { escapeIndex = 4; escape();};

            break;
        case 2:
            bonusBtn.style.display = "none";
            if(foundHer){
                useBtn.style.display = "none";
                img.src = scenes[11].images[1];
            }else{
                img.src = scenes[11].images[0];
                useBtn.innerHTML = "save her";
                useBtn.onclick = function() { escapeIndex = 2; foundHer = true; escape(); };
            }
            phoneBtn.innerHTML = "back";
            phoneBtn.onclick = function() { escapeIndex = 1; escape();};
            break;
        case 3:
            bonusBtn.style.display = "none";
            if(!hasCrowbar){
                useBtn.style.display = "none";
                img.src = scenes[12].images[0];
                hintElem.innerHTML = hints[4];
                setTimeout(function(){hintElem.innerHTML = hints[0];}, 2000);
            }else{
                img.src = scenes[12].images[1];
                useBtn.innerHTML = "escape";
                if(foundHer){
                    useBtn.onclick = function() {win()};
                }else{
                    useBtn.onclick = function() { death("you forgot the girl.......how?"); };
                }
            }
            phoneBtn.innerHTML = "back";
            phoneBtn.onclick = function() { escapeIndex = 1; escape();};
            break;
        case 4:
            bonusBtn.style.display = "none";
            if(hasCrowbar){
                useBtn.style.display = "none";
                img.src = scenes[13].images[1];
            }else{
                img.src = scenes[13].images[0];
                useBtn.innerHTML = "pickup crowbar";
                
                useBtn.onclick = function() {
                    useBtn.style.display = "none";
                    img.src = scenes[13].images[1];
                    hasCrowbar = true;
                };
            }
            phoneBtn.innerHTML = "back";
            phoneBtn.onclick = function() { escapeIndex = 1; escape();};
            break;
        default:
            death();
    }
}

var winIndex = 0;
function win(){
    console.log("you have won the game scene");
    if(winIndex == 0){
        img.src = scenes[12].images[2];
        useBtn.onclick = (function(){winIndex++; win();});
    }else{
        menuElem.style.display = "none";
        btn.style.display = "none";
        clearInterval(pva);
        fadeOut(img);
        setTimeout(function(){
            fadeIn(img, 1, false);
            winScreen.style.display = "block";
            setTimeout(function(){winScreen.style.display ="none"; location.reload();}, 10000);
            img.src = scenes[0].images[0];
        }, 2000);
    }
}

//show phone
var showPhone = function(){
    var elem = document.getElementById("view2");
    if(hasPhone){
        if(togglePhone){
            togglePhone = false;
            elem.style.display = "none";
        }else{
            togglePhone = true;
            elem.style.display = "block";
        }
    }
}

//show message
function displayMessage(){
    if(index < Object.keys(messages).length){
        var mainElem = document.getElementById("chat-holder");
        if(messages[index].you){
            mainElem.innerHTML += "<div id='" + "chat" + idNumb + "' class='message-you' style='bottom: 110px;'><div class='message-pointer-you'></div><p>" + messages[index].message +"</p></div>";
            
        }else{
            mainElem.innerHTML += "<div id='" + "chat" + idNumb + "' class='message' style='bottom: 110px;'><div class='message-pointer'></div><p>" + messages[index].message +"</p></div>";
            
        }
        index++;
        idNumb++;
        calculatePos();
    }
}

//chating
var canChat = true;
var chatter = function(){
    //Type a message...
    if(messages[index] != null && canChat){
        if(messages[index].you){
            clearInterval(intv);
            enableChat = true;
            var text = messages[index].message;
            var newText = text.substr(0, i);
            var elem = document.getElementById("typeBox");
            
            if(i >= text.length){
                displayMessage();
                newText = "Type a message...";
                i = 0;
                if(!messages[(index + 1)].you){ 
                    her = true;
                    enableChat = false;
                }else{
                    her = false;
                    enableChat = true;
                }
            }else{
                i++;
                tAudio.play();
            }
            
            elem.innerHTML = newText;
        }else{
            displayMessage();
            nAudio.play();
            if(index >= 1){
                if(messages[index-1].done){
                    canChat = false;
                }
            }
        }
        if(!canChat){
            fadeOut(img);
            setTimeout(function(){
                fadeIn(img, 1, false);
                hintElem.innerHTML = hints[1];
                setTimeout(function(){hintElem.innerHTML = hints[0];}, 2000);
                img.src = scenes[2].images[0];
                setTimeout(function(){
                    useBtn.onclick = function() { leaveRoom(); };
                }, 2500);
            }, 2000);
        }
    }
}

//animate messages
function calculatePos(){
    var newIdNumb = idNumb - 1;
    for(var i = newIdNumb; -1 < i; i--){
        var newItem = document.getElementById("chat" + i);
        var prevItem = document.getElementById("chat" + (i - 1));
        var spacing = 10;
        if(prevItem != null){
            var nItemHeight = newItem.clientHeight;
            var nItemBottom = parseInt(newItem.style.bottom.replace('px', ''));
            var newItemPos = nItemBottom + nItemHeight + spacing;
            prevItem.style.bottom = newItemPos + "px";
        }
    }
}

var HowToPlay = function(){
    if(htp){
        htpElem.style.display = "none";
        menuElem.style.display = "block";
        htp = false;
    }else{
        htpElem.style.display = "block";
        menuElem.style.display = "none";
        htp = true;
    }
}

function fadeIn(element, delay, shouldFadeOut) {
    var op = 0.1;
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            if(delay <= 0 && shouldFadeOut){
                fadeOut(element);
                clearInterval(timer);
            }else if(delay <= 0 && !shouldFadeOut){
                clearInterval(timer);
            }else{
                delay--;
            }
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += 0.01;
    }, 25);
}

function fadeOut(element) {
    var op = 1;
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
            isDone = true;
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function loadLastScene(){
    menuElem.style.display = "none";
    clearInterval(pva);
    fadeOut(img);
    setTimeout(function(){
        fadeIn(img, 1, false);
        btn.style.display = "table";
        bonusBtn.style.display = "none";
        escape();
    }, 2000);
}


function startTimer(time){
    var timer = setInterval(function(){
        if(stopTimerBool){
            stopTimerBool = false;
            clearInterval(timer);
        }
        if(time == 0){
            clearInterval(timer);
            death("You where to late....");
        }else{
            time--;
        }
    }, 10);
}

function stopTimer(){
    stopTimerBool = true;
}

function death(reason){
    clearInterval(pva);
    deathMessage.innerHTML = reason;
    dsElem.style.display = "block";
    dsVideoElem.volume = 1;
}