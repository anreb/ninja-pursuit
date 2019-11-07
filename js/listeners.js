/**
* Game listeners
*/
document.body.addEventListener('keydown', (e) => {
	switch (e.keyCode) {
		case 13:
			if (!gameStarted) {
				startGame();
			}
			break;
		case 82:
			console.log('Pressing r', winner);
			if (winner) {
				restartGame();
			}
	}
	keys[e.keyCode] = true;
});

document.body.addEventListener('keyup', (e) => {
	keys[e.keyCode] = false;
});
