//Node.js 内置模块
const path = require("path"); 

// 导出模块
module.exports = {
  // mode: 'development',
  entry: './src/webpack/main.js', //配置入口文件
  output: {
    path: path.resolve(__dirname, './dist'), //输出路径，__dirname：当前文件所在路径
    filename: 'bundle.js' //输出文件
  },
  module: {
    // 参考 https://webpack.js.org/loaders/css-loader/
    rules: [
      {
        test: /\.css$/i, //打包规则应用到以 css 结尾的文件上
        use: ["style-loader", "css-loader"], // css-loader 是将 css 装载到 javascript，style-loader 是让 javascript 认识 css
      }
    ]
  }
}