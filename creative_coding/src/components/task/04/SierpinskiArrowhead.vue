<template>
	<div ref="canvasContainer"></div>
</template>

<script>
import p5 from "p5";

export default {
	name: "Sierpinski Arrowhead",
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
			let angle;
			let axiom = "YF";
			let sentence = axiom;
			let initLen = 300;
			let len = initLen;
			let divideFactor = 2;
			let iteration = 0;

			let rules = [];
			rules[0] = { a: "X", b: "YF+XF+Y" };

			rules[1] = { a: "Y", b: "XF-YF-X" };

			function generate() {
				iteration++;
				len = initLen / Math.pow(divideFactor, iteration);

				let nextSentence = "";
				for (let i = 0; i < sentence.length; i++) {
					let current = sentence.charAt(i);
					let found = false;
					for (let j = 0; j < rules.length; j++) {
						if (current == rules[j].a) {
							found = true;
							nextSentence += rules[j].b;
							break;
						}
					}
					if (!found) {
						nextSentence += current;
					}
				}
				sentence = nextSentence;
				turtle();
			}

			function turtle() {
				p.background(51);
				p.resetMatrix();
				p.translate(p.width / 2 - initLen / 2, p.height / 2 + initLen / 2);
				p.stroke(252, 210, 39);

				for (let i = 0; i < sentence.length; i++) {
					let current = sentence.charAt(i);

					if (current == "F") {
						p.line(0, 0, 0, -len);
						p.translate(0, -len);
					} else if (current == "+") {
						p.rotate(angle);
					} else if (current == "-") {
						p.rotate(-angle);
					}
				}
			}

			p.setup = () => {
				p.createCanvas(400, 400);
				angle = p.radians(60);
				p.background(51);
				turtle();
				let button = p.createButton("generate");
				button.mousePressed(generate);
			};
		},
	},
};
</script>
