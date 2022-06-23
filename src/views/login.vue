<template>
  <title-bar show-back> 登陆 </title-bar>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="username"
        name="手机号"
        label="手机号"
        placeholder="请填写手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="danger" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>
<script setup>
import { ref } from "vue";
import TitleBar from "../components/title-bar.vue";
const username = ref("");
const password = ref("");
</script>
<style scoped>
</style>