<template>
	<div ref="canvasContainer"></div>
</template>

<script>
import p5 from "p5";

export default {
	name: "Original Ruleset",
	data() {
		return {
			p5Instance: null,
		};
	},
	mounted() {
		this.createCanvas();
	},
	beforeDestroy() {
		if (this.p5Instance) {
			this.p5Instance.remove();
		}
	},
	methods: {
		createCanvas() {
			this.p5Instance = new p5(this.sketch, this.$refs.canvasContainer);
		},
		sketch(p) {
			let cellSize = 20;
			let columnCount;
			let rowCount;
			let currentCells = [];
			let nextCells = [];

			p.setup = () => {
				p.frameRate(10);
				p.createCanvas(400, 400);

				columnCount = p.floor(p.width / cellSize);
				rowCount = p.floor(p.height / cellSize);

				for (let i = 0; i < columnCount; i++) {
					currentCells[i] = [];
					nextCells[i] = [];
					for (let j = 0; j < rowCount; j++) {
						currentCells[i][j] = 0;
						nextCells[i][j] = 0;
					}
				}

				randomizeBoard();
			};

			p.draw = () => {
				p.background(255);

				for (let column = 0; column < columnCount; column++) {
					for (let row = 0; row < rowCount; row++) {
						let cell = currentCells[column][row];

						p.fill((1 - cell) * 255);
						p.stroke(cell * 255);
						p.rect(column * cellSize, row * cellSize, cellSize, cellSize);
					}
				}

				for (let column = 0; column < columnCount; column++) {
					for (let row = 0; row < rowCount; row++) {
						let neighbors = countNeighbors(currentCells, column, row);
						let state = currentCells[column][row];

						if (state === 0 && neighbors === 3) {
							nextCells[column][row] = 1;
						} else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
							nextCells[column][row] = 0;
						} else {
							nextCells[column][row] = state;
						}
					}
				}

				[currentCells, nextCells] = [nextCells, currentCells];
			};

			function randomizeBoard() {
				for (let i = 0; i < columnCount; i++) {
					for (let j = 0; j < rowCount; j++) {
						currentCells[i][j] = p.random([0, 1]);
					}
				}
			}

			p.mousePressed = () => {
				randomizeBoard();
			};

			p.doubleClicked = () => {
				console.log("Mouse pressed");
				if (p.isLooping()) {
					p.noLoop();
				} else {
					p.loop();
				}
			};

			function countNeighbors(grid, x, y) {
				let sum = 0;
				for (let i = -1; i < 2; i++) {
					for (let j = -1; j < 2; j++) {
						let col = (x + i + columnCount) % columnCount;
						let row = (y + j + rowCount) % rowCount;
						sum += grid[col][row];
					}
				}
				sum -= grid[x][y];
				return sum;
			}
		},
	},
};
</script>
