<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const innerJump = () => {

  /*----------------------
  关于vue2和vue3路由的一些总结
  -----------------------*/

  router.push({path:"/counter",query:{
    userId:"123"
  }})
  /*
    获取有两种方法
    1.vue2原始写法
    console.log("----",this.$route.query);

    2.用钩子的方法
    const route = useRoute();
    console.log("route",route.query);
  */
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

    <h1 class="text-3xl font-bold underline">
        Hello world!
    </h1>
  </div>
</template>

