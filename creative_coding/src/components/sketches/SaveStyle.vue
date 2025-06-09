<template>
	<div ref="canvasContainer"></div>
</template>

<script>
import p5 from "p5";

export default {
	name: "SaveStyle",
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
			p5.setup = () => {
				p5.createCanvas(400, 400);
				p5.background(255);

				p5.ellipse(0, 50, 33, 33);

				p5.push(); // Start a new drawing state
				p5.translate(50, 0);
				p5.strokeWeight(10);
				p5.fill(204, 153, 0);
				p5.ellipse(33, 50, 33, 33);
				p5.pop(); // Restore original state

				p5.ellipse(100, 50, 33, 33);

				p5.translate(0, 50);

				p5.ellipse(0, 50, 33, 33);
			};
		},
	},
};
</script>
