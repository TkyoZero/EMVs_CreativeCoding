<template>
	<div ref="canvasContainer"></div>
</template>

<script>
import p5 from "p5";

export default {
	name: "Pipe Shape",
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
			const amountOfFormPoints = 5;
			const stepSize = 2;
			const initRadius = 50;
			const mouseAttraction = 0.02;

			let centerX, centerY;
			let x = [];
			let y = [];

			p.setup = () => {
				p.createCanvas(400, 400);

				centerX = p.width / 2;
				centerY = p.height / 2;

				const angle = p.radians(360 / amountOfFormPoints);
				for (let i = 0; i < amountOfFormPoints; i++) {
					x.push(p.cos(angle * i) * initRadius);
					y.push(p.sin(angle * i) * initRadius);
				}

				p.stroke(0, 75);
				p.strokeWeight(0.5);
				p.background(255);
				p.noFill();
			};

			p.draw = () => {
				centerX += (p.mouseX - centerX) * mouseAttraction;
				centerY += (p.mouseY - centerY) * mouseAttraction;

				for (let i = 0; i < amountOfFormPoints; i++) {
					x[i] += p.random(-stepSize, stepSize);
					y[i] += p.random(-stepSize, stepSize);

					p.ellipse(x[i] + centerX, y[i] + centerY, 0.01, 0.01);
				}

				p.beginShape();
				p.curveVertex(x[0] + centerX, y[0] + centerY);

				for (let i = 0; i < amountOfFormPoints; i++) {
					p.curveVertex(x[i] + centerX, y[i] + centerY);
				}

				p.curveVertex(x[0] + centerX, y[0] + centerY);
				p.curveVertex(x[amountOfFormPoints - 1] + centerX, y[amountOfFormPoints - 1] + centerY);
				p.endShape();

				p.doubleClicked = () => {
					console.log("Mouse pressed");
					if (p.isLooping()) {
						p.noLoop();
					} else {
						p.loop();
					}
				};
			};
		},
	},
};
</script>
