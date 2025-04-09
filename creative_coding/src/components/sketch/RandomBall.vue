<template>
	<div ref="canvasContainer"></div>
</template>

<script>
import p5 from "p5";

const col = 10;
const row = 10;
const Gridsize = 50;
const color = ["#ECECEC", "#656262", "#110000"];

export default {
	name: "RandomBall",
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

				for (let i = 0; i < col; i++) {
					for (let j = 0; j < row; j++) {
						p5.fill(color[p5.random([0, 1, 2])]);
						p5.noStroke();
						p5.circle(
							i * Gridsize,
							j * Gridsize,
							p5.random(15, 60)
						);
					}
				}
			};
		},
	},
};
</script>
