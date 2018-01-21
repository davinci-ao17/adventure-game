var title = document.getElementById("title");
var intro = document.getElementById("intro");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");

//items
var crowbar = document.getElementById("crowbar"); 
var key = document.getElementById("key");

function startGame() {
	intro.style.display = "inline";
	building();
}

function building() {
	img = new Image;
	img.src = "./img/building.jpg";
	var building = document.getElementsByTagName('body')[0];
	building.setAttribute('style', 'background:url(./img/building.jpg) no-repeat !important');
	building.style.backgroundSize= "cover";
	title.innerHTML = "Onbekend gebouw";
	intro.innerHTML = "Je word wakker in een wereld waar de robots zijn losgeslagen, je hoort overal knallen wat doe je?";
	optie1.innerHTML = "Je loopt naar buiten om te kijken wat er aan de hand is";
	optie1.setAttribute('onclick','outside()');
	optie2.innerHTML = "Je blijft binnen en blijft schuilen";
	optie2.setAttribute('onclick', "intro.innerHTML = 'Het gebouw wordt opgeblazen en je word bedekt onder puin.. dit heb je niet overleeft.', gameOver()");
	console.log(title.innerHTML);
}

function outside() {
	var outside = document.getElementsByTagName('body')[0];
	outside.setAttribute('style', 'background:url(./img/outside.jpg) no-repeat !important');
	outside.style.backgroundSize= "cover";
	title.innerHTML = "buiten";
	intro.innerHTML = "Vervolgens kom je je vrienden tegen en zien jullie de grote terminator";
	optie1.innerHTML = "Zoek een veilige plek en bedenk een plan om de terminator neer te halen";
	optie1.setAttribute('onclick','building2()');
	optie2.innerHTML = "Ga met zijn alle naar een schuilplek om daar te schuilen.";
	optie2.setAttribute('onclick', "intro.innerHTML = 'Omdat je te lang hebt geschuild heeft de terminator iedereen vermoord en blaast hij alle gebouwen op inclusief het gebouw waar jullie in zaten.', gameOver()");
	console.log(title.innerHTML);
}

function building2() {
	var building2 = document.getElementsByTagName('body')[0];
	building2.setAttribute('style', 'background:url(./img/building2.jpg) no-repeat !important');
	building2.style.backgroundSize= "cover";
	title.innerHTML = "Verlaten gebouw";
	intro.innerHTML = "De Terminator is rond aan het schieten en je ziet het glas breken.";
	optie1.innerHTML = "kijk voorzichtig om de hoek naar buiten en zoek naar een uitweg";
	optie1.setAttribute('onclick', 'sheets()');
	optie2.innerHTML = "Je doet een poging om de Terminator af te leiden zodat je vrienden weg kunnen uit het gebouw";
	optie2.setAttribute('onclick', "intro.innerHTML = 'Je wordt neergeschoten en overleeft het niet.', gameOver()"); 
 }

function sheets() {
	var sheets = document.getElementsByTagName('body')[0];
	sheets.setAttribute('style', 'background:url(./img/sheets.jpg) no-repeat !important');
	sheets.style.backgroundSize= "cover";
	title.innerHTML = "buiten";
	intro.innerHTML = "Je kijkt om je heen en ziet iets met een laken eroverheen je haalt het laken eraf en ziet dat er een auto staat. Je maakt de auto open, maar die zit nog op slot. Je ziet een breekijzer maar geen sleutels. Wat ga je doen?";
	optie1.innerHTML = "Zoek naar de sleutels";
	optie1.setAttribute('onclick', "intro.innerHTML = 'Het zoeken duurde te lang en het gebouw is opgeblazen.', gameOver()");
	optie2.innerHTML = "Pak het breekijzer op en maak het busje open";
	optie2.setAttribute('onclick', 'car()');
	console.log(title.innerHTML);
}

function car() {
	var car = document.getElementsByTagName('body')[0];
	car.setAttribute('style', 'background:url(./img/car.jpg) no-repeat !important');
	car.style.backgroundSize= "cover";
	title.innerHTML = "Op de weg";
	intro.innerHTML = "Je bent met de auto weggegaan en je bent samen ontsnapt aan de grote terminator, maar als je in je spiegels kijkt zie je 3 motor terminators achter je aan rijden die beginnen te schieten";
	optie1.innerHTML = "Blijf doorrijden in de hoop dat ze weg gaan";
	optie1.setAttribute('onclick', "intro.innerHTML = 'Je hebt niet genoeg benzine om door te rijden en ze gaat niet weg.', gameOver()");
	optie2.innerHTML = "Kijk of er iets ligt wat je kan gebruiken om ze te stoppen";
	optie2.setAttribute('onclick', 'road()');
	console.log(title.innerHTML);
}

function road() {
	var road = document.getElementsByTagName('body')[0];
	road.setAttribute('style', 'background:url(./img/road.jpg) no-repeat !important');
	road.style.backgroundSize= "cover";
	title.innerHTML = "in het busje";
	intro.innerHTML = "Je vraagt of er iets achterin ligt en je vrienden zeggen dat er 2 tonnen met olie zijn, wat ga je ermee doen?";
	optie1.innerHTML = "maak de tonnen open en giet de olie achter je";
	optie1.setAttribute('onclick', 'helicopter()');
	optie2.innerHTML = "duw de volledige ton uit de auto";
	optie2.setAttribute('onclick', "intro.innerHTML = 'Het werkte niet en je hebt niet genoeg benzine om nog weg te komen', gameOver()");
	console.log(title.innerHTML);
}

function helicopter() {
	var helicopter = document.getElementsByTagName('body')[0];
	helicopter.setAttribute('style', 'background:url(./img/helicopter.jpg) no-repeat !important');
	helicopter.style.backgroundSize= "cover";
	title.innerHTML = "bij een helikopter";
	intro.innerHTML = "nadat je de terminators hebt afgeschud kom je een oorlogs helikopter tegen. Je loopt met je vrienden richting de helikopter en ziet een dood lichaam. Naast het lichaam liggen de sleutels en een wapen. Wat doe je ermee?";
	optie1.innerHTML = "pak de sleutels op";
	optie1.setAttribute('onclick','pickupKeys()');
	optie2.innerHTML = "stap in en stijg op";
	optie2.setAttribute('onclick','helicopter2()')
	console.log(title.innerHTML);
}

var keys = false;
function pickupKeys(){
	keys = true;
	optie1.style.display = "none"
}

function helicopter2() {
	var helicopter2 = document.getElementsByTagName('body')[0];
	helicopter2.setAttribute('style', 'background:url(./img/helicopter2.jpg) no-repeat !important');
	helicopter2.style.backgroundSize= "cover";
	title.innerHTML = "In de helikopter";
	intro.innerHTML = "Terwijl je aan het opstijgen bent hoor je een glas breken en je vrienden roepen ineens dat er een terminator op de helikopter aan het schieten is, maar omdat het een oorlogs helikopter is heb je het geluk dat er een machine geweer is.";
	optie1.innerHTML = "gebruik het machinegeweer om een einde aan de terminator te maken";
	optie1.setAttribute('onclick','air()')
	console.log(title.innerHTML);
}

function air() {
	var air = document.getElementsByTagName('body')[0];
	air.setAttribute('style', 'background:url(./img/air.jpg) no-repeat !important');
	air.style.backgroundSize= "cover";
	title.innerHTML = "Achter het stuur";
	intro.innerHTML = "Nu je veilig bent onstnapt aan de Terminator vlieg je verder, maar nu zie je iets om hulp roepen. wat ga je doen?";
	optie1.innerHTML = "Ga helpen";
	optie1.setAttribute('onclick', "intro.innerHTML = Het bleek een terminator te zijn en nu ben je in de val gelokt', gameOver()");
	optie2.innerHTML = "Vlieg verder";
	optie2.setAttribute('onclick',)
}



function gameOver() {
	var gameOver = document.getElementsByTagName('body')[0];
	gameOver.setAttribute('style', 'background:url(./img/gameOver.jpg) no-repeat !important');
	gameOver.style.backgroundSize= "cover";
	title.innerHTML = "Game over";
	optie1.innerHTML = "Start overnieuw";
	optie1.setAttribute('onclick', 'start()');
	optie2.style = 'list-style-type: none;'
	console.log(title.innerHTML);
}






