<template>
	<div ref="canvasContainer"></div>
</template>

<script>
import p5 from "p5";

export default {
	name: "Dithering Effect",
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
			let img;

			p.preload = () => {
				img = p.loadImage(
					"https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg"
				);
			};

			p.setup = () => {
				p.createCanvas(400, 400);
				p.image(img, 0, 0, 400, 400);
			};

			p.mousePressed = () => {
				img.loadPixels();
				for (let i = 0; i < img.pixels.length; i += 4) {
					let red = img.pixels[i];
					let green = img.pixels[i + 1];
					let blue = img.pixels[i + 2];

					let imgPixelValue = red + green + blue;
					let randomPixelValue = p.random(255 * 3);

					if (imgPixelValue < randomPixelValue) {
						img.pixels[i] = 0;
						img.pixels[i + 1] = 0;
						img.pixels[i + 2] = 0;
					} else {
						img.pixels[i] = 255;
						img.pixels[i + 1] = 255;
						img.pixels[i + 2] = 255;
					}
				}
				img.updatePixels();
				p.image(img, 0, 0, 400, 400);
			};
		},
	},
};
</script>
