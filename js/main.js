/**
* Game functions
*/
function update() {
	console.log(player1);
	console.log(frames);
	frames++;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawPlatforms();
	board.draw();
	player1.draw();
	player2.draw();
	player1.moveLeft();
	player2.moveLeft();
	player1.moveRigth();
	player2.moveRigth();
	player1.jump();
	player2.jump();
	timer();

	checkCollition();
	printWinner();

	/** 
     * Check collitions for player 1
    */
	player1.grounded = false;
	platforms.map((platform) => {
		const direction = collisionCheck(player1, platform);
		if (direction == 'left' || direction == 'right') {
			player1.velX = 0;
		} else if (direction == 'bottom') {
			player1.jumping = false;
			player1.grounded = true;
		} else if (direction == 'top') {
			player1.velY *= -1;
		}
	});

	if (player1.grounded) {
		player1.velY = 0;
	}

	/** 
     * Check collitions for player 2
    */
	player2.grounded = false;
	platforms.map((platform) => {
		const direction = collisionCheck(player2, platform);
		if (direction == 'left' || direction == 'right') {
			player2.velX = 0;
		} else if (direction == 'bottom') {
			player2.jumping = false;
			player2.grounded = true;
		} else if (direction == 'top') {
			player2.velY *= -1;
		}
	});

	if (player2.grounded) {
		player2.velY = 0;
	}
}

/**
 * Start game
 */
function startGame() {
	gameStarted = true;
	if (interval) return;
	inGameSound.play();
	interval = setInterval(update, 1000 / 60);
}

/**
 * End game
 */
function gameOver() {
	//gameStarted = false;
	inGameSound.pause();
	clearInterval(interval);
}

/**
 * Draw the platforms
 */
function drawPlatforms() {
	ctx.fillStyle = '#333333';
	platforms.map((platform) => platform.draw());
}

/**
 * Are players touching
 */
function checkCollition() {
	if (player1.isTouching(player2)) {
		winner = 'girl';
		gameOver();
	}
}

/**
 * Timer
 */
function timer() {
	console.log(time);
	if (frames % 60 === 0) {
		time--;
	}
	ctx.font = 'normal bold 50px Verdana';
	ctx.fillText(`${time}`, canvas.width / 2 - 45, canvas.height / 2);
	if (time === 0) {
		winner = 'boy';
		gameOver();
	}
}
/**
 * Restart game
 */
function restartGame() {
	winner = false;
	location.reload();
}

/**
 * Print winner
 */
function printWinner() {
	if (winner === 'boy') {
		winnerImage.draw();
		bWinner.draw();
	} else if (winner === 'girl') {
		winnerImage.draw();
		gWinner.draw();
	}
}

/**
 * Check collitions
 */
function collisionCheck(char, plat) {
	const vectorX = char.x + char.width / 2 - (plat.x + plat.width / 2);
	const vectorY = char.y + char.height / 2 - (plat.y + plat.height / 2);

	const halfWidths = char.width / 2 + plat.width / 2;
	const halfHeights = char.height / 2 + plat.height / 2;

	let collisionDirection = null;

	if (Math.abs(vectorX) < halfWidths && Math.abs(vectorY) < halfHeights) {
		var offsetX = halfWidths - Math.abs(vectorX);
		var offsetY = halfHeights - Math.abs(vectorY);
		if (offsetX < offsetY) {
			if (vectorX > 0) {
				collisionDirection = 'left';
				char.x += offsetX;
			} else {
				collisionDirection = 'right';
				char.x -= offsetX;
			}
		} else {
			if (vectorY > 0) {
				collisionDirection = 'top';
				char.y += offsetY;
			} else {
				collisionDirection = 'bottom';
				char.y -= offsetY;
			}
		}
	}
	return collisionDirection;
}
