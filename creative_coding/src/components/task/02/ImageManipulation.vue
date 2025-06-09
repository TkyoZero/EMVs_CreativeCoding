<template>
	<div ref="canvasContainer"></div>
</template>

<script>
import p5 from "p5";

export default {
	name: "Image Manipulation",
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
			p.setup = () => {
				p.createCanvas(400, 400);
				p.pixelDensity(1);
			};

			p.draw = () => {
				p.background(0);

				p.loadPixels();
				for (let y = 0; y < p.height; y++) {
					for (let x = 0; x < p.width; x++) {
						const index = (x + y * p.width) * 4;
						p.pixels[index + 0] = p.mouseX; // Rot
						p.pixels[index + 1] = p.mouseY; // Grün
						p.pixels[index + 2] = y; // Blau
						p.pixels[index + 3] = 100; // Alpha
					}
				}
				p.updatePixels();
			};
		},
	},
};
</script>
