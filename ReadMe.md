# 一·项目的初始化

## 1 npm的初始化

```
1 npm init -y
```

生成`package.json`文件：

- 记录项目的依赖

## 2 git 初始化

```
2 git init
```
git commit -m
生成'.git'隐藏文件夹，git的本地仓库

## 3 创建ReadMe额文件

# 二.搭建项目

## 1  安装koa框架

```npm
1 npm install koa
```

## 2 编写最基本的app

创建 ``src/main.js``

```
const Koa=require('koa')


const app=new Koa()
app.use((ctx,next)=>{
  ctx.body='hello world'
})

app.listen(3000,()=>{
    console.log('server is running on http://localhost:3000')
}) 
```

## 3 测试

在终端，使用``node src/mian.js``

![image-20220823193900503](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220823193900503.png)

# 三.项目基本优化

## 1 自动重启服务

安装 nodemon工具

```
npm install nodemon
```

编写``package.json``脚本

```json
"scripts": {
    "dev":"nodemon ./src/main.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

执行``npm run dev``启动服务

![image-20220823195126839](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220823195126839.png)

## 2 读取配置文件

安装dotenv,读取根目录的``.env``文件，将配置写``process.env``中

```
npm install dotenv
```

创建``.env``文件

```
APP_PORT=8000
```

创建``src/config/config.default.js``

```
const dotenv=require('dotenv')

dotenv.config()

//console.log(process.env.APP_PORT)
module.exports=process.env

```

改写``main.js``

```
const Koa=require('koa')

const{APP_PORT}=require('./config/config.default')


const app=new Koa()
app.use((ctx,next)=>{
  ctx.body='hello api'
})

app.listen(APP_PORT,()=>{
    console.log(`server is running on http://localhost:${APP_PORT}`)
}) 
```

# 四.添加路由

路由：根据不同的URL，调用对应函数

## 1 安装Koa-router

```
1 npm install Koa-router
```

步骤：

 1.导入包

2. 实例化对象
3. 编写路由
4. 注册中间件

## 2 编写路由

创建``src/router``目录,编写``user.router.js``

```js
 const Router=require('@koa/router')

const router=new Router({prefix:'/users'})

//GET /users/
router.get('/',(ctx,next)=>{
    ctx.body='hello index'
})

module.exports=router
```

## 3 改写main.js

```js
const Koa=require('koa')

const{APP_PORT}=require('./config/config.default')

const userRouter=require('./router/user.route')

const app=new Koa()

app.use(userRouter.routes())

app.use((ctx,next)=>{
  ctx.body='hello api'
})

app.listen(APP_PORT,()=>{
    console.log(`server is running on http://localhost:${APP_PORT}`)
}) 
```

# 五.目录结构优化

## 1将http服务和app业务拆分

创建``src/app/index.js``

```
const Koa=require('koa')

const userRouter=require('../router/user.route')

const app=new Koa()

app.use(userRouter.routes())


module.exports=app
```

改写``mian.js``

```
const{APP_PORT}=require('./config/config.default')

const app=require('./app')

app.listen(APP_PORT,()=>{
    console.log(`server is running on http://localhost:${APP_PORT}`)
}) 
```

















