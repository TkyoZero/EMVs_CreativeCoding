<template>
	<div ref="canvasContainer"></div>
</template>

<script>
import p5 from "p5";

export default {
	name: "Random Squares",
	mounted() {
		this.createCanvas();
	},
	beforeUnmount() {
		if (this.p) {
			this.p.remove();
		}
	},
	methods: {
		createCanvas() {
			this.p = new p5(this.sketch, this.$refs.canvasContainer);
		},
		sketch(p) {
			p.setup = () => {
				p.createCanvas(400, 400);
				p.background(255);
			};

			p.draw = () => {
				p.noFill();
				p.square(p.mouseX, p.mouseY, p.random(10, 200));
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
