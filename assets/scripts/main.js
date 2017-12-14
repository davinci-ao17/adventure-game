var time = 2;
var isDone = true;
var index = 0;
var current = 0;
var callSound = 0;
var isCalled = false;
var body = document.body;
var grabbedGun = false;
var grabbedMask = false;
var snd = new Audio("assets/sounds/snipershot.wav");
var callIn = new Audio("assets/sounds/phoneRinging.wav");
var phoneVoice = new Audio("assets/sounds/cartoonVoice.wav");
var deadSound = new Audio("assets/sounds/wilhelmScream.ogg");
var mainMenuSound = new Audio("assets/sounds/mainMenuMusic.mp3");
var pickUp = new Audio("assets/sounds/pickup.wav");
var storyTexts = [
  "Story: You woke up in a different bed then you used to. There is a phone next to the bed.",
  "Hint: Press ArrowUp Key to show phone, and press ArrowDown Key to hide phone!",
  "You get an anonymous call.(Press Next)",
  "Hint: Press 'Answer' to answer the phone. Press 'Decline' to decline the call.",
  "Man: 'You have to hack the bank in [place]'",
  "Story: You're in the PC Room right now. Press the '>'-button to transfer the money from the bank to another bank account!",
  "*Cancel of Confirm?*",
  "Cancel of Confirm?",
  "The money is succesfully transfered to another back account!",
  "Story: Someone is coming in. He will lead you to the livingroom downstairs.",
  "Story: You're sitting on the couch. There is a man standing behind you with a weapon.",
  "Man: We need to clear your memory, otherwise we can't let you go! Make your choice!",
  "Story: You're unconscious for a while. The man behind you is taking you to the car.",
  "You don't remember anything. You don't know why you're in a car. You don't know who the driver is...",
  "'...'",
  "Story: The man stops the car. He turns around and hits you back. You're unconscious for a while.",
  "Story: The driver parked the car near to a store.",
  "You see a gun laying on the dashboard of the car. There is a mask besides the gun.",
  "Man(driver): 'You see that store over there? Go get all the money they have! Don't forget to put on your mask and take the gun with you!'",
  "You grabbed your stuff, good! Are you ready?",
  "Just do it, alright?!",
  "Yea.. You're good for nothing..",
  "Story: You got your gun and your mask.",
  "You tried to kill the driver. You failed. You shot the window instead of the man...",
  "Story: You're heading to the store. You walk around a bit.",
  "You're inside the store. Aiming your gun at the cassier.",
  "Lady: 'I.. ermm.. o..ok..'",
  "Another masked man: 'Thanks for the money, why did you went through the backdoor?'",
  "Masked man: 'Get back to the car now!'",
  "Story: You're back in the car with the money from the store. You're heading to the house where you were before.",
  "The driver gets distracted.",
  "The car crashed against a tree. You're alright, but the driver isn't doing good. Actually he's dead...",
  "A few minutes later...",
  "Story: You dumped the body somewhere in the woods. You drive home and move on with your life!",
  "THE END!"
];

document.addEventListener('contextmenu', event => event.preventDefault());
document.body.ondragstart = function() { return false; };

document.body.style.backgroundColor = 'black';

fadeInOutElems = [
    document.getElementById('intrologo'),
    document.getElementById('gamename'),
    document.getElementById('mainMenu'),
]

var timer = 0;
function start(){
    setInterval(function(){
        if(isDone && index < fadeInOutElems.length){
            if(timer >= time){
                if (index != (fadeInOutElems.length -1)) {
                  fadeIn(fadeInOutElems[index], 100, true);
                } else {
                  fadeIn(fadeInOutElems[index], 100, false);
                  body.style.backgroundImage = "url('assets/images/mainmenu.png')";
                }
                timer = 0;
                index++;
                isDone = false;
            }else{
                timer += 0.5;
            }
        }
    },500);
}
start();

function fadeIn(element, delay, canFade) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            if(delay <= 0){
              if (canFade) {
                fadeOut(element);
              }
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
    var op = 1;  // initial opacity
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

// Main Menu Background Music
var mainMenuInt = setInterval(function(){ mainMenuSound.play(); }, 55000);
setTimeout(function(){
  mainMenuSound.play();
  mainMenuSound.volume = 0.2;
}, 10000);


function closeTab() {
  document.getElementById('infoTab').style.display = 'none';
  document.getElementById('creditsTab').style.display = 'none';
  document.getElementById('mainMenu').style.display = 'block';
}

function infoButton() {
  document.getElementById('mainMenu').style.display = 'none';
  document.getElementById('infoTab').style.display = 'block';
}

function creditsButton() {
  document.getElementById('mainMenu').style.display = 'none';
  document.getElementById('creditsTab').style.display = 'block';
}

function playButton() {
  clearInterval(mainMenuInt);
  mainMenuSound.pause();
  mainMenuSound.currentTime = 0;
  canPlay = true;
  updateInv();
  document.getElementById('mainMenu').style.display = 'none';
  document.body.style.backgroundImage = "url('assets/images/first.png')";
  setTimeout(function(){ document.getElementById('storyTexts').style.display = 'block'; document.getElementById('nextButton').style.display = 'block'; }, 4000);
  setTimeout(function(){ document.getElementById('storyTexts').innerHTML = storyTexts[0]; }, 2000);
}

function Next(){
  if(current != storyTexts.length - 1) {
    current++;
  }

  if (current == 3) {
    incommingCall();
  }

  if (current == 1) {
    //if buttons are pressed
    document.body.onkeydown = function(e){
        if(e.keyCode == 40 ){
          document.getElementById('phoneOff').style.display = 'none';
          document.getElementById('phoneLocked').style.display = 'none';
        }
        else if(e.keyCode == 38){
          document.getElementById('phoneOff').style.display = 'block';
        }
    };
  }

  if (current == 3) {
    document.getElementById('nextButton').style.display = 'none';
  }
  else if (current == 4) {
    document.getElementById('choiceOne').style.display = 'block';
    document.getElementById('nextButton').style.display = 'none';
  }
  else if (current == 5) {
    document.getElementById('choiceOne').style.display = 'none';
  }
  else if (current == 7) {
    document.getElementById('nextButton').style.display = 'none';
    document.getElementById('choiceTwo').style.display = 'block';
  }
  else if (current == 9) {
    document.getElementById('nextButton').style.display = 'block';
  }
  else if (current == 11) {
    document.getElementById('nextButton').style.display = 'none';
    document.getElementById('choiceThree').style.display = 'block';
    document.getElementById('choiceThree').style.marginTop = '20px';
    document.getElementById('choiceThreeOne').style.display = 'inline';
    document.getElementById('choiceThreeTwo').style.display = 'inline';
  }
  else if (current == 12) {
    document.getElementById('nextButton').style.display = 'block';
    document.body.style.backgroundImage = "url('assets/images/parkingLot.png')";
  }
  else if (current == 13) {
    document.getElementById('nextButton').style.display = 'none';
    setTimeout(function(){
      document.getElementById('choiceFour').style.display = 'block';
      document.getElementById('choiceFourOne').style.display = 'inline';
      document.getElementById('choiceFourTwo').style.display = 'inline';
      document.getElementById('choiceFourThree').style.display = 'inline';
    }, 2000);
  }
  else if (current == 14) {
    document.getElementById('choiceFour').style.display = 'none';
    document.getElementById('choiceFourOne').style.display = 'none';
    document.getElementById('choiceFourTwo').style.display = 'none';
    document.getElementById('choiceFourThree').style.display = 'none';

    document.getElementById('choiceFive').style.display = 'block';
    document.getElementById('choiceFiveOne').style.display = 'inline';
    document.getElementById('choiceFiveTwo').style.display = 'inline';
  }
  else if (current == 15) {
    document.getElementById('nextButton').style.display = 'block';

    document.getElementById('choiceFour').style.display = 'none';
    document.getElementById('choiceFourOne').style.display = 'none';
    document.getElementById('choiceFourTwo').style.display = 'none';
    document.getElementById('choiceFourThree').style.display = 'none';

    document.getElementById('choiceFive').style.display = 'none';
    document.getElementById('choiceFiveOne').style.display = 'none';
    document.getElementById('choiceFiveTwo').style.display = 'none';
  }
  else if (current == 16) {
    document.getElementById('nextButton').style.display = 'block';

    document.getElementById('choiceFour').style.display = 'none';
    document.getElementById('choiceFourOne').style.display = 'none';
    document.getElementById('choiceFourTwo').style.display = 'none';
    document.getElementById('choiceFourThree').style.display = 'none';

    document.getElementById('choiceFive').style.display = 'none';
    document.getElementById('choiceFiveOne').style.display = 'none';
    document.getElementById('choiceFiveTwo').style.display = 'none';

    document.body.style.backgroundImage = "url('assets/images/inCar.png')";
  }
  else if (current == 18) {
    document.getElementById('nextButton').style.display = 'none';

    document.getElementById('choiceSix').style.display = 'block';
    document.getElementById('choiceSixOne').style.display = 'inline';
    document.getElementById('choiceSixTwo').style.display = 'inline';
  }
  else if (current == 19) {
    document.getElementById('nextButton').style.display = 'none';

    document.getElementById('choiceSeven').style.display = 'block';
    document.getElementById('choiceSevenOne').style.display = 'inline';
    document.getElementById('choiceSevenTwo').style.display = 'inline ';
  }
  else if (current == 20) {
    document.getElementById('choiceSeven').style.display = 'none';
    document.getElementById('choiceSevenOne').style.display = 'none';
    document.getElementById('choiceSevenTwo').style.display = 'none ';

    document.getElementById('choiceEight').style.display = 'block';
    document.getElementById('choiceEightOne').style.display = 'block';
  }
  else if (current == 21) {
    document.getElementById('choiceEight').style.display = 'none';
    document.getElementById('choiceEightOne').style.display = 'none';

    document.getElementById('choiceSeven').style.display = 'none';
    document.getElementById('choiceSevenOne').style.display = 'none';
    document.getElementById('choiceSevenTwo').style.display = 'none ';
    setTimeout(function(){ dead(); }, 3000);
  }
  else if (current == 22) {
    document.getElementById('choiceEight').style.display = 'none';
    document.getElementById('choiceEightOne').style.display = 'none';

    document.getElementById('choiceNine').style.display = 'block';
    document.getElementById('choiceNineOne').style.display = 'inline';
    document.getElementById('choiceNineTwo').style.display = 'inline';
  }
  else if (current == 23) {
    document.getElementById('choiceNine').style.display = 'none';
    document.getElementById('choiceNineOne').style.display = 'none';
    document.getElementById('choiceNineTwo').style.display = 'none';
  }
  else if (current == 24) {
    document.getElementById('nextButton').style.display = 'block';

    document.getElementById('choiceNine').style.display = 'none';
    document.getElementById('choiceNineOne').style.display = 'none';
    document.getElementById('choiceNineTwo').style.display = 'none';
  }
  else if (current == 25) {
    document.body.style.backgroundImage = "url('assets/images/store.png')";

    document.getElementById('nextButton').style.display = 'none';

    document.getElementById('choiceTen').style.display = 'block';
    document.getElementById('choiceTenOne').style.display = 'inline';
    document.getElementById('choiceTenThree').style.display = 'none';
  }
  else if (current == 26) {
    document.getElementById('choiceTenOne').style.display = 'none';
    document.getElementById('choiceTenThree').style.display = 'inline';
  }
  else if (current == 27) {
    document.getElementById('choiceTenThree').style.display = 'none';

    document.getElementById('nextButton').style.display = 'block';
  }
  else if (current == 29) {
    document.getElementById('nextButton').style.display = 'none';
    document.body.style.backgroundImage = "url('assets/images/inCar.png')";

    document.getElementById('choiceTwelve').style.display = 'block';
    document.getElementById('choiceTwelveOne').style.display = 'inline';
    document.getElementById('choiceTwelveTwo').style.display = 'inline';
  }
  else if (current == 30) {
    document.getElementById('nextButton').style.display = 'block';

    document.getElementById('choiceTwelve').style.display = 'none';
    document.getElementById('choiceTwelveOne').style.display = 'none';
    document.getElementById('choiceTwelveTwo').style.display = 'none';
  }

  document.getElementById("storyTexts").innerHTML = storyTexts[current];
}

function incommingCall() {
  callSound = setInterval(function(){ callIn.play(); }, 2000);
  document.getElementById('phoneOff').style.display = 'none';
  document.getElementById('phoneLocked').style.display = 'none;';
  document.getElementById('phoneCallIn').style.display = 'block';
  document.getElementById('phoneAnswer').style.display = 'block';
  document.getElementById('phoneDecline').style.display = 'block';
}

function turnPhoneOn() {
  document.getElementById('phoneOff').style.display = 'none';
  document.getElementById('phoneLocked').style.display = 'block';
}

function dead() {
  setTimeout(function(){ deadSound.play(); }, 500);
  document.getElementById('deadScreen').style.display = 'block';
  setTimeout(function(){ location.reload(); }, 5000);
}

function callDecline() {
  if (!isCalled) {
    isCalled = true;
    clearInterval(callSound);
    callIn.pause();
    callIn.currentTime = 0;
    phoneVoice.pause();
    phoneVoice.currentTime = 0;
    document.getElementById('phoneCallIn').style.display = 'none';
    document.getElementById('phoneAnswer').style.display = 'none';
    document.getElementById('phoneDecline').style.display = 'none';
    setTimeout(function(){ incommingCall(); }, 3000);
  } else {
    document.getElementById('phoneAnswer').style.display = 'none';
    document.getElementById('phoneDecline').style.display = 'none';
    clearInterval(callSound);
    callIn.pause();
    callIn.currentTime = 0;
    dead();
  }
}

function callAnswer() {
  document.getElementById('phoneAnswer').style.display = 'none';
  document.getElementById('phoneDecline').style.display = 'none';
  document.getElementById('nextButton').style.display = 'block';
  clearInterval(callSound);
  callIn.pause();
  callIn.currentTime = 0;

  phoneVoice.play();

  setTimeout(function(){
      phoneVoice.pause();
      //console.log("Voice successfully paused!");
  },
  5000);

  setTimeout(function(){
    document.getElementById('phoneCallIn').style.display = 'none';
    document.getElementById('phoneAnswer').style.display = 'none';
    document.getElementById('phoneDecline').style.display = 'none';
  }, 5000);
}

function gunShotSound() {
  snd.play();
  snd.currentTime = 0;
}

function wilhelmScreemSound() {
  deadSound.play();
  deadSound.currentTime = 0;
}

function toSceneTwo() {
  document.getElementById('storyTexts').style.display = 'none';
  document.getElementById('choiceOne').style.dsplay = 'none';
  document.getElementById('choiceOneOne').style.display = 'none';
  document.getElementById('choiceOneTwo').style.display = 'none';
  document.body.style.backgroundImage = "url('assets/images/pcroom.png')";
  Next();
  current++;
  setTimeout(function(){ document.getElementById('storyTexts').style.display = 'block'; }, 3000);
  setTimeout(function(){ document.getElementById('nextButton').style.display = 'block'; }, 3000);
}

function toSceneThree() {
  document.body.style.backgroundImage = "url('assets/images/livingroom.png')";
  Next();
  current+2;
}

//checks index of current
setInterval(function(){ console.log(current); }, 1000);

function sceneTwoEnding() {
  document.getElementById('storyTexts').innerHTML = storyTexts[8];
  document.getElementById('choiceTwo').style.display = 'none';
  document.getElementById('choiceTwoOne').style.display = 'none';
  document.getElementById('choiceTwoTwo').style.display = 'none';
  setTimeout(function(){ toSceneThree(); }, 4000);
}

function removeChoiceThree() {
  document.getElementById('choiceThree').style.display = 'none';
  document.getElementById('choiceThreeOne').style.display = 'none';
  document.getElementById('choiceThreeTwo').style.display = 'none';
}

document.getElementById('playButton').onmouseover = function(){
  document.getElementById('peekingSkeletonOne').style.display = 'block';
};

document.getElementById('playButton').onmouseout = function(){
  document.getElementById('peekingSkeletonOne').style.display = 'none';
};

document.getElementById('infoButton').onmouseover = function(){
  document.getElementById('peekingSkeletonTwo').style.display = 'block';
};

document.getElementById('infoButton').onmouseout = function(){
  document.getElementById('peekingSkeletonTwo').style.display = 'none';
};

document.getElementById('creditsButton').onmouseover = function(){
  document.getElementById('peekingSkeletonThree').style.display = 'block';
};

document.getElementById('creditsButton').onmouseout = function(){
  document.getElementById('peekingSkeletonThree').style.display = 'none';
};

function updateInv() {
    document.getElementById('inventory').style.display = 'flex';
    if (!grabbedGun) {
      //has no gun

    } else {
      //has gun (in inventory)
      document.getElementById('invPistol').style.display = 'block';
      document.getElementById('choiceSixOne').style.display = 'none';
    }
    if (!grabbedMask) {
      //has no mask

    } else {
      //has mask (in inventory)
      document.getElementById('invVMask').style.display = 'block';
      document.getElementById('choiceSixTwo').style.display = 'none';
    }
    if (grabbedGun == true && grabbedMask == true) {
      document.getElementById('nextButton').style.display = 'block';
    }
}

function pickUpSound() {
  pickUp.play();
  pickUp.currentTime = 0;
  mainMenuSound.volume = 0.015;
}

function choiceNineTwo() {
  current++;
  Next();
  document.body.style.backgroundImage = "url('assets/images/outsideStore.png')"
}
