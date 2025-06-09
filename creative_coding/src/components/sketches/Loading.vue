<template>
	<div ref="canvasContainer"></div>
</template>

<script>
import p5 from "p5";

export default {
	name: "Loading",
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
				p.createCanvas(400, 400);
				p.image(img, 0, 0, 400, 400);
			};
		},
	},
};
</script>
