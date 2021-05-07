const path = require('path')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const ts = require('rollup-plugin-typescript2')
const vue = require('rollup-plugin-vue')
const { babel } = require('@rollup/plugin-babel')
const less = require('rollup-plugin-less')
const jsx = require("acorn-jsx")
const packageJSON = require('../package.json')

const external = ['vue'];
const globals = { vue: 'Vue' };

const getPath = _path => path.resolve(__dirname, _path);

const extensions = [
  '.js',
  '.ts',
  '.tsx'
]

// ts
const tsPlugin = ts({
  tsconfig: getPath('../tsconfig.json'), // 导入本地ts配置
  extensions
})

// eslint
// const esPlugin = eslint({
//   throwOnError: true,
//   include: ['components/**/*.ts'],
//   exclude: ['node_modules/**', 'lib/**']
// })

// 基础配置
const commonConf = (input, cssOutput) => {
  if(!input) return;
  
  return {
    input,
    plugins:[
      // esPlugin,
      vue(),
      tsPlugin,
      nodeResolve({ mainFields: ["module", "main", "browser"] }),
      commonjs({ extensions, sourceMap: true }),
      babel({ babelHelpers: "bundled", extensions }), // babelHelpers是bable的最佳实践方案 extensions编译的扩展文件
      less({
        output: cssOutput,
      }),
      // terser()
    ],
    acornInjectPlugins: [jsx()],
    external: ['vue'],
  }
}
// 需要导出的模块类型
const outputMap = (output) => {
  if(!output) return;
  return {
    file: output, // es6模块
    format: 'es',
    sourcemap: true,
    globals,
  }
}

module.exports = {
  outputMap,
  commonConf,
}


// const buildConf = options => Object.assign({}, commonConf, options)

// export default outputMap.map(output => buildConf({output: {
//   name: packageJSON.name,
//   ...output,
// }}))