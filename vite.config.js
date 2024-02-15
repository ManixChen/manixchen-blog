import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver' 

// https://vitejs.dev/config/
export default defineConfig({
  // define: {'process.env': {}},
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        // Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
    }),
    Components({
      resolvers: [
         // Auto register icon components
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep'],
        }),
        ElementPlusResolver({importStyle: "sass",}), 
        
      ],
    }),
    Icons({
      autoInstall: true,
    }), 
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  }, 
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`,
      },
    },
  },
  // 解决跨域需求
  server: {
    proxy: {
      '^/api': {
        target: 'http://t.weather.sojson.com/', //目标源，目标服务器，真实请求地址()会替换当前环境中的本地服务器baeurl
        changeOrigin: true, //支持跨域
        rewrite: (path) => path.replace(/^\/api/, "/api"), //重写真实路径,替换/api
      }
    } 
  }
});
