<template>
	<div ref="canvasContainer"></div>
</template>

<script>
import p5 from "p5";

export default {
	name: "Graphics",
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
			this.p5Instance.remove(); // Proper cleanup
		}
	},
	methods: {
		createCanvas() {
			this.p5Instance = new p5(this.sketch, this.$refs.canvasContainer); // Fixed variable name
		},
		sketch(p) {
			let graphics;

			p.setup = () => {
				p.createCanvas(400, 400);
				graphics = p.createGraphics(200, 200);
				p.noStroke(); // Apply globally for cleaner shapes
			};

			p.draw = () => {
				p.background(220);

				// Main canvas drawing
				p.fill(255, 0, 0);
				p.rect(50, 50, 100, 100);

				// Graphics buffer drawing
				graphics.fill(0, 0, 255);
				graphics.ellipse(p.random(graphics.width), p.random(graphics.height), 20, 20);

				// Display graphics buffer
				p.image(graphics, 100, 100);
			};

			p.mousePressed = () => {
				graphics.clear();
			};

			p.doubleClicked = () => {
				console.log("Mouse pressed");
				if (p.isLooping()) {
					p.noLoop(); // Stop the draw loop if it's running
				} else {
					p.loop(); // Restart the draw loop if it's stopped
				}
			};
		},
	},
};
</script>
