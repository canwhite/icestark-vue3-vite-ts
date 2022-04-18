<script lang = "ts" setup>
import {toRefs,onMounted,ref} from 'vue'

//--基于ts的使用
// 采用ts专有声明，有默认值需要使用withDefaults，如果没有默认值，直接defineProps即可

interface Props {
    list?: string[]
}
/*
param1:defineProps 执行类型，
param2:对象里边初始化
*/
const props = withDefaults(defineProps<Props>(), {
    //初始化
    list:()=>[]
}) 


//--基于js的使用
/* defineProps({ // 非ts专有声明
  list: {
    default: [] as 
  }
}) */

    
/*
defineEmits
接收方法名数组，然后返回emit方法
后期调用和之前差不多
*/
const emit= defineEmits(['send'])
  
const clickThis = () => {
  emit('send',2)
}


//expose，组件自己暴露属性
/* const count = ref<number>(123456)
defineExpose({
  count
}) */

</script>


<template>
  <h1>List Page</h1>
  <p v-for="(item,index) in list" :key="index"> {{item}}</p>
  <div @click="clickThis">点我</div>
</template>
