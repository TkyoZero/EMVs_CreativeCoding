<template>
	<div ref="canvasContainer"></div>
</template>

<script>
import p5 from "p5";

export default {
	name: "Image Resize",
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
				p.createCanvas(600, 400);
				p.imageMode(p.CENTER);
			};

			p.draw = () => {
				p.background(220);

				let scale = p.map(p.mouseX, 0, p.width, 0.2, 2);
				let w = img.width * scale;
				let h = img.height * scale;

				p.image(img, p.width / 2, p.height / 2, w, h);
			};

			p.doubleClicked = () => {
				console.log("Mouse pressed");
				if (p.isLooping()) {
					p.noLoop();
				} else {
					p.loop();
				}
			};
		},
	},
};
</script>
