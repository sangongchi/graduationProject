<template>
  <div class="container">
    <div style="width:100%">自动化构建测试 使用weebook进行</div>
    <div class="slid-picture">
      <div class="v-img">
        <canvas id="sliderBlock2" class="slierBlock"></canvas>
        <canvas id="codeImg2"></canvas>
      </div>
      <div class="slider">
        <div class="track">{{tips}}</div>
        <div class="button" @mousedown.prevent="drag1"></div>
      </div>
    </div>
  </div>
</template>
<script>
let canvas;
let ctx;
export default {
  name: 'Canvas',
  data() {
    return {
      tips: '请拖动滑块进行验证',
      canvasW: 300,
      canvasH: 190,

      //slider滑块x轴数据
      slider: {
        mx: 0,
        bx: 0
      },
      puzzle: false
    };
  },
  methods: {
    show() {
      console.log(JSON.stringify(this.teachModeItems));
    },
    initCanvas() {
      console.log('初始化canvas');
      canvas = document.getElementById('sliderBlock2');
      ctx = canvas.getContext('2d');
      canvas.width = this.canvasW;
      canvas.height = this.canvasH;
      //生成指定区间随机数
      const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };
      let mx = random(127, 244);
      let bx = random(10, 128),
        y = random(10, 99);
      this.slider = { mx, bx };
      this.draw(mx, bx, y);
      //绘制canvas切图形状
    },
    draw(mx = 200, bx = 20, y = 50) {
      //底层画布部分
      let mainDom = document.querySelector('#codeImg2');
      let bg = mainDom.getContext('2d');
      let width = mainDom.width;
      let height = mainDom.height;
      //可拖拽滑块部分
      let blockDom = document.querySelector('#sliderBlock2');
      let block = blockDom.getContext('2d');

      //重新赋值 让canvas进行绘制
      blockDom.height = height;
      mainDom.height = height;

      let imgsrc = require('../assets/imgs/img1.jpg');
      let img = document.createElement('img');
      img.src = imgsrc;
      img.onload = () => {
        bg.drawImage(img, 0, 0, width, height);
        block.drawImage(img, 0, 0, width, height);
      };

      let mainxy = { x: mx, y: y, r: 9 };
      let blockxy = { x: bx, y: y, r: 9 };
      this.drawBlock(bg, mainxy, 'fill');
      this.drawBlock(block, blockxy, 'clip');
    },
    drawBlock(ctx, point = { x: 254, y: 109, r: 9 }, type) {
      let x = point.x,
        y = point.y,
        r = point.r,
        w = 40;
      let PI = Math.PI;
      //开始绘制图形
      ctx.beginPath();
      ctx.moveTo(x, y);

      //绘制顶部
      ctx.arc(x + w / 2, y, r, -PI, 0, true);
      ctx.lineTo(x + w, y);

      //绘制右边
      ctx.arc(x + w, y + w / 2, r, -PI / 2, PI / 2);
      ctx.lineTo(x + w, y + w);
      //绘制底部
      ctx.arc(x + w / 2, y + w, r, 0, PI);
      ctx.lineTo(x, y + w);

      //绘制左侧
      ctx.arc(x, y + w / 2, r, PI / 2, -PI / 2, true);
      ctx.lineTo(x, y);
      ctx.lineWidth = 1;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.stroke();
      ctx[type]();
      ctx.globalCompositeOperation = 'xor';
    },
    drag1(e) {
      let dom = e.target;
      let slider = document.querySelector('.slierBlock');
      const downCoordinate = { x: e.x, y: e.y };

      //正确的滑块数据(两个画布相减的差值)
      let checkx = Number(this.slider.mx) - Number(this.slider.bx);

      //滑块数据
      let x = 0;
      const move = moveE => {
        console.log('执行了move方法');
        x = moveE.x - downCoordinate.x;
        this.tips = '';
        if (x > 260 || x < 0) return false;
        dom.style.left = x + 'px';
        slider.style.left = x + 'px';
      };
      const up = () => {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', up);
        dom.style.left = '';
        console.log(x, checkx);
        let max = checkx - 5;
        let min = checkx - 10;
        //允许误差
        if ((max >= x && x >= min) || x == checkx) {
          this.puzzle = true;
          this.tips = '验证成功';
        } else {
          this.tips = '验证失败,请重试';
          this.puzzle = false;
          this.initCanvas();
        }
      };
      document.addEventListener('mousemove', move);
      document.addEventListener('mouseup', up);
    }
  },
  mounted() {
    this.initCanvas();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.slid-picture {
  width: 300px;
  height: 300px;
  margin-top: 100px;
  margin-left: 150px;
  .v-img {
    width: 100%;
    height: 190px;
    position: relative;
    canvas {
      position: absolute;
    }
    #sliderBlock2 {
      background-color: aliceblue;
    }
  }
  .slider {
    width: 100%;
    height: 65px;
    background-color: rgb(55, 179, 228);
    border-radius: 30px;
    position: relative;
    .track {
      position: absolute;
      top: 50%;
      text-align: center;
      width: 100%;
      transform: translateY(-50%);
    }
    .button {
      width: 70px;
      height: 70px;
      background-color: bisque;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
