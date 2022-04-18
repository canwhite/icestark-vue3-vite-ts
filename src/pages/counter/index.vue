<template>
  <div class="home">
    <p> about page </p>
    <p> {{count}},{{countPow2}} </p>
    <p> 
      <button @click="increment">+1</button>&nbsp;
      <button @click="subtraction">-1</button>&nbsp;
      <button @click="reset">reset</button> 
    </p>
  </div>
</template>
<script>
import {useCounterStore} from "@/store/counter"
import {mapStores,mapState,mapActions} from "pinia"
import {useRoute} from "vue-router"

import mstate from "@/store/state"

export default {
  computed:{
    ...mapStores(useCounterStore),
    //state和getter都在这里合着
    ...mapState(useCounterStore,["count","countPow2"]),
  },
  methods:{
    ...mapActions(useCounterStore,["increment","subtraction","reset"])
  },
  mounted() {
    //原始方法
    console.log("----",this.$route.query);

    //新方法
    const route = useRoute();
    console.log("route",route.query);
    console.log("state",mstate.hello)//全局一致
    
  },

}
</script>

