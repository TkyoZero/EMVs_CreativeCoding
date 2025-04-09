<template>
	<div ref="canvasContainer"></div>
</template>

<script>
import p5 from "p5";

export default {
	name: "ImageManipulation",
	mounted() {
		this.createCanvas();
	},
	beforeDestroy() {
		if (this.p5) {
			this.p5.remove();
		}
	},
	methods: {
		createCanvas() {
			this.p5 = new p5(this.sketch, this.$refs.canvasContainer);
		},
		sketch(p5) {
			p5.setup = () => {
				p5.createCanvas(400, 400);
				p5.pixelDensity(1);
			};

			p5.draw = () => {
				p5.background(0);

				p5.loadPixels();
				for (let y = 0; y < p5.height; y++) {
					for (let x = 0; x < p5.width; x++) {
						const index = (x + y * p5.width) * 4;
						p5.pixels[index + 0] = p5.mouseX; // Rot
						p5.pixels[index + 1] = p5.mouseY; // Grün
						p5.pixels[index + 2] = y; // Blau
						p5.pixels[index + 3] = 100; // Alpha
					}
				}
				p5.updatePixels();
			};
		},
	},
};
</script>
