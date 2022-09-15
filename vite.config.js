import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
// 自动导入composition api 和 生成全局typescript说明
import AutoImport from 'unplugin-auto-import/vite'
// 自动按需导入组件和注册组件
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import * as path from 'path'

import {viteMockServe} from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        {
          axios: [
            ['default', 'axios']
          ]
        }
      ],
      // 解析器，例如element-plus的ElementPlusResolver
      resolvers: [ElementPlusResolver()],
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      dts: true // 根目录自动生成auto-import.d.ts  "src/auto-import.d.ts"  生成 `auto-import.d.ts` 全局声明
    }),
    viteMockServe({
      logger: true,
      watchFiles: true, // 监视文件更改
      mockPath: 'mock', // 解析根目录下的mock文件夹
      supportTs: true, // 打开后，可以读取 ts 文件模块。
      localEnabled: true,
      prodEnabled: true // 生产打包开关
    }),
    Components({
      resolvers: [ElementPlusResolver()] // ElementPlus按需加载
    })
  ],
  resolve: {
    // src目录别名
    alias: {
      '@': path.join(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      // css 全局变量
      scss: {
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  },
})
