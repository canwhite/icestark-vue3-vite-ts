<script lang="ts" setup>

import  useRequest from '@/libs/useRequest'
import { onMounted, ref,reactive,watch,computed ,nextTick,onBeforeMount,watchEffect} from 'vue';
import List from '@/components/List.vue'
import Layout from "@/components/Layout.vue"
import mstate from "@/store/state"


type DataType = {
  test:string,
  list?:string[]
} 
//ref指定原始值,.value赋值，test取值
const  test = ref<string>("");

//reactive指定引用类型，直接取用属性
const data = reactive<DataType>({
  test:"",
  list: []  
})

const createRef = ref(null);

//watch
watch(test, (newValue, oldValue) => {
  //主要是使用new值，来撬动其它值
  console.log("watch test",newValue)
},{
  immediate: true, // 绑定时加载
}
)

watch(data, (pv, nv) => {
  //主要是使用new值，来撬动其它值
  console.log("watch ref pv",pv.test)
},{
  immediate: true, // 绑定时加载
}
)


//建议使用watchEffect和computed
watchEffect(() => {
    test.value,// 对test.value进行监听
    data.test, // 可以处理到对应属性
    console.log("test.value",test.value);
    console.log("data.text",data.test);
})

test.value == "780"
data.test = "340";


const testComputed = computed(() => {
  if(test.value == "123") return "456";
})

//nextTick
nextTick(()=>{
  //pass

})

onBeforeMount(() => {
    data.list= ["123","456","789"]
    // console.log("--list--",list.value)

})


//onMounted
onMounted(async () => {
    //请求test

    const { isFetching:loading, error, data:weather } = await useRequest("/getWeather.php").post({city:'北京'}).json();

    console.log("--data--",weather);
    console.log("loading",loading);
    //给原始和引用确定值
    test.value = "123";
    data.test = "789";

    // 异步也不影响
    setTimeout(() => {
       mstate.hello = "456";
    }, 1000);

      
})

function getData(params:any) {
  console.log("--params--",params);
  // console.log("--createRef--",createRef.value.count);
}

//直接setup 语法糖里边不需要return
</script>

<template>
  <div class="test">
    <p>{{testComputed}}-{{data.test}}</p>
    <!-- props传值的时候不需要双引号 -->
    <p> 
      <List  :list = data.list @send = getData ref = createRef /> 
    </p>
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
