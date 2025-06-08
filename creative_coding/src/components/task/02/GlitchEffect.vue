<template>
	<div ref="canvasContainer"></div>
</template>

<script>
import p5 from "p5";

export default {
	name: "Template",
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
				p.image(img, 0, 0, 400, 400);

				// Glitch: shift random horizontal lines
				for (let i = 0; i < 10; i++) {
					let y = p.floor(p.random(p.height));
					let h = p.floor(p.random(5, 20));
					let xOffset = p.random(-20, 20);

					let strip = img.get(0, y, img.width, h);
					p.image(strip, xOffset, y);
				}

				let r = img.get(0, 0, img.width, img.height);
				let g = img.get(0, 0, img.width, img.height);
				let b = img.get(0, 0, img.width, img.height);

				p.tint(255, 0, 0);
				p.image(r, 2, 0); // red shifted

				p.tint(0, 255, 0);
				p.image(g, -2, 0); // green shifted

				p.tint(0, 0, 255);
				p.image(b, 0, 2); // blue shifted

				p.noTint();
			};
		},
	},
};
</script>
