<template>
	<div ref="canvasContainer"></div>
</template>

<script>
import p5 from "p5";

export default {
	name: "Abstract Algorithm",
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
			let hueValue = 0;

			p.setup = () => {
				p.createCanvas(400, 400);
				p.colorMode(p.HSB, 360, 100, 100);
				p.background(255);
			};

			p.draw = () => {
				p.noStroke();
				p.fill(0, 0, 0, 0.08);
				p.rect(0, 0, p.width, p.height);

				p.noFill();
				p.stroke(hueValue, 100, 100);
				hueValue = (hueValue + 1) % 360;

				const size = p.random(30, 100);
				p.circle(p.mouseX, p.mouseY, size);
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
