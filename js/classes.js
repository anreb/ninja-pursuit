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
		this.y = canvas.height - 135;
		this.width = 100;
		this.height = 100;
		this.speed = 7;
		this.velX = 0;
		this.velY = 0;
		this.jumping = false;
		this.jumpStrength = 5;
		this.grounded = false;
		this.img = new Image();
		this.img.src = images.dino;
		this.img.onload = () => {
			this.draw();
		};
	}

	draw() {
		console.log('Printed dino');
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
	}

	moveLeft() {
		if (this.velX > -this.speed) {
			this.velX--;
		}
		// this.x += this.velX;
		// this.velX *= friction;
	}

	moveRigth() {
		if (this.velX < this.speed) {
			this.velX++;
		}
		// this.x += this.velX;
		// this.velX *= friction;
	}

	jump() {
		if (!this.jumping) {
			this.velY = -this.jumpStrength * 4;
			this.jumping = true;
		}
		// this.y += this.velY;
		// this.velY += gravity;
	}
}

class Player2 {
	constructor() {
		this.x = 500;
		this.y = canvas.height - 135;
		this.width = 100;
		this.height = 100;
		this.speed = 5;
		this.velX = 0;
		this.velY = 0;
		this.jumping = false;
		this.jumpStrength = 7;
		this.grounded = false;
		this.img = new Image();
		this.img.src = images.santa;
		this.img.onload = () => {
			this.draw();
		};
	}

	draw() {
		console.log('Printed santa');
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
	}

	moveLeft() {
		if (this.velX > -this.speed) {
			this.velX--;
		}
		this.x += this.velX;
		this.velX *= friction;
	}

	moveRigth() {
		if (this.velX < this.speed) {
			this.velX++;
		}
		this.x += this.velX;
		this.velX *= friction;
	}

	jump() {
		if (!this.jumping) {
			this.velY = -this.jumpStrength * 2;
			this.jumping = true;
		}
		this.y += this.velY;
		this.velY += gravity;
	}
}

class Platform {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = heigth;
	}

	draw() {}
}
