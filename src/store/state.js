import { useStorage } from "@vueuse/core";
//reactive and storage
const mstate = useStorage('my-store', 
    { 
        hello: 'hi', 
        greeting: 'Hello'   
    }
)
export default mstate.value;