var title = document.getElementById("title");
var image = document.getElementById("image");
var options = document.getElementById("options");
var link1 = document.getElementById('link1');
var link2 = document.getElementById('link2');
var link3 = document.getElementById('link3');
var items = document.getElementById('items');
var item1 = document.getElementById('item1');
var item2 = document.getElementById('item2');
var text = document.getElementById('text');
var rope = 0;
var rope2 = 0;
var piece = 0;
var key = 0;
var bag = 0;
var events = 0;

function optie1()
{
	title.innerHTML = "Schipdek";
	image.src = "img/schipdek.jpg";
	link1.setAttribute("onclick", "optie2()");
  link1.innerHTML = "Go back";
  link2.setAttribute("onclick", "optie3()");
  link2.innerHTML = "to the ship's hold";
	link3.setAttribute("onclick", "optie6()");
  link3.innerHTML = "to the captain's room";
	link3.style.display = "inline-block"
	console.log(title);
}

function optie2()
{
	title.innerHTML = "Adventure game: treusure hunt";
	image.src = "img/schip.jpg";
  link1.setAttribute("onclick", "optie1()");
  link1.innerHTML = "begin game";
  link2.setAttribute("onclick", "options1()");
  link2.innerHTML = "Level selection";
	link3.setAttribute("onclick", "()");
  link3.innerHTML = "";
	link3.style.display = "none";
	link2.style.display = "inline-block";
	text.innerHTML = "";
}

function optie3() {
	title.innerHTML = "ruim";
	image.src = "img/schipruim 2.jpg";
	link1.setAttribute("onclick", "optie1()");
  link1.innerHTML = "Go back";
  link2.setAttribute("onclick", "optie4()");
  link2.innerHTML = "walk further";
	link3.style.display = "none";
  link3.innerHTML = "";
	text.innerHTML = "";
}

function optie4() {
	title.innerHTML = "ruim";
	image.src = "img/schipruim met sleutel.jpg";
	link1.setAttribute("onclick", "optie3()");
  link1.innerHTML = "Go back";
  link2.setAttribute("onclick", "optie5()");
  link2.innerHTML = "Grab key";
	link3.style.display = "none";
}

function optie5() {
	title.innerHTML = "ruim";
	image.src = "img/schipruim zonder sleutel.jpg"
	link1.setAttribute("onclick", "optie7()");
	link1.innerHTML = "Go back";
	link2.setAttribute("onclick", "optie0()");
	link2.innerHTML = "";
	link2.style.display = "none";
	link3.setAttribute("onclick", "optie0()");
	link3.innerHTML = "";
	item1.src = "img/oud sleutel.png";
	text.innerHTML = "";
}
function optie6() {
	text.innerHTML = "the door is locked. there must be a key somewhere."
}
function optie7() {
	title.innerHTML = "ruim";
	image.src = "img/schipruim 2 doos.jpg";
	text.innerHTML = "where did this box come from?";
	link1.setAttribute("onclick", "optie9()");
	link2.setAttribute("onclick", "optie8()");
	link3.setAttribute("onclick", "optie5()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "Use key on box";
	link3.innerHTML = "Go further";
	link2.style.display = "inline-block";
	link3.style.display = "inline-block";
}
function optie8() {
	text.innerHTML = "Are you sure?";
	link1.setAttribute("onclick", "gameover()");
	link2.setAttribute("onclick", "optie7()");
	link3.setAttribute("onclick", "optie0()");
	link1.innerHTML = "Yes i'm sure!";
	link2.innerHTML = "Maybe not!";
	link3.innerHTML = "";
	link3.style.display = "none";
}
function gameover() {
	title.innerHTML = "";
	image.src = "img/game over.jpg";
	link1.setAttribute("onclick", "optie2()");
	link2.setAttribute("onclick", "optie0()");
	link3.setAttribute("onclick", "optie0()");
	link1.innerHTML = "Start over";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "as you tried to open the mysterieus box, a hand grabbed you by the neck and push you towards the box. as you struggle to get out, the box opens, revieling his sharp teeth from the side. revieling itself as a mimic, it bites in your neck, making you bleed to death. ";
	item1.src = "";
	link2.style.display = "none";
	link3.style.display = "none";
}
function optie9() {
	title.innerHTML = "Schipdek";
	image.src = "img/schipdek.jpg";
	link1.setAttribute("onclick", "optie7()");
  link1.innerHTML = "to the ship's hold";
  link2.setAttribute("onclick", "optie10()");
  link2.innerHTML = "use key for the captain's room";
	link3.setAttribute("onclick", "optie0()");
	link3.style.display = "none";
  link3.innerHTML = "";
	text.innerHTML = "";
}
function optie10() {
	title.innerHTML = "captain's room";
	image.src = "img/kapiteinskamer.JPG";
	link1.setAttribute("onclick", "optie9()");
	link2.setAttribute("onclick", "optie11()");
	link3.setAttribute("onclick", "optie");
	link1.innerHTML = "Go back";
	link2.innerHTML = "Look at box";
	link3.innerHTML = "";
	item1.src = "";
	text.innerHTML = "There's a box on the table";
}
function optie11() {
	link1.setAttribute("onclick", "optie12()");
	link2.setAttribute("onclick", "optie");
	link3.setAttribute("onclick", "optie");
	link1.innerHTML = "Open the box";
	link2.innerHTML = "";
	link3.innerHTML = "";
	link2.style.display = "none";
	text.innerHTML = "It doesn't look like there's a lock on the box";
}
function optie12() {
	link1.setAttribute("onclick", "optie13()");
	link2.setAttribute("onclick", "optie");
	link3.setAttribute("onclick", "optie");
	link1.innerHTML = "Look at the note";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "There's is a note in the box. Maybe a hint to the treasure.";
}
function optie13() {
	title.innerHTML = "";
	image.src = "img/hint1.jpg";
	link1.setAttribute("onclick", "levelcomplete()");
	link2.setAttribute("onclick", "optie");
	link3.setAttribute("onclick", "optie");
	link1.innerHTML = "Complete level";
	link2.innerHTML = "";
	link3.innerHTML = "";
	item1.src = "";
	text.innerHTML = "The note shows a hint to the treasure. looks like i have to go my great-grand parents old abandon house.";
}
function levelcomplete() {
	title.innerHTML = "";
	image.src = "img/level_complete.png";
	link1.setAttribute("onclick", "house()");
	link2.setAttribute("onclick", "optie()");
	link3.setAttribute("onclick", "optie");
	link1.innerHTML = "Next level";
	link2.innerHTML = "";
	link3.innerHTML = "";
	item1.src = "";
	text.innerHTML = "";
}
function house() {
	title.innerHTML = "house - outside";
	image.src = "img/oud huis.jpg";
	link1.setAttribute("onclick", "house2()");
	link2.setAttribute("onclick", "optie()");
	link3.setAttribute("onclick", "optie");
	link1.innerHTML = "Go in house";
	link2.innerHTML = "";
	link3.innerHTML = "";
	link2.style.display = "none";
	link3.style.display = "none";
	item1.src = "";
	text.innerHTML = "This must be the house";
	console.log(title);

}
function house2() {
	title.innerHTML = "house - living room";
	image.src = "img/oud huis woonkamer doos.jpg";
	link1.setAttribute("onclick", "house()");
	link2.setAttribute("onclick", "house4()");
	link3.setAttribute("onclick", "house3()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "Go to staircase";
	link3.innerHTML = "Look at box";
	item1.src = "";
	link3.style.display = "inline-block";
	link2.style.display = "inline-block";
	text.innerHTML = "there's the hint box";
}
function house3() {
	text.innerHTML = "looks like there's a lock on the box. the key must be somewhere in the house. ";
}
function house4() {
	title.innerHTML = "house - stair case";
	image.src = "img/oud huis trap.jpg";
	link1.setAttribute("onclick", "house2()");
	link2.setAttribute("onclick", "house5()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "Go upstairs";
	link3.innerHTML = "";
	link3.style.display = "none";
	item1.src = "";
	text.innerHTML = "";
}
function house5() {
	title.innerHTML = "house - upstairs";
	image.src = "img/oud huis zolder sleutel.jpg";
	link1.setAttribute("onclick", "house2()");
	link2.setAttribute("onclick", "house6()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go downstairs";
	link2.innerHTML = "Grab the key";
	link3.innerHTML = "";
	item1.src = "";
	text.innerHTML = "There's the key";
}
function house6() {
	title.innerHTML = "house - upstairs";
	image.src = "img/oud huis zolder.jpeg";
	link1.setAttribute("onclick", "house7()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go downstairs";
	link2.innerHTML = "";
	link2.style.display = "none";
	link3.innerHTML = "";
	item1.src = "img/oud sleutel.png";
	text.innerHTML = "Now i can finally open that box";
}
function house7() {
	title.innerHTML = "house - stair case";
	image.src = "img/oud huis trap.jpg";
	link1.setAttribute("onclick", "house8()");
	link2.setAttribute("onclick", "house6()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "Go upstairs";
	link2.style.display = "inline-block";
	link3.innerHTML = "";
	text.innerHTML = "";
}
function house8() {
	title.innerHTML = "house - living room";
	image.src = "img/oud huis woonkamer.jpg";
	link1.setAttribute("onclick", "house9()");
	link2.setAttribute("onclick", "house10()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "Go to staircase";
	link3.innerHTML = "";
	text.innerHTML = "Where did the box go!";
}
function house9() {
	title.innerHTML = "house - outside";
	image.src = "img/oud huis.jpg";
	link1.setAttribute("onclick", "house8()");
	link2.setAttribute("onclick", "optie()");
	link3.setAttribute("onclick", "optie");
	link1.innerHTML = "Go in house";
	link2.innerHTML = "";
	link2.style.display = "none";
	link3.innerHTML = "";
	text.innerHTML = "";
}
function house10() {
	title.innerHTML = "house - stair case";
	image.src = "img/oud huis trap.jpg";
	link1.setAttribute("onclick", "house8()");
	link2.setAttribute("onclick", "house11()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "Go upstairs";
	link3.innerHTML = "";
	text.innerHTML = "";
	item1.src = "img/oud sleutel.png";
}
function house11() {
	title.innerHTML = "house - upstairs";
	image.src = "img/oud huis zolder doos.jpg";
	link1.setAttribute("onclick", "house10()");
	link2.setAttribute("onclick", "house12()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go downstairs";
	link2.innerHTML = "Look at the box";
	link3.innerHTML = "";
	text.innerHTML = "how did it get here?";
}
function house12() {
	link1.setAttribute("onclick", "house13()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Open the box";
	link2.innerHTML = "";
	link2.style.display = "none";
	link3.innerHTML = "";
	text.innerHTML = "there's are words written on the top with blood. they say 'DoNt OpEn'. The blood looks still fresh.";
}
function house13() {
	image.src = "img/oud huis zolder doos open.jpg";
	link1.setAttribute("onclick", "house14()");
	link2.setAttribute("onclick", "gameover2()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Get out of the room";
	link2.innerHTML = "Wait until it goes";
	link2.style.display = "inline-block";
	link3.innerHTML = "";
	item1.src = "";
	text.innerHTML = "*cough* *cough* what is this smoke!";
}
function gameover2() {
	title.innerHTML = "";
	image.src = "img/game over.jpg";
	link1.setAttribute("onclick", "house()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Start over";
	link2.innerHTML = "";
	link2.style.display = "none";
	link3.innerHTML = "";
	text.innerHTML = "While waiting for the smoke to go away, you sense a odor coming from the smoke. it seems that the smoke is toxic and it got the better of you because you callepse to the ground and slowly die from the poisonous gasses";
	item1.src = "";
}
function house14() {
	title.innerHTML = "house - stair case";
	image.src = "img/oud huis trap.jpg";
	link1.setAttribute("onclick", "house15()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go upstairs";
	link2.innerHTML = "";
	link2.style.display = "none";
	link3.innerHTML = "";
	text.innerHTML = "That was a close one. i wonder if the smoke is gone now.";
}
function house15() {
	title.innerHTML = "house - upstairs";
	image.src = "img/oud huis zolder doos.jpg";
	link1.setAttribute("onclick", "house16()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "look in the box";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "The smoke's gone. now i can see what's in the box.";
}
function house16() {
	link1.setAttribute("onclick", "hint2()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "look at the hint";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "Looks like there's another hint in the box";
}
function hint2() {
	title.innerHTML = "";
	image.src = "img/hint2.jpg";
	link1.setAttribute("onclick", "levelcomplete2()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Complete level";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "A tombstone? it seems that i have to go the cemetery.";
}
function levelcomplete2() {
	title.innerHTML = "";
	image.src = "img/level_complete.png";
	link1.setAttribute("onclick", "graf()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Next level";
	link2.innerHTML = "";
	link3.innerHTML = "";
	item1.src = "";
	text.innerHTML = "";
}
function graf() {
	title.innerHTML = "Cemetery - entrance";
	image.src = "img/begraafplaats ingang.jpg";
	link1.setAttribute("onclick", "graf2()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go to cemetery";
	link2.innerHTML = "";
	link2.style.display = "none";
	link3.innerHTML = "";
	link3.style.display = "none";
	item1.src = "";
	text.innerHTML = "i don't like going into Cemeteries, but the hint says it is here.";
	console.log(title);

}
function options1() {
	link1.setAttribute("onclick", "optie1()");
	link2.setAttribute("onclick", "house()");
	link3.setAttribute("onclick", "options2()");
	link1.innerHTML = "level 1 - Ship";
	link2.innerHTML = "level 2 - House";
	link3.innerHTML = "next";
	link3.style.display = "inline-block";
}
function options2() {
	link1.setAttribute("onclick", "graf()");
	link2.setAttribute("onclick", "mijnbegin()");
	link3.setAttribute("onclick", "options3()");
	link1.innerHTML = "level 3 - Cemetery";
	link2.innerHTML = "level 4 - Mine";
	link3.innerHTML = "next";
}
function options3() {
	link1.setAttribute("onclick", "grondbegin()");
	link2.setAttribute("onclick", "tempelbegin()");
	link3.setAttribute("onclick", "options4()");
	link1.innerHTML = "level 5 - Underground";
	link2.innerHTML = "level 6 - Temple entrance";
	link3.innerHTML = "next";
}
function options4() {
	link1.setAttribute("onclick", "insidebegin()");
	link2.setAttribute("onclick", "treasurebegin()");
	link3.setAttribute("onclick", "options5()");
	link1.innerHTML = "level 7 - Temple inside";
	link2.innerHTML = "level 8 - Treasure room";
	link3.innerHTML = "next";
}
function options5() {
	link1.setAttribute("onclick", "escapebegin()");
	link2.setAttribute("onclick", "endbegin()");
	link3.setAttribute("onclick", "options1()");
	link1.innerHTML = "level 9 - Escape";
	link2.innerHTML = "level 10 - Your house";
	link3.innerHTML = "next";
}
function graf2() {
	title.innerHTML = "Cemetery - middle path";
	image.src = "img/begraafplaats middenpad.JPG";
	link1.setAttribute("onclick", "grafleft()");
	link2.setAttribute("onclick", "grafright()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go left";
	link2.innerHTML = "Go right";
	link2.style.display = "inline-block";
	link3.innerHTML = "";
	item1.src = "";
	text.innerHTML = "";
}
function grafleft() {
	title.innerHTML = "Cemetery - Left path";
	image.src = "img/begraafplaats zijpad links.jpg";
	link1.setAttribute("onclick", "graf2()");
	link2.setAttribute("onclick", "grafshed()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "Go to the cemeteries shed";
	link3.innerHTML = "";
	item1.src = "";
	text.innerHTML = "";
}
function grafright() {
	title.innerHTML = "Cemetery - Left path";
	image.src = "img/begraafplaats zijpad rechts.jpg";
	link1.setAttribute("onclick", "graf2()");
	link2.setAttribute("onclick", "grafgrave()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "Go to your grandfathers grave";
	link3.innerHTML = "";
	item1.src = "";
	text.innerHTML = "";
}
function grafgrave() {
	title.innerHTML = "Cemetery - Great-grandfathers grave";
	image.src = "img/begraafplaats graf.jpg";
	link1.setAttribute("onclick", "grafright()");
	link2.setAttribute("onclick", "grafinspect()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "Look at the grave";
	link3.innerHTML = "";
	item1.src = "";
	text.innerHTML = "My grandfathers grave. i'd wish i knew him.";
}
 function grafinspect() {
 	text.innerHTML = "there's a keyhole in the gravestone. can this grave open up?";
 }
 function grafshed() {
 	title.innerHTML = "Cemetery - shed";
 	image.src = "img/begraafplaats schuur.jpg";
 	link1.setAttribute("onclick", "grafleft()");
 	link2.setAttribute("onclick", "grafinside()");
 	link3.setAttribute("onclick", "()");
 	link1.innerHTML = "Go back";
 	link2.innerHTML = "Go in the shed";
 	link3.innerHTML = "";
 	item1.src = "";
 	text.innerHTML = "";
}
function grafinside() {
 title.innerHTML = "Cemetery - shed";
 image.src = "img/begraafplaats schuur binnenkant sleutel.jpg";
 link1.setAttribute("onclick", "grafshed()");
 link2.setAttribute("onclick", "grafinside2()");
 link3.setAttribute("onclick", "()");
 link1.innerHTML = "Go back";
 link2.innerHTML = "Grab the key";
 link3.innerHTML = "";
 item1.src = "";
 text.innerHTML = "there's the key. why are they always on the gound?";
}
function grafinside2() {
 title.innerHTML = "Cemetery - shed";
 image.src = "img/begraafplaats schuur binnenkant win.jpg";
 link1.setAttribute("onclick", "grafshed2()");
 link2.setAttribute("onclick", "()");
 link3.setAttribute("onclick", "()");
 link1.innerHTML = "Go back";
 link2.innerHTML = "";
 link2.style.display = "none";
 link3.innerHTML = "";
 item1.src = "img/oud sleutel.png";
 text.innerHTML = "What was that sound?";
}
function grafshed2() {
 title.innerHTML = "Cemetery - shed";
 image.src = "img/begraafplaats schuur.jpg";
 link1.setAttribute("onclick", "grafleft2()");
 link2.setAttribute("onclick", "grafinside2()");
 link3.setAttribute("onclick", "()");
 link1.innerHTML = "Go back";
 link2.innerHTML = "Go in the shed";
 link2.style.display = "inline-block";
 link3.innerHTML = "";
 text.innerHTML = "";
}
function grafleft2() {
	title.innerHTML = "Cemetery - Left path";
	image.src = "img/begraafplaats zijpad links.jpg";
	link1.setAttribute("onclick", "grafmid()");
	link2.setAttribute("onclick", "grafshed2()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "Go to the cemeteries shed";
	link3.innerHTML = "";
	text.innerHTML = "";
}
function grafmid() {
	title.innerHTML = "Cemetery - middle path";
	image.src = "img/begraafplaats middenpad.JPG";
	link1.setAttribute("onclick", "grafleft2()");
	link2.setAttribute("onclick", "grafrightfire()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go left";
	link2.innerHTML = "Go right";
	link3.innerHTML = "";
	text.innerHTML = "";
}
function grafrightfire() {
	title.innerHTML = "Cemetery - Left path";
	image.src = "img/begraafplaats zijpad rechts vuur.jpg";
	link1.setAttribute("onclick", "grafmid2()");
	link2.setAttribute("onclick", "grafcant()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "Go to your grandfathers grave";
	link2.style.display = "inline-block";
	link3.innerHTML = "";
	text.innerHTML = "Where did this fire come from";
}
function grafcant() {
	text.innerHTML = "The fire gets bigger and hotter as i walk a step forward. i need something to take it down.";
}
function grafmid2() {
	title.innerHTML = "Cemetery - middle path";
	image.src = "img/begraafplaats middenpad.JPG";
	link1.setAttribute("onclick", "grafleft3()");
	link2.setAttribute("onclick", "grafrightfire()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go left";
	link2.innerHTML = "Go right";
	link3.innerHTML = "";
	text.innerHTML = "";
}
function grafleft3() {
	title.innerHTML = "Cemetery - Left path";
	image.src = "img/begraafplaats zijpad links.jpg";
	link1.setAttribute("onclick", "grafmid2()");
	link2.setAttribute("onclick", "grafshed3()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "Go to the cemeteries shed";
	link3.innerHTML = "";
	text.innerHTML = "";
}
function grafshed3() {
 title.innerHTML = "Cemetery - shed";
 image.src = "img/begraafplaats schuur lose.jpg";
 link1.setAttribute("onclick", "grafleft2()");
 link2.setAttribute("onclick", "grafwin()");
 link3.setAttribute("onclick", "graflose()");
 link1.innerHTML = "Go back";
 link2.innerHTML = "Go in the shed";
 link3.innerHTML = "Grab the bucket";
 link3.style.display = "inline-block";
 text.innerHTML = "a bucket of water? maybe its usable.";
}
function graflose() {
 title.innerHTML = "Cemetery - shed";
 image.src = "img/begraafplaats schuur.jpg";
 link1.setAttribute("onclick", "graflose2()");
 link2.setAttribute("onclick", "()");
 link3.setAttribute("onclick", "()");
 link1.innerHTML = "Go back";
 link2.innerHTML = "";
 link2.style.display = "none";
 link3.innerHTML = "";
 link3.style.display = "none";
 item2.src = "img/emmer.png";
 text.innerHTML = "Nice, i can finally put out that fire.";
}
function graflose2() {
	title.innerHTML = "Cemetery - Left path";
	image.src = "img/begraafplaats zijpad links.jpg";
	link1.setAttribute("onclick", "graflose3()");
	link2.setAttribute("onclick", "graflose()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "Go to the cemeteries shed";
	link2.style.display = "inline-block";
	link3.innerHTML = "";
	text.innerHTML = "";
}
function graflose3() {
	title.innerHTML = "Cemetery - middle path";
	image.src = "img/begraafplaats middenpad.JPG";
	link1.setAttribute("onclick", "graflose2()");
	link2.setAttribute("onclick", "graflose4()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go left";
	link2.innerHTML = "Go right";
	link3.innerHTML = "";
	text.innerHTML = "";
}
function graflose4() {
	title.innerHTML = "Cemetery - Left path";
	image.src = "img/begraafplaats zijpad rechts vuur.jpg";
	link1.setAttribute("onclick", "gameover3()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "put down the fire";
	link2.innerHTML = "";
	link2.style.display = "none";
	link3.innerHTML = "";
	text.innerHTML = "lets put down this fire!";
}
function gameover3() {
	title.innerHTML = "";
	image.src = "img/game over.jpg";
	link1.setAttribute("onclick", "grafrightfire()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Start over";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "You put down the fire, but with little succes as the fire grabs you by the leg, growing on your skin and scorching your flesh.";
	item1.src = "";
	item2.src = "";
}
function grafwin() {
	title.innerHTML = "Cemetery - shed";
	image.src = "img/begraafplaats schuur binnenkant win.jpg";
	link1.setAttribute("onclick", "grafshed3()");
	link2.setAttribute("onclick", "grafwin2()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "Grab the firehose";
	link3.innerHTML = "";
	link3.style.display = "none";
	text.innerHTML = "A firehose! this looks like it can kill that fire.";
}
function grafwin2() {
	title.innerHTML = "Cemetery - shed";
	image.src = "img/begraafplaats schuur binnenkant.jpg";
	link1.setAttribute("onclick", "grafwin3()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "";
	link2.style.display = "none";
	link3.innerHTML = "";
	link3.style.display = "none";
	item2.src = "img/brandblusser.png";
	text.innerHTML = "";
}
function grafwin3() {
 title.innerHTML = "Cemetery - shed";
 image.src = "img/begraafplaats schuur.jpg";
 link1.setAttribute("onclick", "grafwin4()");
 link2.setAttribute("onclick", "grafwin2()");
 link3.setAttribute("onclick", "()");
 link1.innerHTML = "Go back";
 link2.innerHTML = "Go in the shed";
 link2.style.display = "inline-block";
 link3.innerHTML = "";
 link3.style.display = "none";
 text.innerHTML = "";
}
function grafwin4() {
	title.innerHTML = "Cemetery - Left path";
	image.src = "img/begraafplaats zijpad links.jpg";
	link1.setAttribute("onclick", "grafwin5()");
	link2.setAttribute("onclick", "grafwin3()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "Go to the cemeteries shed";
	link3.innerHTML = "";
	text.innerHTML = "";
}
function grafwin5() {
	title.innerHTML = "Cemetery - middle path";
	image.src = "img/begraafplaats middenpad.JPG";
	link1.setAttribute("onclick", "grafwin4()");
	link2.setAttribute("onclick", "grafwin6()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go left";
	link2.innerHTML = "Go right";
	link3.innerHTML = "";
	text.innerHTML = "";
}
function grafwin6() {
	title.innerHTML = "Cemetery - Left path";
	image.src = "img/begraafplaats zijpad rechts vuur.jpg";
	link1.setAttribute("onclick", "grafwin7()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "put down the fire";
	link2.innerHTML = "";
	link2.style.display = "none";
	link3.innerHTML = "";
	text.innerHTML = "lets put down this fire!";
}
function grafwin7() {
	title.innerHTML = "Cemetery - Left path";
	image.src = "img/begraafplaats zijpad rechts vuur.jpg";
	link1.setAttribute("onclick", "grafwin8()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Fight back";
	link2.innerHTML = "";
	link3.innerHTML = ""
	text.innerHTML = "its trying to grab my leg";
}
function grafwin8() {
	title.innerHTML = "Cemetery - Left path";
	image.src = "img/begraafplaats zijpad rechts.jpg";
	link1.setAttribute("onclick", "grafwin9()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go to your grandfathers grave";
	link2.innerHTML = "";
	link3.innerHTML = "";
	item2.src = "";
	text.innerHTML = "its gone? finally!";
}
function grafwin9() {
	title.innerHTML = "Cemetery - Great-grandfathers grave";
	image.src = "img/begraafplaats graf.jpg";
	link1.setAttribute("onclick", "grafwin10()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Open the Grave";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "now i can finally open the grave";
}
function grafwin10() {
	link1.setAttribute("onclick", "grafwin11()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Look at paper";
	link2.innerHTML = "";
	link3.innerHTML = "";
	item1.src = "";
	text.innerHTML = "there's another piece of paper. is this another hint?";
}
function grafwin11() {
	title.innerHTML = "";
	image.src = "img/schatkaart.jpg";
	link1.setAttribute("onclick", "levelcomplete3()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Complete level";
	link2.innerHTML = "";
	link3.innerHTML = "";
	item1.src = "";
	text.innerHTML = "this is the map to the treasure. he problably didn't wanted his map to get into the hands of others, so he buried the map with him.";
}
function levelcomplete3() {
	title.innerHTML = "";
	image.src = "img/level_complete.png";
	link1.setAttribute("onclick", "mijnbegin()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Next level";
	link2.innerHTML = "";
	link3.innerHTML = "";
	item1.src = "";
	text.innerHTML = "";
}
function mijnbegin() {
	title.innerHTML = "Mine - Entrance";
	image.src = "img/mijn dicht.jpg";
	link1.setAttribute("onclick", "mijninspect()");
	link2.setAttribute("onclick", "mijnside()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Inspect door";
	link2.innerHTML = "Inspect the side";
	link2.style.display = "inline-block";
	link3.innerHTML = "";
	link3.style.display = "none";
	text.innerHTML = "This is where the map lead me.";
	console.log(title);

}
function mijninspect() {
	text.innerHTML = "The door is locked tight and there's no keyhole or lever what-so-ever. maybe there's something i can use to open it. ";
}
function mijnside() {
	title.innerHTML = "Mine - Aside";
	image.src = "img/mijn zijkant bijl.jpg";
	link1.setAttribute("onclick", "mijnbegin()");
	link2.setAttribute("onclick", "mijnside2()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "Take axe";
	link3.innerHTML = "";
	text.innerHTML = "An axe! that will come handy.";
}
function mijnside2() {
	title.innerHTML = "Mine - Aside";
	image.src = "img/mijn zijkant.jpg";
	link1.setAttribute("onclick", "mijnbegin2()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "";
	link2.style.display = "none";
	link3.innerHTML = "";
	text.innerHTML = "";
	item1.src = "img/bijl.png";
}
function mijnbegin2() {
	title.innerHTML = "Mine - Entrance";
	image.src = "img/mijn dicht.jpg";
	link1.setAttribute("onclick", "mijncomplete()");
	link2.setAttribute("onclick", "mijnside2()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Break down door";
	link2.innerHTML = "Inspect the side";
	link2.style.display = "inline-block";
	link3.innerHTML = "";
	text.innerHTML = "i can hopefully break the door with my axe.";
}
function mijncomplete() {
	title.innerHTML = "Mine - Entrance";
	image.src = "img/mijn open.jpg";
	link1.setAttribute("onclick", "levelcomplete4()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go in mine - Complete level";
	link2.innerHTML = "";
	link2.style.display = "none";
	link3.innerHTML = "";
	text.innerHTML = "treasure, here i come!";
}
function levelcomplete4() {
	title.innerHTML = "";
	image.src = "img/level_complete.png";
	link1.setAttribute("onclick", "grondbegin()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Next level";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "";
	item1.src = "";
}
function grondbegin() {
	title.innerHTML = "underground - Mineshaft";
	image.src = "img/ondergrond begin.jpg";
	link1.setAttribute("onclick", "grondverder()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Walk further";
	link2.innerHTML = "";
	link2.style.display = "none";
	link3.innerHTML = "";
	link3.style.display = "none";
	item1.src = "img/bijl.png";
	text.innerHTML = "Jeez, its so foggy and scary here";
}
function grondverder() {
	title.innerHTML = "underground - Mineshaft";
	image.src = "img/ondergrond verder.png";
	link1.setAttribute("onclick", "grondsplit()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Walk further";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "";
}
function grondsplit() {
	title.innerHTML = "underground - Mineshaft";
	image.src = "img/ondergrond puzzle.JPG";
	link1.setAttribute("onclick", "grondgood()");
	link2.setAttribute("onclick", "grondlose()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Left path";
	link2.innerHTML = "Right path";
	link2.style.display = "inline-block";
	link3.innerHTML = "";
	text.innerHTML = "a splitting. The treasure must be thru one of these paths. i just need to find the right on.";
}
function grondgood() {
	title.innerHTML = "underground - Mineshaft";
	image.src = "img/ondergrond puzzle2.jpg";
	link1.setAttribute("onclick", "grondlose()");
	link2.setAttribute("onclick", "grondgood2()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Left path";
	link2.innerHTML = "Right path";
	link3.innerHTML = "";
	text.innerHTML = "";
}
function grondgood2() {
	title.innerHTML = "underground - Mineshaft";
	image.src = "img/ondergrond puzzle.JPG";
	link1.setAttribute("onclick", "grondlose()");
	link2.setAttribute("onclick", "grondgood3()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Left path";
	link2.innerHTML = "Right path";
	link3.innerHTML = "";
	text.innerHTML = "";
}
function grondgood3() {
	title.innerHTML = "underground - Mineshaft";
	image.src = "img/ondergrond puzzle2.jpg";
	link1.setAttribute("onclick", "grondgood4()");
	link2.setAttribute("onclick", "grondlose()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Left path";
	link2.innerHTML = "Right path";
	link3.innerHTML = "";
	text.innerHTML = "";
}
function grondgood4() {
	title.innerHTML = "underground - Mineshaft";
	image.src = "img/ondergrond puzzle.JPG";
	link1.setAttribute("onclick", "grondlose()");
	link2.setAttribute("onclick", "grondgood5()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Left path";
	link2.innerHTML = "Right path";
	link3.innerHTML = "";
	text.innerHTML = "";
}
function grondgood5() {
	title.innerHTML = "underground - Mineshaft";
	image.src = "img/ondergrond puzzle2.jpg";
	link1.setAttribute("onclick", "grondgood6()");
	link2.setAttribute("onclick", "grondlose()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Left path";
	link2.innerHTML = "Right path";
	link3.innerHTML = "";
	text.innerHTML = "";
}
function grondgood6() {
	title.innerHTML = "underground - Mineshaft";
	image.src = "img/ondergrond puzzle.JPG";
	link1.setAttribute("onclick", "grondwin()");
	link2.setAttribute("onclick", "grondlose()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Left path";
	link2.innerHTML = "Right path";
	link3.innerHTML = "";
	text.innerHTML = "";
}
function grondlose() {
	title.innerHTML = "underground - Mineshaft";
	image.src = "img/ondergrond lose.jpg";
	link1.setAttribute("onclick", "grondlose2()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Walk further";
	link2.innerHTML = "";
	link2.style.display = "none";
	link3.innerHTML = "";
	text.innerHTML = "this must be the right way";
}
function grondlose2() {
	title.innerHTML = "underground - Mineshaft";
	image.src = "img/ondergrond lose2.png";
	link1.setAttribute("onclick", "grondlose3()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Turn around";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "Danm! A dead end";
}
function grondlose3() {
	title.innerHTML = "UnD3r@R0uN|] - W!u3S4@Vt";
	image.src = "img/ondergrond lose3.png";
	link1.setAttribute("onclick", "gameover4()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "kmJUNHBYGTVFCDxzs";
	link2.innerHTML = "";
	link3.innerHTML = "";
	item1.src = "img/glitch.png";
	text.innerHTML = "WHAT THE FneityftfhtfthdtcctycuGgYjdkCygrdI7Rdtr5e546UtuU&%retf";
}
function gameover4() {
	title.innerHTML = "";
	image.src = "img/game over.jpg";
	link1.setAttribute("onclick", "grondbegin()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Start over";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "YTFRDRTRUTYRSryrdvyyCRsetrrtsrrETy754E363eW6767*7Ê75W#454I6tFG";
	item1.src = "";
	item2.src = "";
}
function grondwin() {
	title.innerHTML = "underground - Mineshaft";
	image.src = "img/ondergrond win.jpg";
	link1.setAttribute("onclick", "level_complete5()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Walk further - Complete level";
	link2.innerHTML = "";
	link2.style.display = "none";
	link3.innerHTML = "";
	text.innerHTML = "I think i see a light.";
}
function level_complete5() {
	title.innerHTML = "";
	image.src = "img/level_complete.png";
	link1.setAttribute("onclick", "tempelbegin()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Next level";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "";
	item1.src = "";
}
function tempelbegin() {
	title.innerHTML = "underground - Temple";
	image.src = "img/temple.jpg";
	link1.setAttribute("onclick", "tempelentrance()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Walk further";
	link2.innerHTML = "";
	link2.style.display = "none";
	link3.innerHTML = "";
	link3.style.display = "none";
	item1.src = "img/bijl.png";
	text.innerHTML = "Woah... This looks beautiful";
	console.log(title);

}
function tempelentrance() {
if (rope == 1 && rope2 == 1) {
	title.innerHTML = "underground - Temple entrance";
	image.src = "img/tempel deur closed.jpg";
	link1.setAttribute("onclick", "templeleft2()");
	link2.setAttribute("onclick", "templeright2()");
	link3.setAttribute("onclick", "templeopen()");
	link1.innerHTML = "Go left side";
	link2.innerHTML = "Go right side";
	link2.style.display = "inline-block";
	link3.innerHTML = "Inspect door";
	link3.style.display = "inline-block";
	text.innerHTML = "thats all off them";
} else if (rope == 1) {
	title.innerHTML = "underground - Temple entrance";
	image.src = "img/tempel deur closed.jpg";
	link1.setAttribute("onclick", "templeleft2()");
	link2.setAttribute("onclick", "templeright()");
	link3.setAttribute("onclick", "templeinspect()");
	link1.innerHTML = "Go left side";
	link2.innerHTML = "Go right side";
	link2.style.display = "inline-block";
	link3.innerHTML = "inspect door";
	link3.style.display = "inline-block";
	text.innerHTML = "";
} else if (rope2 == 1) {
	title.innerHTML = "underground - Temple entrance";
	image.src = "img/tempel deur closed.jpg";
	link1.setAttribute("onclick", "templeleft()");
	link2.setAttribute("onclick", "templeright2()");
	link3.setAttribute("onclick", "templeinspect()");
	link1.innerHTML = "Go left side";
	link2.innerHTML = "Go right side";
	link2.style.display = "inline-block";
	link3.innerHTML = "inspect door";
	link3.style.display = "inline-block";
	text.innerHTML = "";
} else {
	title.innerHTML = "underground - Temple entrance";
	image.src = "img/tempel deur closed.jpg";
	link1.setAttribute("onclick", "templeleft()");
	link2.setAttribute("onclick", "templeright()");
	link3.setAttribute("onclick", "templeinspect()");
	link1.innerHTML = "Go left side";
	link2.innerHTML = "Go right side";
	link2.style.display = "inline-block";
	link3.innerHTML = "inspect door";
	link3.style.display = "inline-block";
	text.innerHTML = "Looks like i can't get in the easy way.";
}
}
function templeinspect() {
	text.innerHTML = "Yep, shut tight. must be some way to open it";
}
function templeleft() {
	title.innerHTML = "underground - Temple left side";
	image.src = "img/tempel side left rope.jpg";
	link1.setAttribute("onclick", "tempelentrance()");
	link2.setAttribute("onclick", "templeleft2()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "Cut rope";
	link3.innerHTML = "";
	link3.style.display = "none";
	text.innerHTML = "";
}
function templeleft2() {
	image.src = "img/tempel side left.jpg";
	link1.setAttribute("onclick", "tempelentrance()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "";
	link2.style.display = "none";
	link3.innerHTML = "";
	text.innerHTML = "";
	if (rope == 1) {

	} else {
		rope++

	}
}
function templeright() {
	title.innerHTML = "underground - Temple left side";
	image.src = "img/tempel side right rope.jpg";
	link1.setAttribute("onclick", "tempelentrance()");
	link2.setAttribute("onclick", "templeright2()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "Cut rope";
	link3.innerHTML = "";
	link3.style.display = "none";
	text.innerHTML = "";
}
function templeright2() {
	image.src = "img/tempel side right.jpg";
	link1.setAttribute("onclick", "tempelentrance()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "";
	link2.style.display = "none";
	link3.innerHTML = "";
	text.innerHTML = "";
	if (rope2 == 1) {

	} else {
		rope2++
	}
}
function templeopen() {
	title.innerHTML = "underground - Temple entrance";
	image.src = "img/tempel deur open.jpg";
	link1.setAttribute("onclick", "level_complete6()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go in temple";
	link2.innerHTML = "";
	link2.style.display = "none";
	link3.innerHTML = "";
	link3.style.display = "none";
	text.innerHTML = "nice, its open.";
}
function level_complete6() {
	title.innerHTML = "";
	image.src = "img/level_complete.png";
	link1.setAttribute("onclick", "insidebegin()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Next level";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "";
	item1.src = "";
	rope--
	rope2--
}
function insidebegin() {
	title.innerHTML = "temple - inside";
	image.src = "img/inside begin puzzle.jpg";
	item1.src = "img/bijl.png";
	console.log(title);

if (piece == 1) {
	link1.setAttribute("onclick", "insideleft()");
	link2.setAttribute("onclick", "insideright()");
	link3.setAttribute("onclick", "insidewin()");
	link1.innerHTML = "Go left";
	link2.innerHTML = "Go right";
	link2.style.display = "inline-block";
	link3.innerHTML = "Put piece in hole";
	link3.style.display = "inline-block";
	text.innerHTML = "";
} else {
	link1.setAttribute("onclick", "insideleft()");
	link2.setAttribute("onclick", "insideright()");
	link3.setAttribute("onclick", "insideinspect()");
	link1.innerHTML = "Go left";
	link2.innerHTML = "Go right";
	link2.style.display = "inline-block";
	link3.innerHTML = "Inspect door";
	link3.style.display = "inline-block";
	text.innerHTML = "wow, its... really foggy and wet in here";
}
}
function insideinspect() {
	text.innerHTML = "there's a hole in the door. maybe its a puzzle and the piece is hidden somewhere.";
}
function insideleft() {
	title.innerHTML = "temple - inside left";
	image.src = "img/inside side left.jpg";
if (key == 1) {
	link1.setAttribute("onclick", "insidebegin()");
	link2.setAttribute("onclick", "insideleftroom2()");
	link3.setAttribute("onclick", "()");
} else {
	link1.setAttribute("onclick", "insidebegin()");
	link2.setAttribute("onclick", "insideleftroom()");
	link3.setAttribute("onclick", "()");
}
	link1.innerHTML = "Go back";
	link2.innerHTML = "Go to the left room";
	link3.innerHTML = "";
	link3.style.display = "none";
	text.innerHTML = "";
}
function insideleftroom() {
	title.innerHTML = "temple - left room";
	image.src = "img/inside room left key.jpg";
	link1.setAttribute("onclick", "insideleft()");
	link2.setAttribute("onclick", "insideleftroom2()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "Take key";
	link2.style.display = "inline-block";
	link3.innerHTML = "";
	text.innerHTML = "";
}
function insideleftroom2() {
	title.innerHTML = "temple - left room";
	image.src = "img/inside room left.jpg";
	link1.setAttribute("onclick", "insideleft()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "";
	link2.style.display = "none";
	link3.innerHTML = "";
	text.innerHTML = "";
	if (key == 1) {

	} else {
		key++
		item2.src = "img/oud sleutel.png"
	}
}
function insideright() {
	title.innerHTML = "temple - inside left";
	image.src = "img/inside side right.jpg";
	if (piece == 1) {
		link1.setAttribute("onclick", "insidebegin()");
		link2.setAttribute("onclick", "insiderightroom2()");
		link3.setAttribute("onclick", "()");
	} else {
		link1.setAttribute("onclick", "insidebegin()");
		link2.setAttribute("onclick", "insiderightroom()");
		link3.setAttribute("onclick", "()");
	}
	link1.innerHTML = "Go back";
	link2.innerHTML = "Go to the right room";
	link2.style.display = "inline-block";
	link3.innerHTML = "";
	link3.style.display = "none";
	text.innerHTML = "";
}
function insiderightroom() {
		title.innerHTML = "temple - right room";
		image.src = "img/inside room right chest.jpg";
if (key == 1) {
	link1.setAttribute("onclick", "insideright()");
	link2.setAttribute("onclick", "insiderightroom2()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "open chest";
	link3.innerHTML = "";
	text.innerHTML = "";
} else {
	link1.setAttribute("onclick", "insideright()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "";
	link2.style.display = "none";
	link3.innerHTML = "";
	text.innerHTML = "";
}
}
function insiderightroom2() {
	title.innerHTML = "temple - right room";
	image.src = "img/inside room right.jpg";
	link1.setAttribute("onclick", "insideright()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "";
	link2.style.display = "none";
	link3.innerHTML = "";
	text.innerHTML = "";
	item2.src = "img/piece.png";
	if (piece == 1) {

	} else {
		piece++
	}
}
function insidewin() {
	title.innerHTML = "temple - inside";
	image.src = "img/inside begin solve.jpg";
	link1.setAttribute("onclick", "insidewin2()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Open door";
	link2.innerHTML = "";
	link2.style.display = "none";
	link3.innerHTML = "";
	link3.style.display = "none";
	text.innerHTML = "There we go";
	item2.src = "";
}
function insidewin2() {
	title.innerHTML = "temple - inside";
	image.src = "img/inside begin.jpg";
	link1.setAttribute("onclick", "level_complete7()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go in treasure room";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "I think i already see it!";
}
function level_complete7() {
	title.innerHTML = "";
	image.src = "img/level_complete.png";
	link1.setAttribute("onclick", "treasurebegin()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Next level";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "";
	item1.src = "";
	key--
	piece--
}
function treasurebegin() {
	title.innerHTML = "temple - Treasure room";
	image.src = "img/treasure begin diamond.jpg";
	item1.src = "img/bijl.png";
	console.log(title);

if (bag == 1) {
	link1.setAttribute("onclick", "treasureroom2()");
	link2.setAttribute("onclick", "treasuregrab()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Walk further";
	link2.innerHTML = "Grab diamond";
	link2.style.display = "inline-block";
	link3.innerHTML = "";
	link3.style.display = "none";
	text.innerHTML = "I have to be carefull";
} else {
	link1.setAttribute("onclick", "treasureroom()");
	link2.setAttribute("onclick", "treasurewarning()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Walk further";
	link2.innerHTML = "Grab diamond";
	link2.style.display = "inline-block";
	link3.innerHTML = "";
	link3.style.display = "none";
	text.innerHTML = "wooaaww... look at all this money. I'M RICH. that diamond must be the real treasure.";
}
}
function treasureroom() {
	title.innerHTML = "temple - Treasure room";
	image.src = "img/treasure room 2 bag.jpg";
	link1.setAttribute("onclick", "treasurebegin()");
	link2.setAttribute("onclick", "treasureroom2()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "Grab bag";
	link3.innerHTML = "";
	text.innerHTML = "Money bags! think i can use one.";
}
function treasureroom2() {
	title.innerHTML = "temple - Treasure room";
	image.src = "img/treasure room 2.jpg";
	link1.setAttribute("onclick", "treasurebegin()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "";
	link2.style.display = "none";
	link3.innerHTML = "";
	text.innerHTML = "";
	item2.src = "img/bag.png"
	if (bag == 1) {

	} else {
		bag++
	}
}
function treasurewarning() {
	link1.setAttribute("onclick", "treasurebegin()");
	link2.setAttribute("onclick", "gameover5()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "I'll look further";
	link2.innerHTML = "Nah, just grab it.";
	link3.innerHTML = "";
	text.innerHTML = "doesn't look really save. should i?";
}
function gameover5() {
	title.innerHTML = "";
	image.src = "img/game over.jpg";
	link1.setAttribute("onclick", "treasurebegin()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Start over";
	link2.innerHTML = "";
	link2.style.display = "none";
	link3.innerHTML = "";
	text.innerHTML = "You grab the diamond, but with a risk. as you hear a click coming from the pillar, the floor begins to shake and the room begins to collapse, burying you and the treasure with you.";
	item1.src = "";
	item2.src = "";
}
function treasuregrab() {
	title.innerHTML = "temple - Treasure room";
	image.src = "img/treasure begin bag.jpg";
	link1.setAttribute("onclick", "level_complete8()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Complete level";
	link2.innerHTML = "";
	link2.style.display = "none";
	link3.innerHTML = "";
	text.innerHTML = "Got it!";
	item2.src = "img/diamond.png";
}
function level_complete8() {
	title.innerHTML = "";
	image.src = "img/level_complete.png";
	link1.setAttribute("onclick", "escapebegin()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Next level";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "";
	item1.src = "";
	item2.src = "";
	bag--
}
function escapebegin() {
	title.innerHTML = "temple - Treasure room";
	image.src = "img/treasure begin bag.jpg";
	item1.src = "img/bijl.png";
	link1.setAttribute("onclick", "escapeinside()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Leave treasure room";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "That was easy then i thought.";
	item1.src = "img/bijl.png";
	item2.src = "img/diamond.png";
	console.log(title);

}
function escapeinside() {
	title.innerHTML = "temple - inside";
	image.src = "img/inside begin.jpg";
	link1.setAttribute("onclick", "escapetemple()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Leave temple";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "Guess i have to leave now.";
}
function escapetemple() {
	title.innerHTML = "Underground - Temple entrance";
	image.src = "img/tempel deur open.jpg";
	link1.setAttribute("onclick", "escapetemple2()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Next";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "*Click*";
}
function escapetemple2() {
	link1.setAttribute("onclick", "escapetemple3()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Next";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "What was that?";
}
function escapetemple3() {
title.innerHTML = "";
image.src = "img/treasure begin bag.jpg";
link1.setAttribute("onclick", "escapetemple4()");
link2.setAttribute("onclick", "()");
link3.setAttribute("onclick", "()");
link1.innerHTML = "Next";
link2.innerHTML = "";
link3.innerHTML = "";
text.innerHTML = "";
}
function escapetemple4() {
title.innerHTML = "";
image.src = "img/treasure begin escape.jpg";
link1.setAttribute("onclick", "escapetemple5()");
link2.setAttribute("onclick", "()");
link3.setAttribute("onclick", "()");
link1.innerHTML = "Next";
link2.innerHTML = "";
link3.innerHTML = "";
text.innerHTML = "";
}
function escapetemple5() {
	title.innerHTML = "Underground - Temple entrance";
	image.src = "img/tempel deur open.jpg";
	link1.setAttribute("onclick", "escapetemple6()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "RUN";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "Oh no...";
}
function escapetemple6() {
	title.innerHTML = "Underground - Temple";
	image.src = "img/temple.jpg";
	link1.setAttribute("onclick", "escapeunderground()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "RUN";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "";
}
function escapeunderground() {
	title.innerHTML = "Underground - Mineshaft";
	image.src = "img/escape mineshaft.jpg";
	link1.setAttribute("onclick", "escapeunderground2()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "RUN";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "";
}
function escapeunderground2() {
	title.innerHTML = "Underground - Mineshaft";
	image.src = "img/escape mineshaft 2.jpg";
	link1.setAttribute("onclick", "escapeunderground3()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "RUN";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "";
}
function escapeunderground3() {
	title.innerHTML = "Underground - Mineshaft";
	image.src = "img/escape mineshaft.jpg";
	link1.setAttribute("onclick", "escapeunderground4()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "RUN";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "";
}
function escapeunderground4() {
	title.innerHTML = "Underground - Mineshaft";
	image.src = "img/escape mineshaft 2.jpg";
	link1.setAttribute("onclick", "escapeunderground5()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "RUN";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "";
}
function escapeunderground5() {
	title.innerHTML = "Underground - Mineshaft";
	image.src = "img/escape mineshaft.jpg";
	link1.setAttribute("onclick", "escapeunderground6()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "RUN";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "";
}
function escapeunderground6() {
	title.innerHTML = "Underground - Mineshaft";
	image.src = "img/escape mineshaft 2.jpg";
	link1.setAttribute("onclick", "escapemineshaft()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "RUN";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "";
}
function escapemineshaft() {
	title.innerHTML = "underground - Mineshaft";
	image.src = "img/ondergrond verder.png";
	link1.setAttribute("onclick", "escapemineshaft2()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "RUN";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "";
}
function escapemineshaft2() {
	title.innerHTML = "underground - Mineshaft";
	image.src = "img/ondergrond begin.jpg";
	link1.setAttribute("onclick", "escapeout()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "RUN";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "";
}
function escapeout() {
	title.innerHTML = "Mine - entrance";
	image.src = "img/mijn escape.jpg";
	link1.setAttribute("onclick", "level_complete9()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Complete level";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "Phew... that was close.";
}
function level_complete9() {
	title.innerHTML = "";
	image.src = "img/level_complete.png";
	link1.setAttribute("onclick", "endbegin()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Next level";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "";
	item1.src = "";
	item2.src = "";
}
function endbegin() {
	title.innerHTML = "";
	image.src = "img/Year.jpg";
	link1.setAttribute("onclick", "endwoon()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Next";
	link2.innerHTML = "";
	link2.style.display = "none";
	link3.innerHTML = "";
	link3.style.display = "none";
	text.innerHTML = "";
	item1.src = "";
	item2.src = "";
	console.log(title);

}
function endwoon() {
	title.innerHTML = "House - Living room";
	image.src = "img/end woonkamer.jpg";
	link1.setAttribute("onclick", "enddiamond()");
	link2.setAttribute("onclick", "endcellar()");
	link3.setAttribute("onclick", "endkitchen()");
	link1.innerHTML = "Turn around";
	link2.innerHTML = "To the cellar";
	link2.style.display = "inline-block";
	link3.innerHTML = "To the kitchen";
	link3.style.display = "inline-block";
	if (events == 1) {
		text.innerHTML = "";

	} else {
		text.innerHTML = "It good to be back home";

	}
}
function enddiamond() {

if (events == 1) {
	title.innerHTML = "House - Living room";
	image.src = "img/end woonkamer2.jpg";
	link1.setAttribute("onclick", "endwoon()");
	link2.setAttribute("onclick", "endcellar()");
	link3.setAttribute("onclick", "endkitchen()");
	link1.innerHTML = "Turn around";
	link2.innerHTML = "To the cellar";
	link3.innerHTML = "To the kitchen";
	text.innerHTML = "THE DIAMOND! Where did it go?";
} else {
	title.innerHTML = "House - Living room";
	image.src = "img/end woonkamer2 diamond.jpg";
	link1.setAttribute("onclick", "endwoon()");
	link2.setAttribute("onclick", "endcellar()");
	link3.setAttribute("onclick", "endkitchen()");
	link1.innerHTML = "Turn around";
	link2.innerHTML = "To the cellar";
	link3.innerHTML = "To the kitchen";
	text.innerHTML = "My diamond is still there, thats good.";
}
}
function endkitchen() {
	title.innerHTML = "House - Kitchen";
	image.src = "img/kitchen.jpg";
	link1.setAttribute("onclick", "endwoon()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "";
	link2.style.display = "none";
	link3.innerHTML = "";
	link3.style.display = "none";
	if (events == 1) {
		text.innerHTML = "";
	} else {
		events++
		text.innerHTML = "what was that sound";

	}
}
function endcellar() {

if (events == 1) {
	title.innerHTML = "House - Cellar";
	image.src = "img/cellar event.jpg";
	link1.setAttribute("onclick", "endwoon()");
	link2.setAttribute("onclick", "endinspect()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "Look at hole";
	link3.innerHTML = "";
	link3.style.display = "none";
	text.innerHTML = "A hole? where did that come from?";
} else {
	title.innerHTML = "House - Cellar";
	image.src = "img/cellar.jpg";
	link1.setAttribute("onclick", "endwoon()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go back";
	link2.innerHTML = "";
	link2.style.display = "none";
	link3.innerHTML = "";
	link3.style.display = "none";
	text.innerHTML = "No reason to be here.";
}
}
function endinspect() {
	link1.setAttribute("onclick", "endbreak()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "break open wall";
	link2.innerHTML = "";
	link2.style.display = "none";
	link3.innerHTML = "";
	text.innerHTML = "The stone in the wall feel loose. i think i can break them open.";
}
function endbreak() {
	image.src = "img/cellar event2.jpg";
	link1.setAttribute("onclick", "tobecontinued()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Go in the hole";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "Guess i have to take my diamond back.";
}
function tobecontinued() {
	title.innerHTML = "";
	image.src = "img/to be continued.jpg";
	link1.setAttribute("onclick", "optie2()");
	link2.setAttribute("onclick", "()");
	link3.setAttribute("onclick", "()");
	link1.innerHTML = "Back to main menu";
	link2.innerHTML = "";
	link3.innerHTML = "";
	text.innerHTML = "";
	item1.src = "";
	item2.src = "";
	events--
}
