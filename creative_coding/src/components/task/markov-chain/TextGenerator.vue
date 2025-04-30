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
			this.p5Instance.remove(); // Proper cleanup
		}
	},
	methods: {
		createCanvas() {
			this.p5Instance = new p5(this.sketch, this.$refs.canvasContainer); // Fixed variable name
		},
		sketch(p) {
			let myData;

			// Load the text and create an array.
			p.preload = () => {
				myData = p.loadStrings("/test.txt");
			};

			p.setup = () => {
				p.createCanvas(400, 400);

				p.background(200);

				// 1. Flatten words
				let allWords = []; // Stores every word from all sentences

				for (let i = 0; i < myData.length; i++) {
					const splitWords = myData[i].split(/\s+/).filter((w) => w.length > 0);
					allWords = allWords.concat(splitWords); // Combine all words
				}
				console.log(allWords);

				// 2. Build Markov Chain (using Map)
				const markovChain = new Map();

				for (let i = 0; i < allWords.length - 1; i++) {
					const currentWord = allWords[i];
					const nextWord = allWords[i + 1];

					if (!markovChain.has(currentWord)) {
						markovChain.set(currentWord, []);
					}
					markovChain.get(currentWord).push(nextWord);
				}

				let button = p.createButton("generate");
				button.mousePressed(markovChain, p.random(Number));
			};
		},
	},
};
</script>
