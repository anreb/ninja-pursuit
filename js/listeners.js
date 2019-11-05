/**
* Game listeners
*/
document.onkeydown = (e) => {
	switch (e.keyCode) {
		case 13:
			startGame();
			break;
		case 37:
			player1.moveLeft();
			break;
		case 38:
			player1.jump();
			break;
		case 39:
			player1.moveRigth();
			break;
		case 40:
			break;
	}
	keys[e.keyCode] = true;
};

document.body.addEventListener('keydown', (e) => {
	if (e.keyCode === 13 && !gameStarted) {
		startGame();
	}
	//para movimiento
	keys[e.keyCode] = true;
});

document.body.addEventListener('keyup', (e) => {
	keys[e.keyCode] = false;
});
