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
const friction = 0.8;
const gravity = 0.98;
let interval;
let gameStarted = false;
let platforms = [];

/**
 * Game instances
 */
const board = new Board();
const player1 = new Player1();
const player2 = new Player2();
const platform1 = new Platform(-canvas.width, canvas.height - 40, canvas.width + canvas.width * 2, 10);
const platform2 = new Platform(88, 340, 135, 10);
const platform3 = new Platform(0, 160, 140, 10);
const platform4 = new Platform(210, 245, 130, 10);
const platform5 = new Platform(390, 120, 125, 10);
const platform6 = new Platform(495, 300, 205, 10);
const platform7 = new Platform(790, 335, 100, 10);
const platform8 = new Platform(850, 220, 225, 10);
const platform9 = new Platform(680, 140, 125, 10);
const platform10 = new Platform(545, 40, 200, 10);

platforms.push(platform1);
platforms.push(platform2);
platforms.push(platform3);
platforms.push(platform4);
platforms.push(platform5);
platforms.push(platform6);
platforms.push(platform7);
platforms.push(platform8);
platforms.push(platform9);
platforms.push(platform10);
