<template>
	<div ref="canvasContainer"></div>
</template>

<script>
import p5 from "p5";

export default {
	name: "DemoP5Canvas",
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
				p5.background(255);
			};

			p5.draw = () => {
				p5.noFill();
				p5.square(p5.mouseX, p5.mouseY, p5.random(10, 200));
			};

			p5.mousePressed = () => {
				console.log("Mouse pressed");
			};
		},
	},
};
</script>
