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
			p.setup = () => {
				p.createCanvas(400, 400);
				p.background(255);

				p.ellipse(0, 50, 33, 33);

				p.push(); // Start a new drawing state
				p.translate(50, 0);
				p.strokeWeight(10);
				p.fill(204, 153, 0);
				p.ellipse(33, 50, 33, 33);
				p.pop(); // Restore original state

				p.ellipse(100, 50, 33, 33);

				p.translate(0, 50);

				p.ellipse(0, 50, 33, 33);
			};
		},
	},
};
</script>
