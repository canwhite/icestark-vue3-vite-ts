<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import Layout from './layouts/BasicLayout.vue'
  import { onMounted, ref,watch ,computed,onUpdated} from 'vue';
  import start from '@ice/stark/lib/start';
  import { registerMicroApps } from '@ice/stark/lib/apps';
  import { useRouter ,useRoute} from 'vue-router'
  import  {useLoginStore} from '@/store/login'
  const router = useRouter();
  let loading = ref(false);
  let microAppsActive = ref(false);
  const route =  useRoute();
  //前置路由做个监听
  const loginStore = useLoginStore();
  const isLogin = computed(() => loginStore.isLogin)

  //loginStore的变化顺序时先onMounted，再守卫，再updated
  router.beforeEach((to, from, next) => {
    if(to.path == "/login") {
      loginStore.setTrue();
    }else{
      loginStore.setFalse();
    }
    next();
  });

  onUpdated(() => {
    /*console.log("--isLogin--",isLogin.value); */
    
  })
  onMounted(() => {
    const container = document.getElementById('container') as HTMLElement;
    console.log("isLogin",isLogin.value);
    registerMicroApps([
      {
        name: 'seller',
        activePath: '/seller',
        title: '商家平台',
        loadScriptMode: 'import',
        // React app demo: https://github.com/ice-lab/react-materials/tree/master/scaffolds/icestark-child
        entry: 'http://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-seller-ice-vite/index.html',
        container,
      }, {
        name: 'waiter',
        activePath: '/waiter',
        title: '小二平台',
        loadScriptMode: 'import',
        entry: 'http://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-vue3-vite/index.html',
        container,
      }
    ]);
  

    start({
      onLoadingApp: () => {
        loading.value = true;
      },
      onFinishLoading: () => {
        loading.value = false;
      },
      onRouteChange: (_, pathname) => {
        // 处理微应用间跳转无法触发 Vue Router 响应
        router
          .push(pathname)
          .catch(() => {})
      },
      onActiveApps: (activeApps) => {
        microAppsActive.value = !!(activeApps || []).length;
      }
    });
  })

</script>

<template>
  <div id="app">
    <div v-if="!isLogin">
      <layout />
    </div>
    <div v-if="!isLogin" class="content" v-loading="loading">
      <div id="container"></div>
      <router-view v-if="!microAppsActive" />
    </div>

    <!-- 登录状态切单页 -->
    <div v-if="isLogin">
      <router-view  />
    </div>

  </div>

</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100vh;
    display: flex;
  }
  body {
    margin: 0;
    padding: 0;
  }
  .content {
    flex: 1;
    margin: 40px;
  }
  .el-rwo {
    height: 100%;
  }
</style>
