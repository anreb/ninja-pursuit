/**
* Game functions
*/
function update() {
	console.log(player1);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	board.draw();
	player1.draw();
	player2.draw();

	player1.x += player1.velX;
	player1.velX *= friction;

	player1.x += player1.velX;
	player1.velX *= friction;

	player1.y += player1.velY;
	player1.velY += gravity;
}

function startGame() {
	gameStarted = true;
	if (interval) return;
	interval = setInterval(update, 1000 / 60);
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
