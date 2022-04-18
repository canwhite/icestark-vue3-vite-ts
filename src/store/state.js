import { useStorage } from "@vueuse/core";
const mstate = useStorage('my-store', 
    { 
        hello: 'hi', 
        greeting: 'Hello'   
    }
)
export default mstate.value;