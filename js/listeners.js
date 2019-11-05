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
	}
	keys[e.keyCode] = true;
});

document.body.addEventListener('keyup', (e) => {
	keys[e.keyCode] = false;
});
