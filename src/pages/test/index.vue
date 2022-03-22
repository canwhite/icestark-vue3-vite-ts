<script lang="ts" setup>

import  useRequest from '@/libs/useRequest'
import { onMounted, ref,reactive,watch,computed ,nextTick,onBeforeMount} from 'vue';
import List from '@/components/List.vue'

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
watch(()=> test, (newValue, oldValue) => {
  //主要是使用new值，来撬动其它值
  console.log("newValue",newValue)
},{
  immediate: true, // 绑定时加载
}
)

//computed取代filter
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
  
})

function getData(params:any) {
  console.log("--params--",params);
  // console.log("--createRef--",createRef.value.count);
}

</script>

<template>
  <div class="test">
    <p>{{testComputed}}-{{data.test}}</p>
    <!-- props传值的时候不需要双引号 -->
    <p> 
      <List  :list = data.list @send = getData ref = createRef /> 
    </p>
  </div>
</template>
