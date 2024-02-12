// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///F:/Vue_code/vue_personal/manixchen-blog/node_modules/.store/vite@5.1.1/node_modules/vite/dist/node/index.js";
import vue from "file:///F:/Vue_code/vue_personal/manixchen-blog/node_modules/.store/@vitejs+plugin-vue@5.0.4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///F:/Vue_code/vue_personal/manixchen-blog/node_modules/.store/unplugin-auto-import@0.17.5/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///F:/Vue_code/vue_personal/manixchen-blog/node_modules/.store/unplugin-vue-components@0.26.0/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///F:/Vue_code/vue_personal/manixchen-blog/node_modules/.store/unplugin-vue-components@0.26.0/node_modules/unplugin-vue-components/dist/resolvers.js";
var __vite_injected_original_import_meta_url = "file:///F:/Vue_code/vue_personal/manixchen-blog/vite.config.js";
var vite_config_default = defineConfig({
  define: { "process.env": {} },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [
        ElementPlusResolver({ importStyle: "sass" })
      ]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`
      }
    }
  },
  server: {
    proxy: {
      "^/api": {
        target: "http://t.weather.sojson.com/",
        //目标源，目标服务器，真实请求地址
        changeOrigin: true,
        //支持跨域
        rewrite: (path) => path.replace(/^\/api/, "/api")
        //重写真实路径,替换/api
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxWdWVfY29kZVxcXFx2dWVfcGVyc29uYWxcXFxcbWFuaXhjaGVuLWJsb2dcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXFZ1ZV9jb2RlXFxcXHZ1ZV9wZXJzb25hbFxcXFxtYW5peGNoZW4tYmxvZ1xcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovVnVlX2NvZGUvdnVlX3BlcnNvbmFsL21hbml4Y2hlbi1ibG9nL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSBcIm5vZGU6dXJsXCI7XG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gXCJ1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlXCI7XG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZVwiO1xuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnNcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGRlZmluZTogeydwcm9jZXNzLmVudic6IHt9fSxcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcbiAgICB9KSxcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIHJlc29sdmVyczogW1xuICAgICAgICBFbGVtZW50UGx1c1Jlc29sdmVyKHtpbXBvcnRTdHlsZTogXCJzYXNzXCIsfSksIFxuICAgICAgXSxcbiAgICB9KSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogZmlsZVVSTFRvUGF0aChuZXcgVVJMKFwiLi9zcmNcIiwgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgfSxcbiAgfSwgXG4gIGNzczoge1xuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgIHNjc3M6IHtcbiAgICAgICAgYWRkaXRpb25hbERhdGE6IGBAdXNlIFwiQC9zdHlsZXMvZWxlbWVudC9pbmRleC5zY3NzXCIgYXMgKjtgLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwcm94eToge1xuICAgICAgJ14vYXBpJzoge1xuICAgICAgICB0YXJnZXQ6ICdodHRwOi8vdC53ZWF0aGVyLnNvanNvbi5jb20vJywgLy9cdTc2RUVcdTY4MDdcdTZFOTBcdUZGMENcdTc2RUVcdTY4MDdcdTY3MERcdTUyQTFcdTU2NjhcdUZGMENcdTc3MUZcdTVCOUVcdThCRjdcdTZDNDJcdTU3MzBcdTU3NDBcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLCAvL1x1NjUyRlx1NjMwMVx1OERFOFx1NTdERlxuICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgXCIvYXBpXCIpLCAvL1x1OTFDRFx1NTE5OVx1NzcxRlx1NUI5RVx1OERFRlx1NUY4NCxcdTY2RkZcdTYzNjIvYXBpXG4gICAgICB9XG4gICAgfSBcbiAgfVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStTLFNBQVMsZUFBZSxXQUFXO0FBRWxWLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjtBQU55SixJQUFNLDJDQUEyQztBQVM5TyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixRQUFRLEVBQUMsZUFBZSxDQUFDLEVBQUM7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxJQUNuQyxDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxXQUFXO0FBQUEsUUFDVCxvQkFBb0IsRUFBQyxhQUFhLE9BQU8sQ0FBQztBQUFBLE1BQzVDO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLFNBQVM7QUFBQSxRQUNQLFFBQVE7QUFBQTtBQUFBLFFBQ1IsY0FBYztBQUFBO0FBQUEsUUFDZCxTQUFTLENBQUMsU0FBUyxLQUFLLFFBQVEsVUFBVSxNQUFNO0FBQUE7QUFBQSxNQUNsRDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
