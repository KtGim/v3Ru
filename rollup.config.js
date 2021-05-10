import fs from 'fs'
import path from 'path'

const { commonConf, outputMap } = require('./rollupConfig/baseOptions');

const root = path.resolve(__dirname, './components')
const o = path.resolve(__dirname, './lib');
const components = fs
  .readdirSync(root)
    .filter((f) =>
      fs.statSync(path.join(root, f)).isDirectory()
    )

const entries = {
  index: './components/index.ts',
  ...components.reduce((obj, name) => {
    obj[name] = (root + `/${name}/index.tsx`)
    return obj
  }, {})
}

console.log(entries);

module.exports = {
  ...commonConf(`${root}/index.ts`),
  input: entries,
  output: {
    format: 'cjs',
    dir: 'lib',
    exports: 'named'
  },
}


// module.exports = fs.readdirSync(root)
//     .filter(item => fs.statSync(path.resolve(root, item)).isDirectory())
//     .map(item => {
//         // 获取每个包的配置文件
//         return {
//             plugins:[
//       // esPlugin,
//       vue({
//         css: true,
//         compileTemplate: true
//       }),
//       less({
//         output: output ? output : false, 
//         insert: true, // 自动 添加到 header 标签内
//       }),
//       tsPlugin,
//       babel({
//         babelHelpers: "runtime",
//         extensions,
//         exclude: 'node_modules/**', // 防止打包node_modules下的文件
//       }), // babelHelpers是bable的最佳实践方案 extensions编译的扩展文件
//       nodeResolve(),
//       commonjs({ extensions, sourceMap: true }),
//       // terser()
//     ],
//     acornInjectPlugins: [jsx()],
//     external: ['vue'],
//     preserveSymlinks: true,
//             output: {
//               ...outputMap(`${o}/${item}/index.js`)
//             },
//         }
//     }).concat({
//       ...commonConf(`${root}/index.ts`),
//       output: {
//         ...outputMap(`${o}/index.js`)
//       },
//     })