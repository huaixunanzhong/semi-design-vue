import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';

const ignores = ['**/dist/**', '**/node_modules/**', '.*', 'scripts/**', '**/*.d.ts'];

export default [
  // 通用配置
  {
    ignores, // 忽略项
    extends: [eslint.configs.recommended, ...tseslint.configs.recommended, eslintConfigPrettier], // 继承规则
    plugins: {
      prettier: eslintPluginPrettier
    },
    languageOptions: {
      ecmaVersion: 'latest', // ecma语法支持版本
      sourceType: 'module', // 模块化类型
      parser: tseslint.parser // 解析器
    },
    rules: {
      // 自定义
      'no-var': 'error'
    }
  },
  // 前端配置
  {
    ignores,
    files: ['apps/semi-design-vue-pro/**/*.{ts,js,tsx,jsx,vue}', 'packages/components/**/*.{ts,js,tsx,jsx,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  },
  ...eslintPluginVue.configs['flat/recommended'],
  eslintConfigPrettier
  // TODO: 后续可以添加其他配置
];
