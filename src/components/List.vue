<script lang = "ts" setup>
import {toRefs,onMounted,ref} from 'vue'

//defineProps，最终确定使用这种
const props = defineProps<{
  list?: string[]
}>()

/*
defineEmits
接收方法名数组，然后返回emit方法
后期调用和之前差不多
*/
const emits = defineEmits<{
  (e: 'update:send', closed: boolean):void;
}>();

const clickThis = () => {
  emits('update:send',2)
}

</script>

<template>
  <h1>List Page</h1>
  <p v-for="(item,index) in list" :key="index"> {{item}}</p>
  <div class="w-full ml-[10px] mr-[10px] flex justify-center items-center border-2" 
    @click="clickThis">点我</div>
</template>
