import { defineStore } from "pinia";
export const useCounterStore =  defineStore("counter",{
    state:()=>{
        return{
            count:0
        }
    },
    actions:{
        increment(){
            this.count ++ ;
        },
        reset(){
            this.count = 0;
        },
        subtraction(){
            this.count --;
        }
    },
    //computed
    getters:{
        countPow2(state) {
            return state.count ** 2;
        },
    },
    //持久化处理
    persist: {
        enabled: true
    }
})

