<template>
  <span @click.prevent.stop="guide">
    <slot></slot>
  </span>
</template>

<script>
import Driver from 'driver.js'; // import driver.js
import 'driver.js/dist/driver.min.css'; // import driver.js css
import steps from './steps';

export default {
  data() {
    return {
      driver: null,
    };
  },
  created() {
    this.driver = new Driver({
      nextBtnText: '下一步',
      prevBtnText: '上一步',
      closeBtnText: '关闭',
      doneBtnText: '完成',
    });
  },
  mounted() {
    // this.guide();
  },
  methods: {
    guide() {
      this.driver.defineSteps(steps(this));
      this.driver.start();
    },
  },
};
</script>
