/**
* Game listeners
*/
document.body.addEventListener('keydown', (e) => {
	switch (e.keyCode) {
		case 13:
			if (!gameStarted) {
				startGame();
			}
			//para movimiento
			keys[e.keyCode] = true;
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
});

document.body.addEventListener('keyup', (e) => {
	keys[e.keyCode] = false;
});
