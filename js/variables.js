/**
 * Global variables
 */
const images = {
	ninjaBoy: './assets/boyNinjaSprite.png',
	bg: './assets/backgrounds/bg2.jpg',
	ninjaGirl: './assets/girlNinjaSprite.png',
	dino: './assets/dino/png/Idle (1).png',
	santa: './assets/santa/png/Idle (1).png',
	winner: './assets/winner.png'
};

const winnerImage = new Image();
winnerImage.src = images.winner;
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const keys = [];
const friction = 0.8;
const gravity = 0.98;
let interval;
let gameStarted = false;
let platforms = [];
let frames = 0;
let time = 30;
let winner = false;

/**
 * Game instances
 */
const board = new Board();
const player1 = new Player1();
const player2 = new Player2();
/**
 * Game borders
 */
const platformBottom = new Platform(-canvas.width, canvas.height - 40, canvas.width + canvas.width * 2, 15);
const platformLeft = new Platform(-15, 0, 15, canvas.height);
const platformRigth = new Platform(canvas.width, -150, 15, canvas.height + 150);

/**
 * Platforms
 */
const platform3 = new Platform(0, 130, 140, 15);
const platform4 = new Platform(195, 245, 145, 15);
const platform5 = new Platform(368, 125, 150, 15);
const platform6 = new Platform(480, 300, 220, 15);
const platform7 = new Platform(775, 333, 120, 15);
const platform8 = new Platform(835, 222, 225, 15);
const platform9 = new Platform(660, 140, 147, 15);
const platform10 = new Platform(525, 40, 230, 15);
const platform11 = new Platform(0, 333, 137, 15);

platforms.push(platformBottom);
platforms.push(platformLeft);
platforms.push(platformRigth);
platforms.push(platform3);
platforms.push(platform4);
platforms.push(platform5);
platforms.push(platform6);
platforms.push(platform7);
platforms.push(platform8);
platforms.push(platform9);
platforms.push(platform10);
platforms.push(platform11);
