import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve  } from "path";
// add configuration by zack
export default defineConfig({
  resolve:{
    alias:{
        "@":resolve(__dirname,"src"),
    }
  },
  plugins: [vue()],
  server:{
    host: '0.0.0.0',
    port: 8000,
    proxy: {
        '/api': {
          target: 'https://api2.jirengu.com',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
    },
  },
  css: {
		//css预处理
		preprocessorOptions: {
			scss: {
				//global样式多个用分号隔开
				additionalData: '@import "@/common/common.scss";'
			}
		}
	},
  base:"./",
  build:{
    outDir: 'dist',
    //关闭包大小计算
    brotliSize: false,
    rollupOptions:{
        input:{
            main:resolve(__dirname,'index.html'),
        },
        output: {
            chunkFileNames: 'static/js/[name]-[hash].js',
            entryFileNames: 'static/js/[name]-[hash].js',
            assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
    }
  }
});
            