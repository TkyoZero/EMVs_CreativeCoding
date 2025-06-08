<template>
	<div ref="canvasContainer"></div>
</template>

<script>
import p5 from "p5";

export default {
	name: "Text Generator",
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
			let myData;
			let markovChain;

			p.preload = () => {
				myData = p.loadStrings("/test.txt");
			};

			p.setup = () => {
				p.createCanvas(400, 400);
				p.background(200);

				const allWords = myData.flatMap((sentence) =>
					sentence.split(/\s+/).filter((w) => w.length > 0)
				);

				markovChain = new Map();

				for (let i = 0; i < allWords.length - 1; i++) {
					const currentWord = allWords[i];
					const nextWord = allWords[i + 1];

					if (!markovChain.has(currentWord)) {
						markovChain.set(currentWord, []);
					}
					markovChain.get(currentWord).push(nextWord);
				}

				const button = p.createButton("generate");
				button.mousePressed(generateText);
			};

			function generateText() {
				if (!markovChain || markovChain.size === 0) return;

				const keys = Array.from(markovChain.keys());
				let currentWord = p.random(keys);
				let result = [currentWord];

				for (let i = 0; i < 20; i++) {
					const nextWords = markovChain.get(currentWord);
					if (!nextWords || nextWords.length === 0) break;

					currentWord = p.random(nextWords);
					result.push(currentWord);
				}

				console.log(result.join(" "));
				p.background(200);
				p.text(result.join(" "), 40, 40, 300, 360);
			}
		},
	},
};
</script>
