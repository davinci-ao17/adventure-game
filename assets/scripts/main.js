var time = 2;
var isDone = true;
var index = 0;
var Current = 0;
var snd = new Audio("assets/sounds/snipershot.wav");
var storyTexts = [
  "Story: You woke up in a different bed than you used to. There is a phone next to the bed. You get an anonymous call.",
  "Test2",
  "Test3",
];

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
                  document.body.style.backgroundImage = "url('assets/images/mainmenu.png')";
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
  canPlay = true;
  document.getElementById('mainMenu').style.display = 'none';
  document.body.style.backgroundImage = "url('assets/images/first.png')";
  setTimeout(function(){ document.getElementById('storyTexts').style.display = 'block'; }, 2000);
  setTimeout(function(){ document.getElementById('nextButton').style.display = 'block'; }, 2000);
  storyTextArray();
}

function storyTextArray() {
  setTimeout(function(){ document.getElementById('storyTexts').innerHTML = storyTexts[0]; }, 2000);
}

function Next(){
  if(Current != storyTexts.length - 1) {
    Current++;
  }

  document.getElementById("storyTexts").innerHTML = storyTexts[Current];
}
