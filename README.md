## icestark-vue3-vite-ts
base project , icestark + vue3 + ts + vite + pinia +vueuse


## run 
```
yarn install
yarn dev
```


## des

> 整体框架基于微服务框架icestack，方便项目变大时候的边界问题的处理  
> 语言做了ts和js的兼容配置，考虑安全性，建议ts  
> 状态管理使用了相当于vuex5的pinia，心智成本更低    
> vue3和vue2语法兼容  
> 打包 基于vite，已配置  
> ui框架基于element  

todo：需要对齐

## how to use

1. about 【icestack】  
[canwhite/qc-icestark-use](https://github.com/canwhite/qc-icestark-use)
2. about 【pinia】    
--src/pages/about/index.vue  
--src/pages/App.vue 
3. about 【setup + ts】  
--src/pages/test/index.vue
4. about 【request】
--src/libs/useRequst


## Online

https://icestark-framework-vue3-x.vercel.app/



### tailwind的配置
```
1.装包
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
--
generate both tailwind.config.js and postcss.config.js.


2.配置tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


3.main同级建一个index.css
放上
@tailwind base;
@tailwind components;
@tailwind utilities;

4.在main中引入
import './index.css'


5.使用


```
