let nbSecondes = 30;
let solution = 0;
let gameStarted = null;
let start = document.getElementById("start");
let formBet = document.getElementById("bet");
let number = document.getElementById("number");

start.addEventListener("click", function() {
	solution = Math.floor((Math.random() * 100) + 1);

	formBet.style.visibility = "visible";

	let minuteur = setInterval(function() {
		if (nbSecondes === 0) {
			clearInterval(minuteur);
			document.getElementById("reponse").appendChild(document.createTextNode("Perdu ! La solution était " + solution));
			formBet.style.visibility = "hidden";
		} else {
			nbSecondes--;
			document.getElementById("nbSecondes").textContent = nbSecondes;
		}
	}, 1000);
});

formBet.addEventListener("submit", function(e) {
	gameStarted = formBet.elements.number.value;

	if (gameStarted == solution) {
		document.getElementById("reponse").appendChild(document.createTextNode("Gagné !"));
		clearInterval(minuteur);
	} else if (gameStarted < solution) {
		document.getElementById("reponse").appendChild(document.createTextNode(gameStarted + " ? C'est plus ! "));
	} else {
		document.getElementById("reponse").appendChild(document.createTextNode(gameStarted + " ? C'est moins ! "));
	}

	console.log(solution);
	e.preventDefault();
});