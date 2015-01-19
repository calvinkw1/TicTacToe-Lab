window.onload = function() {

var gameBoxes = document.getElementsByClassName("square");
var num0 = document.getElementById("num0");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var num4 = document.getElementById("num4");
var num5 = document.getElementById("num5");
var num6 = document.getElementById("num6");
var num7 = document.getElementById("num7");
var num8 = document.getElementById("num8");
var moveCount = document.getElementById("moveCount");
var announcePlayer1 = "Waiting for Player 1 (X) to make a move.";
var announcePlayer2 = "Waiting for Player 2 (O) to make a move.";
var gameOverAnnounce = "Game Over! Press 'New Game' below to play again!";
var playerCombo = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
var turnCount = 0;
var gameOver = false;

boxClick(gameBoxes);
clickNewGame();


function playerAnnounce() {
	var turn = document.getElementById("player");
	var moveCount = document.getElementById("moveCount");
	if (turnCount % 2 === 0 && gameOver === false) {
		moveCount.innerHTML = announcePlayer1;
		moveCount.style.color = "red";
	} else if (turnCount % 2 === 1 && gameOver === false) {
		moveCount.innerHTML = announcePlayer2;
		moveCount.style.color = "blue";
	} else if (gameOver === true) {
		moveCount.innerHTML = gameOverAnnounce;
	} else {
		moveCount.innerHTML = announcePlayer1;
	}
}

function boxClick(clicks) {
	for (var i = 0; i < clicks.length; i++) {
		clicks[i].addEventListener('click', addMarker);
		clicks[i].addEventListener('mouseover', boxOver);
		clicks[i].addEventListener('mouseout', boxOut);
	}
}

function boxOver() {
		this.style.backgroundColor = "white";
		this.style.opacity = 0.6;
}

function boxOut() {
		this.style.backgroundColor = "";
		this.style.opacity = 1;
}


function addMarker() {
	if (this.innerHTML === "" && gameOver === false) {
		if (turnCount % 2 === 0) {
			this.innerHTML = "X";
			this.style.color = "red";
			storePlayerMoves(this.getAttribute("id"));
		} else {
			this.innerHTML = "O";
			this.style.color = "blue";
			storePlayerMoves(this.getAttribute("id"));
		}
		console.log(playerCombo);
		turnCount++;
		checkWin();
		playerAnnounce();
	}
}

function storePlayerMoves(attr) {
	if (attr === "num0") {
		if (turnCount % 2 === 0) {
			playerCombo[0] = "X";
		} else {
			playerCombo[0] = "O";
		}
	} if (attr === "num1") {
		if (turnCount % 2 === 0) {
			playerCombo[1] = "X";
		} else {
			playerCombo[1] = "O";
		}
	} if (attr === "num2") {
		if (turnCount % 2 === 0) {
			playerCombo[2] = "X";
		} else {
			playerCombo[2] = "O";
		}
	} if (attr === "num3") {
		if (turnCount % 2 === 0) {
			playerCombo[3] = "X";
		} else {
			playerCombo[3] = "O";
		}
	} if (attr === "num4") {
		if (turnCount % 2 === 0) {
			playerCombo[4] = "X";
		} else {
			playerCombo[4] = "O";
		}
	} if (attr === "num5") {
		if (turnCount % 2 === 0) {
			playerCombo[5] = "X";
		} else {
			playerCombo[5] = "O";
		}
	} if (attr === "num6") {
		if (turnCount % 2 === 0) {
			playerCombo[6] = "X";
		} else {
			playerCombo[6] = "O";
		}
	} if (attr === "num7") {
		if (turnCount % 2 === 0) {
			playerCombo[7] = "X";
		} else {
			playerCombo[7] = "O";
		}
	} if (attr === "num8") {
		if (turnCount % 2 === 0) {
			playerCombo[8] = "X";
		} else {
			playerCombo[8] = "O";
		}
	}
}

function checkWin() {
	if (playerCombo[0] === playerCombo[1] && playerCombo[0] === playerCombo[2]) {         // horizontal row 1
		alert("Winner!");
		gameOver = true;
	} else if (playerCombo[3] === playerCombo[4] && playerCombo[3] === playerCombo[5]) {  // horizontal row 2
		alert("Winner!");
		gameOver = true;
	} else if (playerCombo[6] === playerCombo[7] && playerCombo[6] === playerCombo[8]) {  // horizontal row 3
		alert("Winner");
		gameOver = true;
	} else if (playerCombo[0] === playerCombo[3] && playerCombo[0] === playerCombo[6]) {  // vertical col 1
		alert("Winner");
		gameOver = true;
	} else if (playerCombo[1] === playerCombo[4] && playerCombo[1] === playerCombo[7]) {  // vertical col 2
		alert("Winner");
		gameOver = true;
	} else if (playerCombo[2] === playerCombo[5] && playerCombo[2] === playerCombo[8]) {  // vertical col 3
		alert("Winner");
		gameOver = true;
	} else if (playerCombo[0] === playerCombo[4] && playerCombo[0] === playerCombo[8]) {  // diagonal left - right
		alert("Winner");
		gameOver = true;
	} else if (playerCombo[2] === playerCombo[4] && playerCombo[2] === playerCombo[6]) {  // diagonal right - left
		alert("Winner");
		gameOver = true;
	} else {
		if (turnCount === 9) {
		alert("Tie!");
		gameOver = true;
		}
	}
}

function clickNewGame() {
	document.getElementById("reset").addEventListener("click", newGame);
}

function newGame() {
	for (var i = 0; i < gameBoxes.length; i++) {
		gameBoxes[i].innerHTML = "";
	}
	gameOver = false;
	turnCount = 0;
	playerCombo = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
	playerAnnounce();
	console.log(playerCombo);
}

};