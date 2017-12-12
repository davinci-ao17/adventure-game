var username = "";
var username1 = "";
var username2 = "";
var username3 = "";

//items

var waterbottle = false;
var flaregun = false;
var parachute = false;

//mainmenu-elems

var howToPlayInfo = document.getElementById("howToPlayInfo");
var creditsMenu = document.getElementById("credits_menu");
var mainMenu = document.getElementById("mainMenu");
var closeHTPI = document.getElementById("howToPlayInfo");
var closeCredits = document.getElementById("close_credits");

//backstory-elems

var backstoryScene = document.getElementById("backstoryScene");
var buttonStart = document.getElementById("button_start");
var buttonEarlyEnd = document.getElementById("button_earlyend");
var buttonEarlyEndCredits = document.getElementById("button_earlyendcredits");
var buttonGoodEnd = document.getElementById("button_goodend");
var buttonGoodEndCredits = document.getElementById("button_goodendcredits");
var buttonBestEnd = document.getElementById("button_bestend");
var buttonBestEndCredits = document.getElementById("button_bestendcredits");

//gameover

var gameOverScenes = document.getElementById("gameoverscenes");
var gameOverText = document.getElementById("gameover-text");
var gameOverImg = document.getElementById("GOIMG");
var skiesIsDie = false;

//elems

var imgScene = document.getElementById("imgScene");
var textboxText = document.getElementById("textbox-text");
var textbox = document.getElementById("textbox");
var choicesMenu = document.getElementById("choicesmenu");
var choiceOne = document.getElementById("choiceOne");
var choiceTwo = document.getElementById("choiceTwo");
var choiceThree = document.getElementById("choiceThree");
var choiceFour = document.getElementById("choiceFour");
var pickedUpAllElem = document.getElementById("textbox-text");
var inventoryBar = document.getElementById("inventory");
var laptop = document.getElementById("laptop");
var briefcaseClosed = document.getElementById("briefcase-closed");
var briefcaseOpen = document.getElementById("briefcase-open");
var waterbottleLaydown = document.getElementById("waterbottleLaydown");
var waterbottleInventory = document.getElementById("waterbottleInventory");
var parachuteLaydown = document.getElementById("parachuteLaydown");
var parachuteInventory = document.getElementById("parachuteInventory");
var flaregunLaydown = document.getElementById("flaregunLaydown");
var flaregunInventory = document.getElementById("flaregunInventory");
var phoneInventory = document.getElementById("phoneInventory");
var endingcredits = document.getElementById("endingcredits");
var bcClosed = false;
var bcOpen = false;

//sounds

var mainmenumusic = document.getElementById("mainmenumusic");
var planesound = document.getElementById("planesound");
var skiessound = document.getElementById("skiessound");
var creditsmusic = document.getElementById("creditsmusic");
var lakesound = document.getElementById("lakesound");
var woods = document.getElementById("outsideshacksound");
var wilhelmscream = document.getElementById("wilhelmscream");
var shackmusic = document.getElementById("shackmusic");
var cavesounds = document.getElementById("cavesounds");
var realwoods = document.getElementById("woodssounds");
var chestOpen = document.getElementById("openchest");
var chestClosed = document.getElementById("closedchest");
var pickupSound = document.getElementById("itempickup");
var useitemSound = document.getElementById("useitem");
var gameOverMusic = document.getElementById("gameovermusic");
var clickButton = document.getElementById("clickbutton");

//ending

var bestending = false;
var endingearly = document.getElementById("endingearly");
var endinggood = document.getElementById("endinggood");
var endingbest = document.getElementById("endingbest");

//muted music

wilhelmscream.muted = true;
planesound.muted = true;
skiessound.muted = true;
creditsmusic.muted = true;
lakesound.muted = true;
woods.muted = true;
shackmusic.muted = true;
cavesounds.muted = true;
realwoods.muted = true;
clickButton.pause();
gameOverMusic.pause();
chestOpen.pause();
chestClosed.pause();
pickupSound.pause();
useitemSound.pause();


console.log("mainmenu");

var backstory = function(){
	username = prompt("Please enter a name.", "Jack Colton");
	document.getElementById('username').innerHTML = username; {
		if(username == null || username.startsWith(" ") || username.length <= 2 || username.length >= 41) {
			alert("Invalid name!")
			return;
		} else {
			var matches = username.match(/\d+/g);
			if (matches != null) {
    			alert("Your name can't contain any numbers!");
    			return;
			} else{
    			clickButton.play();
				howToPlayInfo.style.display = "none";
				creditsMenu.style.display = "none";
				mainMenu.style.animation = "fadeout 2s";
			}
		}
	}

	backstoryScene.style.animation = "fadein 2s";

	setTimeout(function () {
		mainMenu.style.display = "none";
    }, 1900);


    setTimeout(function () {
    	hideAll();
		backstoryScene.style.display = "block";
    }, 2000);


    setTimeout(function () {
    	buttonStart.style.animation = "fadein 2s";
    }, 2000);

    console.log("backstory");
}

var howtoplay = function(){
	clickButton.play();
	hideAll();
	howToPlayInfo.style.display = "inline-block";
	console.log("howtoplay");
	closeHTPI.onclick = function(){
		clickButton.pause();
		clickButton.currentTime = 0;
	}
}

var creditsmain = function(){
	clickButton.play();
	hideAll();
	creditsMenu.style.display = "inline-block";
	console.log("credits - mainmenu");
	closeCredits.onclick = function(){
		clickButton.pause();
		clickButton.currentTime = 0;
		mainmenu();
	}
}

var mainmenu = function(){
	showMainMenu();
	howToPlayInfo.style.display = "none";
	creditsMenu.style.display = "none";
	console.log("mainmenu");
}

//Scenes

function scene1(){ //Airplane B-26
	mainmenumusic.muted = true;
	planesound.muted = false;
	inventoryBar.style.display = "block";
	phoneInventory.style.display = "inline";
	laptop.style.display = "block";
	briefcaseClosed.style.display = "block";

	briefcaseClosed.onclick = function() {
		briefcaseClosed.style.display = "none";
		bcClosed = false;
		bcOpen = true;
		briefcaseOpen.style.display = "block";
		chestOpen.play();
		chestOpen.currentTime = 0;

		if (waterbottle == false) {
			waterbottleLaydown.style.display = "block";
		}

		waterbottleLaydown.onclick = function(){
			waterbottle = true;
			pickupSound.play();

		if (waterbottle == true) {
			waterbottleInventory.style.display = "inline";
			waterbottleLaydown.style.display = "none";
			textboxText.innerHTML = "It's time, after months of research you finally have the information to investigate the North Dakota missing people case. Currently you are aboard Airplane B-26 right above the drop-zone. Prepare yourself...<br><br><br>You got a waterbottle!";
			
			setTimeout(function () {
				textboxText.innerHTML = "It's time, after months of research you finally have the information to investigate the North Dakota missing people case. Currently you are aboard Airplane B-26 right above the drop-zone. Prepare yourself...";	
    		}, 600);
			console.log("waterbottle = true");
		}
		}
	}

	briefcaseOpen.onclick = function() {
		briefcaseOpen.style.display = "none";
		bcClosed = true;
		bcOpen = false;
		briefcaseClosed.style.display = "block";
		chestClosed.play();
		chestClosed.currentTime = 0;
		waterbottleLaydown.style.display = "none";
	}

	imgScene.style.animation = "fadein 1s";
	backstoryScene.style.display = "none";
	imgScene.style.display = "inline-block";
	imgScene.src = "img/airplane.jpg";
	textboxText.innerHTML = "It's time, after months of research you finally have the courage to investigate the North Dakota missing people case. Currently you are aboard Airplane B-26 right above the drop-zone. Prepare yourself...";	
	textbox.style.display = "inline-block";
	choicesMenu.style.display = "inline-block";
	choiceOne.innerHTML = "Go to the cockpit";
	choiceTwo.innerHTML = "Jump out of the plane";
	choiceThree.innerHTML = "Sit in your seat and change your mind";
	choiceOne.style.display = "block";
	choiceTwo.style.display = "block";
	choiceThree.style.display = "block";
	parachuteLaydown.style.display = "none";
	choiceFour.style.display = "none";
	choiceOne.setAttribute("onclick", "scene2()");
	choiceThree.setAttribute("onclick", "earlycreditsscreen()");

	if (parachute == false) {
		choiceTwo.onclick = function(){
		alert("You don't have a parachute. You can't jump out now!");
	}

	} else if (parachute == true) {
		choiceTwo.setAttribute("onclick", "scene3()");
	}

	if (bcClosed == true) {
		briefcaseClosed.style.display = "block";
		briefcaseOpen.style.display = "none";
	}

	if (bcOpen == true) {
		briefcaseOpen.style.display = "block";
		briefcaseClosed.style.display = "none";

		if (waterbottle == false) {
			waterbottleLaydown.style.display = "block";
		}

	}
	console.log("Airplane B26");
}

function scene2(){ //Cockpit

	if (parachute == true) {
		parachuteLaydown.style.display = "none";
	} else {
		parachuteLaydown.style.display = "block";
	}

	if (waterbottle == false) {
		waterbottleLaydown.style.display = "none";
	}

	imgScene.src = "img/cockpit.jpg";
	briefcaseClosed.style.display = "none";
	briefcaseOpen.style.display = "none";
	laptop.style.display = "none";
	choiceThree.style.display = "none";
	choiceTwo.innerHTML = "Go back";
	choiceOne.style.display = "none";

	parachuteLaydown.onclick = function() {
		pickupParachute();
		parachuteInventory.style.display = "inline";
		parachuteLaydown.style.display = "none";
		pickupSound.play();
		pickupSound.currentTime = 0;
		textboxText.innerHTML = "Pilot: Now put that on. <br><br><br>You took a parachute!";
		
		setTimeout(function () {
			textboxText.innerHTML = "Pilot: You took your parachute. There is nothing useful for you to use.";
		}, 600);
	}

	if (parachute == true) {
		choiceThree.style.display = "none";
	}

	choiceTwo.onclick = function() { scene1(); };
	checkList();
	console.log("Cockpit of Airplane B-55");
}

function earlycreditsscreen(){
	document.getElementById('username1').innerHTML = username;

	setTimeout(function () {
		endingearly.style.animation = "fadein 1s";
    }, 900);

    setTimeout(function () {
    	hideAll();
		endingearly.style.display = "block";
    }, 1000);

    setTimeout(function () {
    	buttonEarlyEnd.style.animation = "fadein 1s";
    	buttonEarlyEndCredits.style.animation = "fadein 1s";
    }, 1000);

    hideAll();
	laptop.style.display = "none";
	briefcaseOpen.style.display = "none";
	briefcaseClosed.style.display = "none";
	waterbottleLaydown.style.display = "none";
	inventoryBar.style.display = "none";
	waterbottleInventory.style.display = "none";
	parachuteInventory.style.display = "none";
	parachuteLaydown.style.display = "none";
	planesound.muted = true;
	console.log("earlycreditsscreen");
}

function earlycredits(){
	endingearly.style.display = "none";
	setTimeout(function(){ location.reload(); }, 61000);
	creditsmusic.muted = false;
	realwoods.muted = true;
	creditsmusic.currentTime = 0;	creditsmusic.volume = 0.3;
	endingcredits.style.display = "block";
	console.log("Credits - Early");
}

function scene3(){ //Skies
	skiessound.muted = false;
	planesound.muted = true;
	laptop.style.display = "none";
	briefcaseOpen.style.display = "none";
	briefcaseClosed.style.display = "none";
	imgScene.src = "img/skies.jpg";
	textboxText.innerHTML = "This is it you have jumped out of the airplane. There's no going back now. Landing on the ground isn't an option because you'll break your legs. You see a lake and a mountain, on which one are you going to land? ";
	choiceOne.innerHTML = "On the mountain";
	choiceTwo.innerHTML = "In the lake";
	choiceThree.style.display = "none";
	choiceFour.style.display = "none";
	choiceOne.setAttribute("onclick", "scenego1()");
	choiceTwo.setAttribute("onclick", "scene4()");
	console.log("Skies");
	
	setTimeout(function () {
		if (!skiesIsDie) {
			scenegotoo();
		}
	}, 40000);
}

function scenegotoo(){
	hideAll();
	wilhelmscream.load();
	wilhelmscream.muted = false;
	setTimeout(function (){
		gameOverMusic.play();
		gameOverMusic.currentTime = 0;
	}, 400);
	gameOverScenes.style.display = "block";
	gameOverText.style.display = "block";
	gameOverImg.style.display = "inline-block";
	gameOverText.innerHTML = "You were too late with your parachute and fell to your death.";
	console.log("Game Over");
}

function scenego1(){ //gameover 1
	hideAll();
	skiesIsDie = true;
	wilhelmscream.load();
	wilhelmscream.muted = false;
	setTimeout(function (){
		gameOverMusic.play();
		gameOverMusic.currentTime = 0;
	}, 400);
	gameOverScenes.style.display = "block";
	gameOverText.style.display = "block";
	gameOverImg.style.display = "inline-block";
	gameOverText.innerHTML = "You tried to land on the mountain but you slipped and fell to your death.";
	console.log("Game Over");
}

function scene4(){ //Lake
	useitemSound.play();
	skiesIsDie = true;
	phoneInventory.style.display = "none";
	parachuteInventory.style.display = "none";
	skiessound.muted = true;
	lakesound.muted = false;
	planesound.muted = true;
	imgScene.src = "img/lake.jpg";
	textboxText.innerHTML = "You've landed in the lake and you are wet. Your phone has stopped functioning, so you are on your own. What are you going to do now?";
	choiceOne.innerHTML = "Let your clothes dry";
	choiceTwo.innerHTML = "Keep on walking";
	choiceThree.style.display = "none";
	choiceFour.style.display = "none";
	flaregunLaydown.style.display = "block";
	
	flaregunLaydown.onclick = function() {
		flaregun = true;
		flaregunInventory.style.display = "inline";
		flaregunLaydown.style.display = "none";
		pickupSound.play();
		pickupSound.currentTime = 0;
		textboxText.innerHTML = "You've landed in the lake and you are wet. Your phone has stopped functioning, so you are on your own. What are you going to do now?<br><br><br>You took a flaregun!";
		setTimeout(function () {
			textboxText.innerHTML = "You've landed in the lake and you are wet. Your phone has stopped functioning, so you are on your own. What are you going to do now?";
		}, 600);
	}

	choiceOne.setAttribute("onclick", "scene5a()");
	choiceTwo.setAttribute("onclick", "scene5b()");
	console.log("Lake");
}

function scene5a(){ //Lake1
	imgScene.src = "img/lake.jpg";
	flaregunLaydown.style.display = "block";
	if (flaregun == false) {
		flaregunLaydown.onclick = function() {
		flaregun = true;
		flaregunInventory.style.display = "inline";
		flaregunLaydown.style.display = "none";
		pickupSound.play();
		pickupSound.currentTime = 0;
		textboxText.innerHTML = "After 45 minutes of letting your clothes dry you have explored the region a little bit. A mysterious cave and an old shack is what you found. Which one are you going to investigate?<br><br><br>You took a flaregun!";
		setTimeout(function () {
			textboxText.innerHTML = "After 45 minutes of letting your clothes dry you have explored the region a little bit. A mysterious cave and an old shack is what you found. Which one are you going to investigate?";
		}, 600);
	}
	} else {
		flaregunLaydown.style.display = "none";
	}
	textboxText.innerHTML = "After 45 minutes of letting your clothes dry you have explored the region a little bit. A mysterious cave and an old shack is what you found. Which one are you going to investigate?";
	choiceOne.innerHTML = "Old shack";
	choiceTwo.innerHTML = "Cave";
	choiceThree.style.display = "none";
	choiceFour.style.display = "none";
	choiceOne.setAttribute("onclick", "scene6aa()");
	choiceTwo.setAttribute("onclick", "scene6b()");
	console.log("Lake");
}

function scene5b(){ //Lake2
	imgScene.src = "img/lake.jpg";
	flaregunLaydown.style.display = "block";
	if (flaregun == false) {
		flaregunLaydown.onclick = function() {
		flaregun = true;
		flaregunInventory.style.display = "inline";
		flaregunLaydown.style.display = "none";
		pickupSound.play();
		pickupSound.currentTime = 0;
		textboxText.innerHTML = "After 45 minutes of exploring you are feeling cold but you've come across an old shack and a cave. Which one are you going to investigate?<br><br><br>You took a flaregun!";
		setTimeout(function () {
			textboxText.innerHTML = "After 45 minutes of exploring you are feeling cold but you've come across an old shack and a cave. Which one are you going to investigate?";
		}, 600);
	}
	} else {
		flaregunLaydown.style.display = "none";
	}
	textboxText.innerHTML = "After 45 minutes of exploring you are feeling cold but you've come across an old shack and a cave. Which one are you going to investigate?";
	choiceOne.innerHTML = "Old shack";
	choiceTwo.innerHTML = "Cave";
	choiceThree.style.display = "none";
	choiceFour.style.display = "none";
	choiceOne.setAttribute("onclick", "scene6ab()");
	choiceTwo.setAttribute("onclick", "scene6b()");
	console.log("Lake");
}

function scene6aa(){ //Old Shack 1
	flaregunLaydown.style.display = "none";
	imgScene.src = "img/shack-outside.jpg";
	lakesound.muted = true;
	woods.muted = false;
	textboxText.innerHTML = "You are at an old shack. It looks like somebody lives in there. What are you going to do?";
	choiceOne.innerHTML = "Enter the shack";
	choiceTwo.innerHTML = "Leave the area";
	choiceThree.style.display = "none";
	choiceFour.style.display = "none";
	choiceOne.setAttribute("onclick", "scene6gameo1()");
	choiceTwo.setAttribute("onclick", "scene7a()");
	console.log("Outside the Old Shack");
}

function scene6ab(){ //Old Shack 2
	flaregunLaydown.style.display = "none";
	imgScene.src = "img/shack-outside.jpg";
	lakesound.muted = true;
	woods.muted = false;
	textboxText.innerHTML = "You are at an old shack. It looks like somebody lives in there. What are you going to do?";
	choiceOne.innerHTML = "Enter the shack";
	choiceTwo.innerHTML = "Leave the area";
	choiceThree.style.display = "none";
	choiceFour.style.display = "none";
	choiceOne.setAttribute("onclick", "scene6c()");
	choiceTwo.setAttribute("onclick", "scene6gameo2()");
	console.log("Outside the Old Shack");
}

function scene6b(){ //cave
	flaregunLaydown.style.display = "none";
	imgScene.src = "img/cave.jpg";
	lakesound.muted = true;
	cavesounds.muted = false;
	cavesounds.currentTime = 1;
	textboxText.innerHTML = "You are at a cave and see a danger sign. Some mist is coming out of the cave and you see some blood splatters. Are you going to enter the cave?";
	choiceOne.innerHTML = "Enter Cave";
	choiceTwo.innerHTML = "Leave the area";
	choiceThree.style.display = "none";
	choiceFour.style.display = "none";
	choiceOne.setAttribute("onclick", "scene6gameo4()");
	choiceTwo.setAttribute("onclick", "scene7a()");
	console.log("Cave");
}

function scene6c(){ //Inside the shack
	imgScene.src = "img/shack.jpg";
	shackmusic.muted = false;
	lakesound.muted = true;
	woods.muted = true;
	textboxText.innerHTML = "The man gave you some new clothes and some food. You saw bloody knifes and a shotgun on a bed. You started to ask questions about that. He said he kill and eat people that are in the region. What are you going to do?";
	choiceOne.innerHTML = "Run!";

	choiceOne.onclick = function(){
		bestending = true;
		scene7b();
		console.log("bestending = true");
	}

	choiceTwo.innerHTML = "Fight the man";
	choiceThree.style.display = "none";
	choiceFour.style.display = "none";
	choiceTwo.setAttribute("onclick", "scene6gameo3()");
	console.log("Inside the Oldshack");
}

function scene6gameo1(){
	hideAll();
	wilhelmscream.load();
	wilhelmscream.muted = false;
	setTimeout(function (){
		gameOverMusic.play();
		gameOverMusic.currentTime = 0;
	}, 400);
	woods.muted = true;
	gameOverScenes.style.display = "block";
	gameOverText.style.display = "block";
	gameOverImg.style.display = "block";
	gameOverText.innerHTML = "You entered the shack but a man was shocked with your presence and shot you.";
	console.log("Game Over");
}

function scene6gameo2(){
	hideAll();
	wilhelmscream.load();
	wilhelmscream.muted = false;
	setTimeout(function (){
		gameOverMusic.play();
		gameOverMusic.currentTime = 0;
	}, 400);
	woods.muted = true;
	gameOverScenes.style.display = "block";
	gameOverText.style.display = "block";
	gameOverImg.style.display = "block";
	gameOverText.innerHTML = "You left the area and the cold was unbearable. You died of the cold.";
	console.log("Game Over");
}

function scene6gameo3(){
	hideAll();
	shackmusic.muted = true;
	wilhelmscream.load();
	wilhelmscream.muted = false;
	setTimeout(function (){
		gameOverMusic.play();
		gameOverMusic.currentTime = 0;
	}, 400);
	gameOverScenes.style.display = "block";
	gameOverText.style.display = "block";
	gameOverImg.style.display = "inline-block";
	gameOverText.innerHTML = "You tried to fight the man but he was quicker and stabbed you with a spoon.";
	console.log("Game Over");
}

function scene6gameo4(){
	hideAll();
	cavesounds.muted = true;
	wilhelmscream.load();
	wilhelmscream.muted = false;
	setTimeout(function (){
		gameOverMusic.play();
		gameOverMusic.currentTime = 0;
	}, 400);
	gameOverScenes.style.display = "block";
	gameOverText.style.display = "block";
	gameOverImg.style.display = "inline-block";
	gameOverText.innerHTML = "You entered the cave and fell into a spike trap.";
	console.log("Game Over");
}

function scene7a(){
	imgScene.src = "img/riverside.jpg";
	cavesounds.muted = true;
	woods.muted = false;
	textboxText.innerHTML = "You left the area and stopped at a riverside, but you are thirsty and need some water fast. Drinking from the river isn't a good idea.";

	if (waterbottle == true) {
		choiceOne.innerHTML = "Drink water from waterbottle";
		choiceOne.setAttribute("onclick", "scene8()");
	} else {
		choiceOne.style.display = "none";
	}

	choiceTwo.innerHTML = "Drink nothing";
	choiceThree.style.display = "none";
	choiceFour.style.display = "none";
	choiceTwo.setAttribute("onclick", "scene7gameo()");
	console.log("Riverside");
}

function scene7b(){
	imgScene.src = "img/riverside.jpg";
	lakesound.muted = true;
	woods.muted = false;
	shackmusic.muted = true;
	textboxText.innerHTML = "You ran as hard as you could. After awhile he stopped following you. Now you are at a riverside, but you are thirsty and need some water fast. Drinking from the river isn't a good idea.";
	
	if (waterbottle == true) {
		choiceOne.innerHTML = "Drink water from waterbottle";
		choiceOne.setAttribute("onclick", "scene8()");
	} else {
		choiceOne.style.display = "none";
	}

	choiceTwo.innerHTML = "Drink nothing";
	choiceThree.style.display = "none";
	choiceFour.style.display = "none";
	choiceTwo.setAttribute("onclick", "scene7gameo()");
	console.log("Riverside");
}

function scene7gameo(){
	hideAll();
	woods.muted = true;
	wilhelmscream.load();
	wilhelmscream.muted = false;
	setTimeout(function (){
		gameOverMusic.play();
		gameOverMusic.currentTime = 0;
	}, 400);
	gameOverScenes.style.display = "block";
	gameOverText.style.display = "block";
	gameOverImg.style.display = "inline-block";
	gameOverText.innerHTML = "You drank nothing and kept on walking. After a while you fainted and never woke up after that.";
	console.log("Game Over");
}

function scene8(){

	if (waterbottle == true) {
		useitemSound.play();
		useitemSound.currentTime = 0;
	}

	imgScene.src = "img/woods.jpg";
	woods.muted = true;
	waterbottleInventory.style.display = "none";
	realwoods.muted = false;
	textboxText.innerHTML = "You are walking in the woods and hear and see a helicopter. What are you going to do?";

	if (flaregun == true) {
		choiceOne.innerHTML = "Shoot flaregun in the sky";
		choiceOne.setAttribute("onclick", "scene9()");
	} else {
		choiceOne.style.display = "none";
	}

	choiceTwo.innerHTML = "Scream for help";
	choiceThree.style.display = "none";
	choiceFour.style.display = "none";
	choiceTwo.setAttribute("onclick", "scene8gameo()");
	console.log("Woods");
}

function scene8gameo(){
	hideAll();
	realwoods.muted = true;
	wilhelmscream.load();
	wilhelmscream.muted = false;
	setTimeout(function (){
		gameOverMusic.play();
		gameOverMusic.currentTime = 0;
	}, 400);
	gameOverScenes.style.display = "block";
	gameOverText.style.display = "block";
	gameOverImg.style.display = "inline-block";
	if (flaregun == false) {
		gameOverText.innerHTML = "You screamed for help and alerted a pack of hungry wolves.<br> HINT: You missed an essential item.";
	} else {
		gameOverText.innerHTML = "You screamed for help and alerted a pack of hungry wolves.";
	}
	console.log("Game Over");
}

function scene9(){
	useitemSound.play();
	useitemSound.currentTime = 0;
	flaregunInventory.style.display = "none";
	imgScene.src = "img/landingpad.jpg";
	realwoods.muted = false;
	textboxText.innerHTML = "The helicopter landed and you was relieved that they saw the flare, but you may only enter if you give the correct password";
	choiceOne.innerHTML = "G-22";
	choiceTwo.innerHTML = "H-93";
	choiceThree.style.display = "inline-block";
	choiceThree.innerHTML = "B-26";
	choiceFour.style.display = "block";
	choiceFour.innerHTML = "L-OL";

	if (bestending == true) {
		choiceThree.setAttribute("onclick", "bestcreditsscreen()");
	} else {
		choiceThree.setAttribute("onclick", "goodcreditsscreen()");
	}

	choiceOne.setAttribute("onclick", "scene9gameo()");
	choiceTwo.setAttribute("onclick", "scene9gameo()");
	choiceFour.setAttribute("onclick", "scene9gameo()");
	console.log("Landingpad");
}

function scene9gameo() {
	hideAll();
	realwoods.muted = true;
	wilhelmscream.load();
	wilhelmscream.muted = false;
	setTimeout(function (){
		gameOverMusic.play();
		gameOverMusic.currentTime = 0;
	}, 400);
	gameOverScenes.style.display = "block";
	gameOverText.style.display = "block";
	gameOverImg.style.display = "inline-block";
	gameOverText.innerHTML = "You gave the incorrect password and they left you behind.";
	console.log("Game Over");
}

function goodcreditsscreen(){
	document.getElementById('username2').innerHTML = username;

	setTimeout(function () {
		endinggood.style.animation = "fadein 1s";
		scene9.style.display = "none";
    }, 900);

    setTimeout(function () {
    	hideAll();
		endinggood.style.display = "block";
    }, 1000);

    setTimeout(function () {
    	buttonGoodEnd.style.animation = "fadein 1s";
    	buttonGoodEndCredits.style.animation = "fadein 1s";
    }, 1000);

    hideAll();
	laptop.style.display = "none";
	realwoods.muted = true;
	console.log("goodcreditsscreen");
}

function sceneending(){
	hideAll();
	endinggood.style.display = "none";
	setTimeout(function(){ location.reload(); }, 61000);
	creditsmusic.muted = false;
	realwoods.muted = true;
	creditsmusic.currentTime = 0;
	creditsmusic.volume = 0.3;
	endingcredits.style.display = "block";
	console.log("Credits - Good Ending");
}

function bestcreditsscreen(){
	document.getElementById('username3').innerHTML = username;

	setTimeout(function () {
		endingbest.style.animation = "fadein 1s";
		scene9.style.display = "none";
    }, 900);

    setTimeout(function () {
    	hideAll();
		endingbest.style.display = "block";
    }, 1000);

    setTimeout(function () {
    	buttonBestEnd.style.animation = "fadein 1s";
    	buttonBestEndCredits.style.animation = "fadein 1s";
    }, 1000);

    hideAll();
	laptop.style.display = "none";
	realwoods.muted = true;
	console.log("bestcreditsscreen");
}

function scenebestending(){
	hideAll();
	endingbest.style.display = "none";
	setTimeout(function(){ location.reload(); }, 61000);
	creditsmusic.muted = false;
	realwoods.muted = true;
	creditsmusic.currentTime = 0;
	creditsmusic.volume = 0.3;
	endingcredits.style.display = "block";
	console.log("Credits - Best Ending");
}

function hideAll(){
	backstoryScene.style.display = "none";
	mainMenu.style.display = "none";
	imgScene.style.display = "none";
	textbox.style.display = "none";
	choicesmenu.style.display = "none";
	endingcredits.style.display = "none";
	planesound.muted = true;
	skiessound.muted = true;
	wilhelmscream.muted = true;
}

function showMainMenu(){
	mainMenu.style.display = "block";
}

function checkList(){
	if (!parachute) {
		textboxText.innerHTML = "Pilot: It'll get rough down there. You won't make it far without a parachute. Here take one right next to me.";
		return;
	}
	choiceOne.style.display = "none";
	textboxText.innerHTML = "Pilot: You already took your parachute.";
}

function pickupParachute(){
	parachute = true;
	if (parachute = true) {
		checkList();
		choiceOne.style.display = "none";
		console.log("parachute = true");
	}
}