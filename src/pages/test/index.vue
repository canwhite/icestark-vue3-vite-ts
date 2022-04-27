<script lang="ts" setup>

import  useRequest from '@/libs/useRequest'
import { 
  onMounted,
  ref,
  reactive,
  watch,
  computed,
  nextTick,
  onBeforeMount,
  watchEffect
} from 'vue';
import List from '@/components/List.vue'
import Layout from "@/components/Layout.vue"
import mstate from "@/store/state"


type DataType = {
  test:string,
  list?:string[]
} 

/*--------------------------
原始值和引用值的一些初始化
---------------------------*/
//ref指定原始值,.value赋值，test取值
const  test = ref<string>("");

//reactive指定引用类型，直接取用属性
//reactive在直接给整体重新赋值之后会丢失响应性，但是给属性赋值不会出现这样的问题
//这一点ref没有问题
const data = reactive<DataType>({
  test:"",
  list: []  
})

const createRef = ref(null);

//数据监听，在回调函数中确定监听对象
//可以具体到reactive属性
watchEffect(() => {
    test.value,// 对test.value进行监听
    data.test, // 可以处理到对应属性
    console.log("test.value",test.value);
    console.log("data.text",data.test);
})

test.value == "780"
data.test = "340";

//computed取代filter，我们主要用get
const testComputed = computed(() => {
  if(test.value == "123") return "456";
})

/*----------------------------
nextTick和之前的用法差不多
-----------------------------*/
//nextTick
nextTick(()=>{}) //也可以主动调用刷新

onMounted(async () => {
    //数据请求
    const { isFetching:loading, error, data:weather } = await useRequest("/getWeather.php").post({city:'北京'}).json();
    console.log("--data--",weather); 
})


//父子通信
const getData = ref<number>(0)

//直接setup 语法糖里边不需要return
watchEffect(()=>{
  getData.value,
  console.log("123");
  console.log("getdata",getData);

})



</script>

<template>
  <div class="test">
    <p>{{testComputed}}-{{data.test}}</p>
    <!-- props传值的时候不需要双引号 -->
    <p> 
      <!-- 这里v-modal取代了@update -->
      <!-- 如果是驼峰传值,会变成key-key1 ，但是子组件中接收还是驼峰 -->
      <List  :list = [1,2,3,4]   v-model:send="getData" ref = createRef /> 
    </p>
    <p>{{getData}}</p>
    <p>
      <Layout>
        <!-- 用template操作，然后v-slot -->
        <template v-slot:header>
          <h1>Here might be a page title</h1>
        </template>
        <!-- 默认的不需要template -->
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </Layout>
    </p>
  </div>
</template>
