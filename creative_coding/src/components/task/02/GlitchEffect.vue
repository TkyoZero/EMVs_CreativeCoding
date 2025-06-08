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

				// shift random horizontal lines
				for (let i = 0; i < 10; i++) {
					let y = p.floor(p.random(p.height));
					let h = p.floor(p.random(5, 20));
					let offset = p.floor(p.random(-30, 30));
					let strip = img.get(0, y, img.width, h);
					p.image(strip, offset, y);
				}
			};

			p.draw = () => {};
		},
	},
};
</script>
