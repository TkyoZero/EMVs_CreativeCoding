<template>
	<div ref="canvasContainer"></div>
</template>

<script>
import p5 from "p5";

export default {
	name: "Circle Packing",
	data() {
		return {
			p5Instance: null,
		};
	},
	mounted() {
		this.createCanvas();
	},
	beforeUnmount() {
		if (this.p5Instance) {
			this.p5Instance.remove();
		}
	},
	methods: {
		createCanvas() {
			this.p5Instance = new p5(this.sketch, this.$refs.canvasContainer);
		},
		sketch(p) {
			let circles = [];
			const maxTries = 1000;
			const maxAttemptsPerCircle = 200;
			const minRadius = 5;
			const maxRadius = 30;

			p.setup = () => {
				p.createCanvas(400, 400);
				p.noFill();
				p.stroke(0);
				p.background(255);
				generateCircles();
				drawAllCircles();
			};

			function generateCircles() {
				circles = [];

				circles.push({
					x: p.random(p.width),
					y: p.random(p.height),
					r: p.random(minRadius, maxRadius),
				});

				for (let i = 0; i < maxTries; i++) {
					const newCircle = createNewCircle();
					if (newCircle) {
						circles.push(newCircle);
					}
				}
			}

			function createNewCircle() {
				for (let tries = 0; tries < maxAttemptsPerCircle; tries++) {
					let x = p.random(p.width);
					let y = p.random(p.height);

					let valid = true;
					let minDist = Infinity;

					for (let c of circles) {
						let dx = x - c.x;
						let dy = y - c.y;
						let distSq = dx * dx + dy * dy;
						let d = Math.sqrt(distSq);
						let edgeDist = d - c.r;

						if (edgeDist < 0) {
							valid = false;
							break;
						}

						if (edgeDist < minDist) {
							minDist = edgeDist;
						}
					}

					if (valid && minDist > minRadius) {
						return {
							x: x,
							y: y,
							r: Math.min(minDist, p.random(minRadius, maxRadius)),
						};
					}
				}

				return null;
			}

			function drawAllCircles() {
				for (let c of circles) {
					p.ellipse(c.x, c.y, c.r * 2);
				}
			}

			p.doubleClicked = () => {
				p.background(255);
				generateCircles();
				drawAllCircles();
			};
		},
	},
};
</script>
