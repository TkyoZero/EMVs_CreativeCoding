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
			let markovChain; // Make chain accessible globally

			p.preload = () => {
				myData = p.loadStrings("/test.txt"); // Load text file
			};

			p.setup = () => {
				p.createCanvas(400, 400);
				p.background(200);

				// 1. Flatten all words
				const allWords = myData.flatMap((sentence) =>
					sentence.split(/\s+/).filter((w) => w.length > 0)
				);

				// 2. Build Markov Chain (using Map)
				markovChain = new Map(); // Initialize globally

				for (let i = 0; i < allWords.length - 1; i++) {
					const currentWord = allWords[i];
					const nextWord = allWords[i + 1];

					if (!markovChain.has(currentWord)) {
						markovChain.set(currentWord, []);
					}
					markovChain.get(currentWord).push(nextWord);
				}

				// 3. Add generate button
				const button = p.createButton("generate");
				button.mousePressed(generateText); // Pass function, not chain
			};

			// 4. Text generation function
			function generateText() {
				if (!markovChain || markovChain.size === 0) return;

				// Start with a random word
				const keys = Array.from(markovChain.keys());
				let currentWord = p.random(keys);
				let result = [currentWord];

				// Generate 20 words (adjust as needed)
				for (let i = 0; i < 20; i++) {
					const nextWords = markovChain.get(currentWord);
					if (!nextWords || nextWords.length === 0) break;

					currentWord = p.random(nextWords); // Pick random follower
					result.push(currentWord);
				}

				console.log(result.join(" "));
				p.background(200);
				p.text(result.join(" "), 40, 40, 300, 360); // Display on canvas
			}
		},
	},
};
</script>
