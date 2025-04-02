<template>
    <div ref="canvasContainer"></div>
</template>
 
<script>
import p5 from 'p5';

let img;

export default {
    name: 'LoadingCanvas',
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
            p5.preload = () => {
                img = p5.loadImage('https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg');
            }

            p5.setup = () => {
                p5.createCanvas(500, 500);
                p5.image(img, 0, 0, 500, 500);
            };
        }
    }
};
</script>
