<template>
  <div ref="canvasContainer"></div>
</template>

<script>
import p5 from "p5";

export default {
  name: "BrightnessSort",
  data() {
    return {
      p5: null,
    };
  },
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
      let img;

      p5.preload = () => {
        img = p5.loadImage(
          "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg"
        );
      };

      p5.setup = () => {
        p5.createCanvas(img.width, img.height);
        p5.noLoop(); // Only draw once (no animation needed)

        img.loadPixels();

        // Extract pixels into an array
        let pixelData = [];
        for (let i = 0; i < img.pixels.length; i += 4) {
          const r = img.pixels[i];
          const g = img.pixels[i + 1];
          const b = img.pixels[i + 2];
          const a = img.pixels[i + 3];
          pixelData.push({ r, g, b, a, brightness: (r + g + b) / 3 });
        }

        // Sort by brightness
        pixelData.sort((a, b) => a.brightness - b.brightness);

        // Reapply sorted pixels
        for (let i = 0; i < pixelData.length; i++) {
          const idx = i * 4;
          img.pixels[idx] = pixelData[i].r;
          img.pixels[idx + 1] = pixelData[i].g;
          img.pixels[idx + 2] = pixelData[i].b;
          img.pixels[idx + 3] = pixelData[i].a;
        }

        img.updatePixels();
        p5.image(img, 0, 0);
      };
    },
  },
};
</script>
