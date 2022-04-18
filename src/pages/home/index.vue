<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const innerJump = () => {
  //相当于get的方法
  router.push({path:"/counter",query:{
    userId:"123"
  }})
};

const outerJump = () => {
  router.push('/seller')
}

</script>

<template>
  <div class="home">
    Home page

    <p><el-link type="primary" @click="innerJump">Counter</el-link></p>
    <p><el-link type="primary" @click="outerJump">Seller</el-link></p>
  </div>
</template>

