import pageRoutes from './router.config';
import { defineConfig } from 'umi';

export default defineConfig({
  dynamicImport: {
    loading: '@/components/PageLoading',
  },
  plugins: ['@alitajs/hd'],
  hd: {
    theme: {},
  },
  antd: { mobile: false },
  title: '比心',
  routes: pageRoutes,
  dva: {
    hmr: true,
    skipModelValidate: false,
  },
  'dva-enhance': {},
  targets: {
    ie: 11,
  },
  lessLoader: {
    javascriptEnabled: true,
  },
  history: { type: 'browser' },
  hash: true,
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:8080',
      // target: 'http://test-miao.bixin.cn/',
      changeOrigin: true,
    },
  },
});
