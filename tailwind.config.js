module.exports = {
  content: ["./index.html", "./src/*.{js,vue}", "./src/**/*.{js,vue}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#F7504D",
        secondColor: "#4791FF",
        warningColor: "#FF9E21",
        successColor: "#01BB84"
      }
    },

  },
  plugins: [],
  corePlugins: {
    //禁用tailwind的css自带的初始化操作
    preflight: false
  }
}
