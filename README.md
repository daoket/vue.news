## 安装脚手架
```
npm install -g @vue/cli

vue create my-app && cd my-app/ && yarn serve
```

## 打包后页面空白

babel.config.js
```
module.exports = {
  baseUrl: './',
}
```

## 修改端口

```
PORT=9527 vue-cli-service serve --open
```

参考： https://cli.vuejs.org/zh/config/#outputdir