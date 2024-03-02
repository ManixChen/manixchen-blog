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
    vue({
      script: {
        // 开启 defineModel
        defineModel: true
      }
    }),
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
  base: '/manix/',//远程部署哪个目录就配置啥，如果是根目录就为空，或者不配 
  publicDir: "/manix/", //静态资源服务的文件夹
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
  },
  //打包配置
 build: { 
  // target: "modules", //浏览器兼容性  "esnext"|"modules" 
  // outDir: "dist",//指定输出路径 
  // assetsDir: "assets",//生成静态资源的存放路径 
  assetsInlineLimit: 4096, //小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项 
  // cssCodeSplit: true, //启用/禁用 CSS 代码拆分
  // sourcemap: false,//构建后是否生成 source map 文件
  // rollupOptions: {//自定义底层的 Rollup 打包配置
  // },
  // commonjsOptions: {//@rollup/plugin-commonjs 插件的选项
  // },
  // lib: { //构建的库
  // },
  // manifest: false,//当设置为 true，构建后将会生成 manifest.json 文件
  // // 设置为 false 可以禁用最小化混淆，
  // // 或是用来指定使用哪种混淆器
  // // boolean | 'terser' | 'esbuild'
  // minify: "terser", //terser 构建后文件体积更小
  //传递给 Terser 的更多 minify 选项。
  terserOptions: {
    compress:{
      drop_console: true,//移除所有console
      drop_debugger: true
    }
  },  
  // write: true,//设置为 false 来禁用将构建后的文件写入磁盘
  // //默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
  // emptyOutDir: true, 
  brotliSize: true, //启用/禁用 brotli 压缩大小报告
  chunkSizeWarningLimit: 1500 //chunk 大小警告的限制
 },
//  ssr: {
//   // 列出的是要为 SSR 强制外部化的依赖
//   external: [],
//   //列出的是防止被 SSR 外部化依赖项
//   noExternal: [
//   ]
//  } 
});
