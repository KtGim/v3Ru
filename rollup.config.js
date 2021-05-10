import fs from 'fs'
import path from 'path'

const { commonConf, outputMap } = require('./rollupConfig/baseOptions');

const root = path.resolve(__dirname, './components')
const o = path.resolve(__dirname, './lib');

// module.exports = {
//   ...commonConf(`${root}/index.ts`, './lib/index.css'),
//   output: {
//     // file: 'dist/bundle.js', // 代码拆分需要输出多个文件，所以不能使用file
//     // format: 'iife' // 使用代码拆分打包，输出格式不能是iife,因为自执行函数会把所有的模块都放到同一个函数当中，并不会像webpack一样有引导代码，所以iife没有办法实现代码拆分
//     dir: 'lib', // 需要输出多个文件可以使用dir的参数
//     format: 'esm', // 想要使用代码查分只能使用amd或者CommonJS，那在浏览器中只能使用amd标准
//   }
// }

module.exports = fs.readdirSync(root)
    .filter(item => fs.statSync(path.resolve(root, item)).isDirectory())
    .map(item => {
        // 获取每个包的配置文件
        return {
            ...commonConf(`${root}/${item}/index.tsx`),
            output: {
              ...outputMap(`${o}/${item}/index.js`)
            },
        }
    }).concat({
      ...commonConf(`${root}/index.ts`),
      output: {
        ...outputMap(`${o}/index.js`)
      },
    })