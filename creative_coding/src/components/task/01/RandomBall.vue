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
	name: "Random Ball",
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

				for (let i = 0; i < col; i++) {
					for (let j = 0; j < row; j++) {
						p.fill(color[p.random([0, 1, 2])]);
						p.noStroke();
						p.circle(i * Gridsize, j * Gridsize, p.random(15, 60));
					}
				}
			};
		},
	},
};
</script>
