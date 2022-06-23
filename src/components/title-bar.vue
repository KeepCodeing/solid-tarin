<template>
  <div class="title-bar">
    <img
      v-if="showBack"
      class="left-back"
      src="../assets/img/left-arrow.svg"
      @click="$router.back()">
    <slot></slot>
    <div class="right-menu-box">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script setup>
// 这里要接收外边传进来的一个值 show-back
// props专门用于接收外边值进来的值
const props = defineProps({
  showBack: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/scss/comm.scss";
.title-bar {
  background-color: $primaryColor;
  height: 45px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .left-back {
    position: absolute;
    left: 10px;
  }
  .right-menu-box {
    position: absolute;
    right: 10px;
    display: flex;
    align-items: center;
    // :deep可以设置插槽从外边插入进来元素的样式
    :deep(img) {
      width: 20px;
      height: 20px;
      margin-left: 10px;
    }
  }
}
</style>
