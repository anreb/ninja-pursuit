/**
* Classes
*/
class Board {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.width = canvas.width;
		this.height = canvas.height;
		this.img = new Image();
		this.img.src = images.bg;
		this.img.onload = () => {
			this.draw();
		};
	}
	draw() {
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
	}
}

class Player1 {
	constructor() {
		this.x = 50;
		this.y = canvas.height - 450;
		this.width = 22;
		this.height = 62;
		this.speed = 7;
		this.velX = 0;
		this.velY = 0;
		this.jumping = false;
		this.jumpStrength = 8;
		this.grounded = false;
		this.img = new Image();
		this.img.src = images.ninjaGirl;
		this.img.onload = () => {
			this.draw();
		};
	}

	draw() {
		console.log('Printed ninja girl');
		ctx.drawImage(this.img, 30, 30, 242, 455, this.x, this.y, this.width, this.height);
	}

	moveLeft() {
		if (keys[65]) {
			if (this.velX > -this.speed) {
				this.velX--;
			}
		}
		this.x += this.velX;
		this.velX *= friction;
	}

	moveRigth() {
		if (keys[68]) {
			if (this.velX < this.speed) {
				this.velX++;
			}
		}
		this.x += this.velX;
		this.velX *= friction;
	}

	jump() {
		if (keys[87] || keys[32]) {
			if (!this.jumping) {
				this.velY = -this.jumpStrength * 2;
				this.jumping = true;
				jumpSound.play();
			}
		}
		this.y += this.velY;
		this.velY += gravity;
	}

	isTouching(obstacle) {
		return (
			this.x < obstacle.x + obstacle.width &&
			this.x + this.width > obstacle.x &&
			this.y < obstacle.y + obstacle.height &&
			this.y + this.height > obstacle.y
		);
	}
}

class Player2 {
	constructor() {
		this.x = 550;
		this.y = canvas.height - 250;
		this.width = 22;
		this.height = 62;
		this.speed = 7;
		this.velX = 0;
		this.velY = 0;
		this.jumping = false;
		this.jumpStrength = 8;
		this.grounded = false;
		this.img = new Image();
		this.img.src = images.ninjaBoy;
		this.img.onload = () => {
			this.draw();
		};
	}

	draw() {
		console.log('Printed ninja boy');
		ctx.drawImage(this.img, 5, 7, 220, 420, this.x, this.y, this.width, this.height);
	}

	moveLeft() {
		if (keys[37]) {
			if (this.velX > -this.speed) {
				this.velX--;
			}
		}
		this.x += this.velX;
		this.velX *= friction;
	}

	moveRigth() {
		if (keys[39]) {
			if (this.velX < this.speed) {
				this.velX++;
			}
		}
		this.x += this.velX;
		this.velX *= friction;
	}

	jump() {
		if (keys[38]) {
			if (!this.jumping) {
				this.velY = -this.jumpStrength * 2;
				this.jumping = true;
				jumpSound.play();
			}
		}
		this.y += this.velY;
		this.velY += gravity;
	}

	isTouching(obstacle) {
		return (
			this.x < obstacle.x + obstacle.width &&
			this.x + this.width > obstacle.x &&
			this.y < obstacle.y + obstacle.height &&
			this.y + this.height > obstacle.y
		);
	}
}

class Platform {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	draw() {
		ctx.fillStyle = '#fff000';
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

class Winner {
	constructor() {
		this.x = 300;
		this.y = 100;
		this.width = 250;
		this.height = 100;
		this.img = new Image();
		this.img.src = images.winner;
		this.img.onload = () => {
			this.draw();
		};
	}

	draw() {
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
	}
}

class girlWinner {
	constructor() {
		this.x = 380;
		this.y = 185;
		this.width = 100;
		this.height = 100;
		this.img = new Image();
		this.img.src = images.ninjaGirl;
		this.img.onload = () => {
			this.draw();
		};
	}

	draw() {
		ctx.drawImage(this.img, 0, 0, 300, 275, this.x, this.y, this.width, this.height);
	}
}

class boyWinner {
	constructor() {
		this.x = 380;
		this.y = 200;
		this.width = 100;
		this.height = 100;
		this.img = new Image();
		this.img.src = images.ninjaBoy;
		this.img.onload = () => {
			this.draw();
		};
	}

	draw() {
		ctx.drawImage(this.img, 0, 0, 245, 250, this.x, this.y, this.width, this.height);
	}
}
