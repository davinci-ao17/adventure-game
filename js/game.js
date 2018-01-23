// javascript library for simple game development
var HasKey = false;


// KK: Screen B Optie 2 & 3
function Level1() {
	console.log("Level1()");

	document.getElementById('level_title').innerHTML = 'De kooi lijkt in een kelder te staan, op de deur zit een oud slot en er staat een klein raampje open.';
	document.getElementById('level_image').src = 'img/b.jpg';

	document.getElementById('button1').innerHTML = 'Roep om hulp.';
	document.getElementById('button2').innerHTML = 'Inspecteer het slot.';

	button0.style.display = "none";

	button1.style.display = "inline-block";
	button1.style.top = "400px";
	button1.style.right = "70px";
	button1.style.bottom = "";
	button1.style.left = "";
	button1.setAttribute("onClick", "javascript:Level2();");

	button2.style.display = "inline-block";
	button2.setAttribute("onClick", "javascript:Level3();");
	button2.style.top = "275px";
	button2.style.right = "";
	button2.style.bottom = "";
	button2.style.left = "600px";

	life.style.display = "inline-block";
	lifehurt.style.display="none";
	over.style.display = "none";
	glasses.style.display="none";
}

// KK: Screen C Optie 4 & 5
function Level2() {
	console.log("Level2()");

	document.getElementById('level_title').innerHTML = 'Er lijkt niet te worden gereageerd, je inspecteer toch maar het slot en ziet dat het er kwetsbaar uit ziet, er zitten ook een paar spijlen los.';
	document.getElementById('level_image').src = 'img/cd.jpg';

	document.getElementById('button1').innerHTML = 'Breek de spijlen open en kruip uit de kooi.';
	document.getElementById('button2').innerHTML = 'Forceer het slot open.';

	button1.style.top = "350px";
	button1.style.right = "";
	button1.style.bottom = "";
	button1.style.left = "30px";
	button1.setAttribute("onClick", "javascript:Level4();");

	button2.setAttribute("onClick", "javascript:Level5();");
	button2.style.top = "260px";
	button2.style.right = "";
	button2.style.bottom = "";
	button2.style.left = "550px";

	life.style.display = "inline-block";
	lifehurt.style.display="none";
	over.style.display = "none";
}

// KK: Screen D Optie 6 & 7
function Level3() {
	console.log("Level3()");

	document.getElementById('level_title').innerHTML = 'Het slot ziet er kwetsbaar uit, er zitten ook een paar spijlen los.';
	document.getElementById('level_image').src = 'img/cd.jpg';

	document.getElementById('button1').innerHTML = 'Breek de spijlen open en kruip uit de kooi.';
	document.getElementById('button2').innerHTML = 'Forceer het slot open.';

	button1.style.top = "350px";
	button1.style.right = "";
	button1.style.bottom = "";
	button1.style.left = "30px";
	button1.setAttribute("onClick", "javascript:Level6();");

	button2.setAttribute("onClick", "javascript:Level7();");
	button2.style.top = "260px";
	button2.style.right = "";
	button2.style.bottom = "";
	button2.style.left = "550px";

	life.style.display = "inline-block";
	lifehurt.style.display="none";
	over.style.display = "none";
}

// KK: Screen E optie 8 & 9
function Level4() {
	console.log("Level4()");

	document.getElementById('level_title').innerHTML = 'Je probeert langs de spijlen te kruipen maar haalt je aan een van de spijlen open. De deur van de kelder vliegt open en een bewaker staat in de opening.';
	document.getElementById('level_image').src = 'img/ef.png';

	document.getElementById('button1').innerHTML = 'Gebruik een van de spijlen om de bewaker te slaan.';
	document.getElementById('button2').innerHTML = 'Sla de bewaker met je vuist.';

	button1.style.top = "400px";
	button1.style.right = "200px";
	button1.style.bottom = "";
	button1.style.left = "";
	button1.setAttribute("onClick", "javascript:Level8();");

	button2.setAttribute("onClick", "javascript:Level9();");
	button2.style.top = "400px";
	button2.style.right = "";
	button2.style.bottom = "";
	button2.style.left = "350px";

	life.style.display = "none";
	lifehurt.style.display="inline-block";
	over.style.display = "none";
}

// KK: Screen F optie 9 & 10
function Level5() {
	console.log("Level5()");

	document.getElementById('level_title').innerHTML = 'Je hebt het slot succesvol gesloopt en stapt uit de cel, op dat moment vliegt de deur van de kelder open en een bewaker staat in de opening.';
	document.getElementById('level_image').src = 'img/ef.png';

	document.getElementById('button1').innerHTML = 'Sla de bewaker met je vuist.';
	document.getElementById('button2').innerHTML = 'Breek alsnog een van de spijlen af om als wapen te kunnen gebruiken.';

	button1.style.top = "400px";
	button1.style.right = "";
	button1.style.bottom = "";
	button1.style.left = "350px";
	button1.setAttribute("onClick", "javascript:Level9();");

	button2.setAttribute("onClick", "javascript:Level10();");
	button2.style.top = "";
	button2.style.right = "";
	button2.style.bottom = "25px";
	button2.style.left = "600px";

	life.style.display = "inline-block";
	lifehurt.style.display="none";
	over.style.display = "none";
}

// KK: Screen G optie 11 & 12
function Level6() {
	console.log("Level5()");

	document.getElementById('level_title').innerHTML = 'Je probeert langs de spijlen te kruipen maar haalt je aan een van de spijlen open. Je loopt door de hal en ziet een bewaker slapend in zijn stoel.';
	document.getElementById('level_image').src = 'img/gh.jpg';

	document.getElementById('button1').innerHTML = 'Val de slapende bewaker van achter aan.';
	document.getElementById('button2').innerHTML = 'Sluip langs de bewaker richting de deur.';

	button1.style.top = "250px";
	button1.style.right = "50px";
	button1.style.bottom = "";
	button1.style.left = "";
	button1.setAttribute("onClick", "javascript:Level11();");

	button2.setAttribute("onClick", "javascript:Level12();");
	button2.style.top = "350px";
	button2.style.right = "";
	button2.style.bottom = "";
	button2.style.left = "30px";

	life.style.display = "none";
	lifehurt.style.display="inline-block";
	over.style.display = "none";
}

// KK: Screen H optie 13 & 14
function Level7() {
	console.log("Level6()");

	document.getElementById('level_title').innerHTML = 'Je hebt het slot succesvol gesloopt en stapt uit de cel, je loopt door de hal en ziet een bewaker slapend in zijn stoel.';
	document.getElementById('level_image').src = 'img/gh.jpg';

	document.getElementById('button1').innerHTML = 'Val de slapende bewaker van achter aan. ';
	document.getElementById('button2').innerHTML = 'Sluip langs de bewaker richting de deur.';

	button1.style.top = "250px";
	button1.style.right = "50px";
	button1.style.bottom = "";
	button1.style.left = "";
	button1.setAttribute("onClick", "javascript:Level13();");

	button2.setAttribute("onClick", "javascript:Level14();");
	button2.style.top = "350px";
	button2.style.right = "";
	button2.style.bottom = "";
	button2.style.left = "30px";

	life.style.display = "inline-block";
	lifehurt.style.display="none";
	over.style.display = "none";
}

// KK: Screen I optie 15 & 16
function Level8() {
	console.log("Level8()");

	document.getElementById('level_title').innerHTML = 'De bewaker valt bewusteloos op de grond.';
	document.getElementById('level_image').src = 'img/i.jpg';

	document.getElementById('button1').innerHTML = 'Dood de bewaker.';
	document.getElementById('button2').innerHTML = 'Loop naar de deur.';

	button1.style.top = "200px";
	button1.style.right = "";
	button1.style.bottom = "";
	button1.style.left = "375px";
	button1.setAttribute("onClick", "javascript:Level15();");

	button2.setAttribute("onClick", "javascript:Level16();");
	button2.style.top = "300px";
	button2.style.right = "75px";
	button2.style.bottom = "";
	button2.style.left = "";

	life.style.display = "none";
	lifehurt.style.display="inline-block";
	over.style.display = "none";
}

// KK: Screen J Af
function Level9() {
	console.log("Level9()");

	document.getElementById('level_title').innerHTML = 'Je valt de bewaker aan maar zonder wapen kon je hem niet overmeesteren. De bewaker pakt een mes en steek je neer.';
	document.getElementById('level_image').src = 'img/jkl.jpg';

	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "none";

	life.style.display = "none";
	lifehurt.style.display="none";
	over.style.display = "inline-block";
}

// KK: Screen K Af
function Level10() {
	console.log("Level10()");

	document.getElementById('level_title').innerHTML = 'Je probeert een van de spijlen af te breken maar voor dat je lukt heeft de bewaker je al ingehaald, je voelt van achter dat de bewaker een mes in je steekt, dan word alles zwart.';
	document.getElementById('level_image').src = 'img/jkl.jpg';

	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "none";

	life.style.display = "none";
	lifehurt.style.display="none";
	over.style.display = "inline-block";
}

// KK: Screen L Af
function Level11() {
	console.log("Level11()");

	document.getElementById('level_title').innerHTML = 'Je valt de bewaker aan maar voelt een steek in je zij, de spijlen hebben je te veel open gehaald. De bewaker overmeestert je, plots voel je een scherpe steek terwijl een voorwerp je zij doordringt. Dan word alles zwart voor je ogen.';
	document.getElementById('level_image').src = 'img/jkl.jpg';

	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "none";

	life.style.display = "none";
	lifehurt.style.display="none";
	over.style.display = "inline-block";
}

// KK: Screen M optie 17 & 18 & 32
function Level12() {
	console.log("Level12()");

 	document.getElementById('level_title').innerHTML = 'Zo stil mogelijk sluip je langs de bewaker. Je voelt aan het slot maar deze zit op slot, misschien heeft de bewaker een sleutel of ligt er een sleutel in de kelder.';
	document.getElementById('level_image').src = 'img/mnopq.jpg';

	document.getElementById('button1').innerHTML = 'Open het slot.';
	document.getElementById('button2').innerHTML = 'Kijk bij de cel of daar een sleutel is.';
	document.getElementById('button3').innerHTML = 'Ga terug naar de bewaker.';

	button1.style.display = "inline-block";
	button1.style.top = "240px";
	button1.style.right = "";
	button1.style.bottom = "";
	button1.style.left = "565px";

	button2.setAttribute("onClick", "javascript:Level26();");
	button2.style.top = "250px";
	button2.style.right = "75px";
	button2.style.bottom = "";
	button2.style.left = "";
	button2.style.display = "inline-block";

	button3.style.display = "inline-block";
	button3.setAttribute("onClick", "javascript:Level32();");
	button3.style.top = "250px";
	button3.style.right = "";
	button3.style.bottom = "";
	button3.style.left = "75px";

	button1.onclick = function(){
		if(HasKey){
			Level17();
		} else {
			alert('Je hebt de sleutels nodig om dit slot te kunnen openen.');
		}
	}
	key.style.display="none";

	life.style.display = "none";
	lifehurt.style.display="inline-block";
	over.style.display = "none";
}

// KK: Screen N optie 19 & 20 & 33
function Level13() {
	console.log("Level13()");

	document.getElementById('level_title').innerHTML = 'Met al je kracht val je de slapende bewaker aan, je slaat hem zo hard dat hij dood op de grond valt. Je voelt aan het slot van de deur maar deze zit op slot, misschien heeft de bewaker een sleutel of ligt er een sleutel in de kelder.';
	document.getElementById('level_image').src = 'img/mnopq.jpg';

	document.getElementById('button1').innerHTML = 'Open het slot.';
	document.getElementById('button2').innerHTML = 'Kijk bij de cel of daar een sleutel is.';
	document.getElementById('button3').innerHTML = 'Ga terug naar de bewaker.';

	button1.style.display = "inline-block";
	button1.style.top = "240px";
	button1.style.right = "";
	button1.style.bottom = "";
	button1.style.left = "565px";

	button2.setAttribute("onClick", "javascript:Level26();");
	button2.style.top = "250px";
	button2.style.right = "75px";
	button2.style.bottom = "";
	button2.style.left = "";
	button2.style.display = "inline-block";

	button3.style.display = "inline-block";
	button3.setAttribute("onClick", "javascript:Level33();");
	button3.style.top = "250px";
	button3.style.right = "";
	button3.style.bottom = "";
	button3.style.left = "75px";

	button1.onclick = function(){
		if(HasKey){
			Level19();
		} else {
			alert('Je hebt de sleutels nodig om dit slot te kunnen openen.');
		}
	}
	key.style.display="none";

	life.style.display = "inline-block";
	lifehurt.style.display="none";
	over.style.display = "none";
}

// KK: Screen O optie 21 & 22 & 34
function Level14() {
	console.log("Level14()");

	document.getElementById('level_title').innerHTML = 'Zo stil mogelijk sluip je langs de bewaker. Je voelt aan het slot maar deze zit op slot, misschien heeft de bewaker een sleutel of ligt er een sleutel in de kelder.';
	document.getElementById('level_image').src = 'img/mnopq.jpg';

	document.getElementById('button1').innerHTML = 'Open het slot.';
	document.getElementById('button2').innerHTML = 'Kijk bij de cel of daar een sleutel is.';
	document.getElementById('button3').innerHTML = 'Ga terug naar de bewaker.';

	button1.style.display = "inline-block";
	button1.style.top = "240px";
	button1.style.right = "";
	button1.style.bottom = "";
	button1.style.left = "565px";

	button2.setAttribute("onClick", "javascript:Level26();");
	button2.style.top = "250px";
	button2.style.right = "75px";
	button2.style.bottom = "";
	button2.style.left = "";
	button2.style.display = "inline-block";

	button3.style.display = "inline-block";
	button3.setAttribute("onClick", "javascript:Level34();");
	button3.style.top = "250px";
	button3.style.right = "";
	button3.style.bottom = "";
	button3.style.left = "75px";

	button1.onclick = function(){
		if(HasKey){
			Level21();
		} else {
			alert('Je hebt de sleutels nodig om dit slot te kunnen openen.');
		}
	}
	key.style.display="none";

	life.style.display = "inline-block";
	lifehurt.style.display="none";
	over.style.display = "none";
	}

// KK: Screen P optie 23 & 24 & 36
function Level15() {
	console.log("Level15()");

	document.getElementById('level_title').innerHTML = 'Je voelt aan het slot maar deze zit op slot, misschien heeft de bewaker een sleutel of ligt er een sleutel in de kelder.';
	document.getElementById('level_image').src = 'img/mnopq.jpg';

	document.getElementById('button1').innerHTML = 'Open het slot.';
	document.getElementById('button2').innerHTML = 'Kijk bij de cel of daar een sleutel is.';
	document.getElementById('button3').innerHTML = 'Ga terug naar de bewaker.';

	button1.style.display = "inline-block";
	button1.style.top = "240px";
	button1.style.right = "";
	button1.style.bottom = "";
	button1.style.left = "565px";

	button2.setAttribute("onClick", "javascript:Level26();");
	button2.style.top = "250px";
	button2.style.right = "75px";
	button2.style.bottom = "";
	button2.style.left = "";
	button2.style.display = "inline-block";

	button3.style.display = "inline-block";
	button3.setAttribute("onClick", "javascript:Level36();");
	button3.style.top = "250px";
	button3.style.right = "";
	button3.style.bottom = "";
	button3.style.left = "75px";

	button1.onclick = function(){
		if(HasKey){
			Level23();
		} else {
			alert('Je hebt de sleutels nodig om dit slot te kunnen openen.');
		}
	}
	key.style.display="none";

	life.style.display = "none";
	lifehurt.style.display="inline-block";
	over.style.display = "none";
	}

// KK: Screen Q optie 25 & 26 & 35
function Level16() {
	console.log("Level16()");

	document.getElementById('level_title').innerHTML = 'Je voelt aan het slot maar deze zit op slot, misschien heeft de bewaker een sleutel of ligt er een sleutel in de kelder.';
	document.getElementById('level_image').src = 'img/mnopq.jpg';

	document.getElementById('button1').innerHTML = 'Open het slot.';
	document.getElementById('button2').innerHTML = 'Kijk bij de cel of daar een sleutel is.';
	document.getElementById('button3').innerHTML = 'Ga terug naar de bewaker.';

	button1.style.display = "inline-block";
	button1.style.top = "240px";
	button1.style.right = "";
	button1.style.bottom = "";
	button1.style.left = "565px";

	button2.setAttribute("onClick", "javascript:Level26();");
	button2.style.top = "250px";
	button2.style.right = "75px";
	button2.style.bottom = "";
	button2.style.left = "";
	button2.style.display = "inline-block";

	button3.style.display = "inline-block";
	button3.setAttribute("onClick", "javascript:Level35();");
	button3.style.top = "250px";
	button3.style.right = "";
	button3.style.bottom = "";
	button3.style.left = "75px";

	button1.onclick = function(){
		if(HasKey){
			Level25();
		} else {
			alert('Je hebt de sleutels nodig om dit slot te kunnen openen.');
		}
	}
	key.style.display="none";

	life.style.display = "none";
	lifehurt.style.display="inline-block";
	over.style.display = "none";
	}

// KK: Screen R af
function Level17() {
	console.log("Level17()");

	document.getElementById('level_title').innerHTML = 'Met de sleutel die je in de cel vond open je de deur.  Je ziet dat er buiten politie auto’s staan die naar je toe rennen en een deken om je heen slaan, je bent eindelijk veilig.';
	document.getElementById('level_image').src = 'img/rvz.jpg';

	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "none";
	document.getElementById('button3').style.display = "none";

	key.style.display ="none";
	life.style.display = "none";
	lifehurt.style.display="inline-block";
	over.style.display = "none";
}

// KK: Screen S optie 27
function Level18() {
	console.log("Level18()");

	document.getElementById('level_title').innerHTML = 'Zoek de sleutel of ga terug naar de deur..';
	document.getElementById('level_image').src = 'img/suwyaa.jpg';

	document.getElementById('button1').innerHTML = 'Ga terug naar de deur.';
	document.getElementById('button2').style.display = "none";
	document.getElementById('button3').style.display = "none";

	button1.setAttribute("onClick", "javascript:Level27();");
	button1.style.top = "";
	button1.style.right = "";
	button1.style.bottom = "50px";
	button1.style.left = "550px";

	key.style.display ="inline-block";
	var opt3 = document.getElementById('key');

	opt3.onclick = function(){
		HasKey = true;
		key.style.display ="none";
	}
	if (HasKey == true) {
		key.style.display ="none";
}
	life.style.display = "none";
	lifehurt.style.display="inline-block";
	over.style.display = "none";
}

// KK: Screen T AF
function Level19() {
	console.log("Level19()");

	document.getElementById('level_title').innerHTML = 'Met de sleutel die je in de cel vond open je de deur. Je ziet dat er buiten politie auto’s staan. De politie agenten houden je onder schot omdat je onder het bloed van de bewaker zit, je probeert nog uit te leggen dat je ontvoerd was maar word toch neergeschoten door een van de agenten.';
	document.getElementById('level_image').src = 'img/tx.jpg';

	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "none";
	document.getElementById('button3').style.display = "none";

	life.style.display = "none";
	lifehurt.style.display="none";
	over.style.display = "inline-block";
}

// KK: Screen U optie 28
function Level20() {
	console.log("Level20()");

	document.getElementById('level_title').innerHTML = 'Zoek de sleutel of ga terug naar de deur..';
	document.getElementById('level_image').src = 'img/suwyaa.jpg';

	document.getElementById('button1').innerHTML = 'Ga terug naar de deur.';
	document.getElementById('button2').style.display = "none";
	document.getElementById('button3').style.display = "none";

	button1.setAttribute("onClick", "javascript:Level28();");
	button1.style.top = "";
	button1.style.right = "";
	button1.style.bottom = "50px";
	button1.style.left = "550px";

	key.style.display ="inline-block";
	var opt3 = document.getElementById('key');

	opt3.onclick = function(){
		HasKey = true;
		key.style.display ="none";
	}
	if (HasKey == true) {
		key.style.display ="none";
}
	life.style.display = "inline-block";
	lifehurt.style.display="none";
	over.style.display = "none";
}
// KK: Screen V optie AF
function Level21() {
	console.log("Level21()");

	document.getElementById('level_title').innerHTML = 'Met de sleutel open je de deur. Je ziet dat er buiten politie auto’s staan die naar je toe rennen en een deken om je heen slaan, je bent eindelijk veilig.';
	document.getElementById('level_image').src = 'img/rvz.jpg';

	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "none";
	document.getElementById('button3').style.display = "none";

	life.style.display = "inline-block";
	lifehurt.style.display="none";
	over.style.display = "none";
}
// KK: Screen W optie 29
function Level22() {
	console.log("Level22()");

	document.getElementById('level_title').innerHTML = 'Zoek de sleutel of ga terug naar de deur..';
	document.getElementById('level_image').src = 'img/suwyaa.jpg';

	document.getElementById('button1').innerHTML = 'Ga terug naar de deur.';
	document.getElementById('button2').style.display = "none";
	document.getElementById('button3').style.display = "none";

	button1.setAttribute("onClick", "javascript:Level29();");
	button1.style.top = "";
	button1.style.right = "";
	button1.style.bottom = "50px";
	button1.style.left = "550px";

	key.style.display ="inline-block";
	var opt3 = document.getElementById('key');

	opt3.onclick = function(){
		HasKey = true;
		key.style.display ="none";
	}
	if (HasKey == true) {
		key.style.display ="none";
}
	life.style.display = "inline-block";
	lifehurt.style.display="none";
	over.style.display = "none";
}
// KK: Screen X AF
function Level23() {
	console.log("Level23()");

	document.getElementById('level_title').innerHTML = 'Met de sleutel die je in de cel vond open je de deur. Je ziet dat er buiten politie auto’s staan. De politie agenten houden je onder schot omdat je onder het bloed van de bewaker zit, je probeert nog uit te leggen dat je ontvoerd was maar word toch neergeschoten door een van de agenten.';
	document.getElementById('level_image').src = 'img/tx.jpg';

	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "none";
	document.getElementById('button3').style.display = "none";

	life.style.display = "none";
	lifehurt.style.display="none";
	over.style.display = "inline-block";
}
// KK: Screen Y optie 30
function Level24() {
	console.log("Level24()");

	document.getElementById('level_title').innerHTML = 'Zoek de sleutel of ga terug naar de deur..';
	document.getElementById('level_image').src = 'img/suwyaa.jpg';

	document.getElementById('button1').innerHTML = 'Ga terug naar de deur.';
	document.getElementById('button2').style.display = "none";
	document.getElementById('button3').style.display = "none";

	button1.setAttribute("onClick", "javascript:Level30();");
	button1.style.top = "";
	button1.style.right = "";
	button1.style.bottom = "50px";
	button1.style.left = "550px";

	key.style.display ="inline-block";
	var opt3 = document.getElementById('key');

	opt3.onclick = function(){
		HasKey = true;
		key.style.display ="none";
	}
	if (HasKey == true) {
		key.style.display ="none";
}
	life.style.display = "none";
	lifehurt.style.display="inline-block";
	over.style.display = "none";
}
// KK: Screen Z AF
function Level25() {
	console.log("Level25()");

	document.getElementById('level_title').innerHTML = 'Met de sleutel die je in de cel vond open je de deur.  Je ziet dat er buiten politie auto’s staan die naar je toe rennen en een deken om je heen slaan, je bent eindelijk veilig.';
	document.getElementById('level_image').src = 'img/rvz.jpg';

	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "none";
	document.getElementById('button3').style.display = "none";

	life.style.display = "none";
	lifehurt.style.display="inline-block";
	over.style.display = "none";
}

// KK: Screen AA optie 31
function Level26() {
	console.log("Level26()");

	document.getElementById('level_title').innerHTML = 'Zoek de sleutel of ga terug naar de deur..';
	document.getElementById('level_image').src = 'img/suwyaa.jpg';

	document.getElementById('button1').innerHTML = 'Ga terug naar de deur.';
	document.getElementById('button2').style.display = "none";
	document.getElementById('button3').style.display = "none";

	button1.setAttribute("onClick", "javascript:Level31();");
	button1.style.top = "";
	button1.style.right = "";
	button1.style.bottom = "50px";
	button1.style.left = "550px";

	key.style.display ="inline-block";
	var opt3 = document.getElementById('key');

	opt3.onclick = function(){
		HasKey = true;
		key.style.display ="none";
	}
	if (HasKey == true) {
		key.style.display ="none";
}
	life.style.display = "inline-block";
	lifehurt.style.display="none";
	over.style.display = "none";
}
// KK: Terug naar M
function Level27() {
Level12();
}
// KK: Terug naar N
function Level28() {
Level13();
}
// KK: Terug naar O
function Level29() {
Level14();
}
// KK: Terug naar P
function Level30() {
Level15();
}
// KK: Terug naar Q
function Level31() {
	Level16();
}
// KK: Screen AB optie 27
function Level32() {
	console.log("Level32()");

	document.getElementById('level_title').innerHTML = 'Zoek de sleutel of ga terug naar de deur..';
	document.getElementById('level_image').src = 'img/gh.jpg';

	document.getElementById('button1').innerHTML = 'Ga terug naar de deur.';
	document.getElementById('button2').style.display = "none";
	document.getElementById('button3').style.display = "none";

	button1.setAttribute("onClick", "javascript:Level27();");
	button1.style.top = "";
	button1.style.right = "";
	button1.style.bottom = "50px";
	button1.style.left = "550px";

	life.style.display = "none";
	lifehurt.style.display="inline-block";
	over.style.display = "none";
}

// KK: Screen AC optie 28
	function Level33() {
	console.log("Level33()");

	document.getElementById('level_title').innerHTML = 'Zoek de sleutel of ga terug naar de deur..';
	document.getElementById('level_image').src = 'img/gh.jpg';

	document.getElementById('button1').innerHTML = 'Ga terug naar de deur.';
	document.getElementById('button2').style.display = "none";
	document.getElementById('button3').style.display = "none";

	button1.setAttribute("onClick", "javascript:Level28();");
	button1.style.top = "";
	button1.style.right = "";
	button1.style.bottom = "50px";
	button1.style.left = "550px";

	life.style.display = "inline-block";
	lifehurt.style.display="none";
	over.style.display = "none";
}

// KK: Screen AD optie 13 & 29
	function Level34() {
	console.log("Level34()");

	document.getElementById('level_title').innerHTML = 'Zoek de sleutel of ga terug naar de deur..';
	document.getElementById('level_image').src = 'img/gh.jpg';

	document.getElementById('button1').innerHTML = 'Val de slapende bewaker van achter aan.';
	document.getElementById('button2').style.display = "Ga terug naar de deur.";
	document.getElementById('button3').style.display = "none";

	button1.style.top = "250px";
	button1.style.right = "";
	button1.style.bottom = "";
	button1.style.left = "50px";
	button1.setAttribute("onClick", "javascript:Level13();");

	button2.setAttribute("onClick", "javascript:Level29();");
	button2.style.top = "";
	button2.style.right = "";
	button2.style.bottom = "50px";
	button2.style.left = "550px";

	life.style.display = "inline-block";
	lifehurt.style.display="none";
	over.style.display = "none";
}

// KK: Screen AE optie 15 & 29
	function Level35() {
	console.log("Level35()");

	document.getElementById('level_title').innerHTML = 'Zoek de sleutel of ga terug naar de deur..';
	document.getElementById('level_image').src = 'img/i.jpg';

	document.getElementById('button1').innerHTML = 'Dood de bewaker.';
	document.getElementById('button2').innerHTML = 'Ga terug naar de deur.';
	document.getElementById('button3').style.display = "none";

	button1.style.top = "200px";
	button1.style.right = "";
	button1.style.bottom = "";
	button1.style.left = "375px";
	button1.setAttribute("onClick", "javascript:Level15();");

	button2.setAttribute("onClick", "javascript:Level29();");
	button2.style.top = "";
	button2.style.right = "";
	button2.style.bottom = "50px";
	button2.style.left = "550px";

	life.style.display = "inline-block";
	lifehurt.style.display="none";
	over.style.display = "none";
}

	// KK: Screen AF optie 30
	function Level36() {
	console.log("Level36()");

	document.getElementById('level_title').innerHTML = 'Zoek de sleutel of ga terug naar de deur..';
	document.getElementById('level_image').src = 'img/i.jpg';

	document.getElementById('button1').innerHTML = 'Ga terug naar de deur.';
	document.getElementById('button2').style.display = "none";
	document.getElementById('button3').style.display = "none";

	button1.style.top = "";
	button1.style.right = "";
	button1.style.bottom = "50px";
	button1.style.left = "550px";
	button1.setAttribute("onClick", "javascript:Level30();");

	life.style.display = "inline-block";
	lifehurt.style.display="none";
	over.style.display = "none";
}
