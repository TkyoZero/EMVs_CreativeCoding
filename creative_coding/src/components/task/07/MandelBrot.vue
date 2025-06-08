<template>
	<div ref="canvasContainer"></div>
</template>

<script>
import p5 from "p5";

export default {
	name: "Mandelbrot",
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
			const escapeRadius = 4.0;
			const maxIterations = 40;
			const invMaxIterations = 1.0 / maxIterations;
			const canvasSize = 400;

			const zoomCenter = { x: -0.5, y: 0.0 };
			const zoomSize = 0.8;

			function palette(t, a, b, c, d) {
				return [
					a[0] + b[0] * Math.cos(6.28318 * (c[0] * t + d[0])),
					a[1] + b[1] * Math.cos(6.28318 * (c[1] * t + d[1])),
					a[2] + b[2] * Math.cos(6.28318 * (c[2] * t + d[2])),
				];
			}

			function paletteColor(t) {
				const a = [0.2, 0.4, 0.6];
				const b = [0.3, 0.4, 0.3];
				const c = [1.0, 1.0, 1.0];
				const d = [0.0, 0.1, 0.2];
				const rgb = palette(t % 1.0, a, b, c, d);
				return p.color(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
			}

			p.setup = () => {
				p.createCanvas(canvasSize, canvasSize);
				p.pixelDensity(1);
				p.noLoop();
				drawMandelbrot();
			};

			function drawMandelbrot() {
				p.loadPixels();

				for (let x = 0; x < canvasSize; x++) {
					for (let y = 0; y < canvasSize; y++) {
						// Convert screen to complex plane
						let uvx = (x / canvasSize) * 4.0 - 2.0;
						let uvy = (y / canvasSize) * 4.0 - 2.0;

						let zx = 0;
						let zy = 0;
						let cx = zoomCenter.x + uvx * zoomSize;
						let cy = zoomCenter.y + uvy * zoomSize;

						let iteration = 0;
						let zx2 = 0;
						let zy2 = 0;

						while (
							iteration < maxIterations &&
							zx2 + zy2 <= escapeRadius * escapeRadius
						) {
							zy = 2 * zx * zy + cy;
							zx = zx2 - zy2 + cx;

							zx2 = zx * zx;
							zy2 = zy * zy;

							iteration++;
						}

						let color;
						if (zx2 + zy2 > escapeRadius * escapeRadius) {
							let logZn = Math.log(zx2 + zy2) / 2;
							let nu = Math.log(logZn / Math.log(2)) / Math.log(2);
							let smooth = (iteration + 1 - nu) * invMaxIterations;
							color = paletteColor(smooth);
						} else {
							color = p.color(0);
						}

						let index = (x + y * canvasSize) * 4;
						p.pixels[index + 0] = p.red(color);
						p.pixels[index + 1] = p.green(color);
						p.pixels[index + 2] = p.blue(color);
						p.pixels[index + 3] = 255;
					}
				}

				p.updatePixels();
			}
		},
	},
};
</script>
