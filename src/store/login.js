import { defineStore } from "pinia";
// add pinia by zack
export const useLoginStore =  defineStore("login",{
    state:()=>{
        return{
            isLogin:false
        }
    },
    actions:{
        setFalse(){
            this.isLogin = false;
        },
        setTrue(){
            this.isLogin = true;
        }

    },
    persist: {
        enabled: true
    }
})
