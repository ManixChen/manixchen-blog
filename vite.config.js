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
  base: '/manix/',
  //静态资源服务的文件夹
  publicDir: "manix", 
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
    // host: "localhost",
    // https: false,//是否启用 http 2
    // cors: true,//为开发服务器配置 CORS , 默认启用并允许任何源
    // open: true,//服务启动时自动在浏览器中打开应用
    // port: "9000",
    // strictPort: false, //设为true时端口被占用则直接退出，不会尝试下一个可用端口
    // force: true,//是否强制依赖预构建
    // hmr: false,//禁用或配置 HMR 连接 
    proxy: {
      '^/api': {
        target: 'http://t.weather.sojson.com/', //目标源，目标服务器，真实请求地址()会替换当前环境中的本地服务器baeurl
        changeOrigin: true, //支持跨域
        rewrite: (path) => path.replace(/^\/api/, "/api"), //重写真实路径,替换/api
      }
    } 
  }
});
