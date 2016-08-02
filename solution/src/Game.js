// Here is where your program code will eventually go.
// Make sure you are writing in GameSpec.js before you work on this file.

function moveRight(){
	player.x += 1;
	checkWin();
}

function moveLeft(){
	player.x -= 1;
	checkWin();
}

function moveDown(){
	player.y += 1;
	checkWin();
}

function moveUp(){
	player.y -= 1;
	checkWin();
}

function checkWin(){
	if (player.x == goal.x && player.y == goal.y){
		renderWin();
	}
}
