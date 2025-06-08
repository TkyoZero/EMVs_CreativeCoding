<template>
	<div ref="canvasContainer"></div>
</template>

<script>
import p5 from "p5";

export default {
	name: "Fern",
	data() {
		return {
			p5Instance: null,
		};
	},
	mounted() {
		this.createCanvas();
	},
	beforeDestroy() {
		if (this.p5Instance) {
			this.p5Instance.remove();
		}
	},
	methods: {
		createCanvas() {
			this.p5Instance = new p5(this.sketch, this.$refs.canvasContainer);
		},
		sketch(p) {
			let angle;
			let axiom = "Y";
			let sentence = axiom;
			const initLen = 300;
			let len = initLen;
			const divideFactor = 2.05;
			let iteration = 0;

			const rules = [
				{ a: "X", b: "X[-FFF][+FFF]FX" },
				{ a: "Y", b: "YFX[+Y][-Y]" },
			];

			function generate() {
				iteration++;
				len = initLen / Math.pow(divideFactor, iteration);

				let next = "";
				for (let i = 0; i < sentence.length; i++) {
					let c = sentence.charAt(i);
					let replaced = false;
					for (let rule of rules) {
						if (c === rule.a) {
							next += rule.b;
							replaced = true;
							break;
						}
					}
					if (!replaced) next += c;
				}
				sentence = next;
				turtle();
			}

			function turtle() {
				p.background(51);
				p.resetMatrix();

				// Translation
				p.translate(p.width / 2, p.height);

				p.stroke(0, 255, 0);
				p.strokeWeight(iteration < 4 ? 2 : 1);
				for (let i = 0; i < sentence.length; i++) {
					let c = sentence.charAt(i);

					if (c === "F") {
						p.line(0, 0, 0, -len);
						p.translate(0, -len);
					} else if (c === "+") {
						p.rotate(angle);
					} else if (c === "-") {
						p.rotate(-angle);
					} else if (c === "[") {
						p.push();
					} else if (c === "]") {
						p.pop();
					}
				}
			}

			p.setup = () => {
				p.createCanvas(400, 400);
				angle = p.radians(25.7);
				p.background(51);
				turtle();

				const button = p.createButton("generate");
				button.mousePressed(generate);
			};
		},
	},
};
</script>
