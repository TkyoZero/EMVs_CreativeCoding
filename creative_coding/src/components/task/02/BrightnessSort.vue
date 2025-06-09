<template>
	<div ref="canvasContainer"></div>
</template>

<script>
import p5 from "p5";

export default {
	name: "Brightness Sort",
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
			let img;

			p.preload = () => {
				img = p.loadImage("https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg");
			};

			p.setup = () => {
				p.createCanvas(800, 800);
				p.noLoop();

				img.loadPixels();

				let pixelData = [];
				for (let i = 0; i < img.pixels.length; i += 4) {
					const r = img.pixels[i];
					const g = img.pixels[i + 1];
					const b = img.pixels[i + 2];
					const a = img.pixels[i + 3];
					pixelData.push({ r, g, b, a, brightness: (r + g + b) / 3 });
				}

				pixelData.sort((a, b) => a.brightness - b.brightness);

				for (let i = 0; i < pixelData.length; i++) {
					const idx = i * 4;
					img.pixels[idx] = pixelData[i].r;
					img.pixels[idx + 1] = pixelData[i].g;
					img.pixels[idx + 2] = pixelData[i].b;
					img.pixels[idx + 3] = pixelData[i].a;
				}

				p.image(img, 0, 0, 400, 400);
				img.updatePixels();
				p.image(img, 400, 0, 400, 400);
			};
		},
	},
};
</script>
