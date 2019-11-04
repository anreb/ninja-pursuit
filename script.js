/**
 * Global variables
 */
const images = {
	dino: './assets/dino/png/Idle (1).png',
	bg: './assets/backgrounds/bg1.png',
	santa: './assets/santa/png/Idle (1).png'
};
const keys = [];
const friction = 0.8;
const gravity = 0.98;
let interval;

/**
 * Loader
 */
window.onload = () => {
	const canvas = document.querySelector('canvas');
	const ctx = canvas.getContext('2d');
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
			this.speed = 5;
			this.velX = 0;
			this.velY = 0;
			this.jumping = false;
			this.jumpStrength = 7;
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

	/**
     * Game instances
     */
	const board = new Board();
	const player1 = new Player1();
	const player2 = new Player2();

	/**
     * Game functions
     */
	function update() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		board.draw();
		player1.draw();
		player2.draw();
	}

	function startGame() {
		if (interval) return;
		interval = setInterval(update, 1000 / 60);
	}

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
	};
};
