/**
 * Global variables
 */
const images = {
	dino: './assets/dino/png/Idle (1).png',
	bg: './assets/backgrounds/bg1.png',
	santa: './assets/santa/png/Idle (1).png'
};
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const keys = [];
const friction = 0.9;
const gravity = 0.98;
let interval;
let gameStarted = false;

/**
 * Game instances
 */
const board = new Board();
const player1 = new Player1();
const player2 = new Player2();
