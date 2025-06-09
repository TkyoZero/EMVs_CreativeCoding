<template>
	<div ref="canvasContainer"></div>
</template>

<script>
import p5 from "p5";

export default {
	name: "Image Overlay",
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
			let img1, img2;

			p.preload = () => {
				img1 = p.loadImage("https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg");
				img2 = p.loadImage(
					"https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg"
				);
			};

			p.setup = () => {
				p.createCanvas(400, 400);
			};

			p.draw = () => {
				p.background(255);

				const imgWidth = 400;
				const imgHeight = 400;

				p.image(img1, 0, 0, imgWidth, imgHeight);

				p.tint(255, 150);
				p.image(img2, 0, 0, imgWidth, imgHeight);

				p.noTint();
			};
		},
	},
};
</script>
