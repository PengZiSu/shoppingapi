//1.导入koa-router
const Router=require('koa-router')

//中间件
const {auth}=require('../middleware/auth.middleware')
const {validator}=require('../middleware/cart.middleware')

//控制器
const {add}=require('../controller/cart.controller')


//2.实例化router对象
const router=new Router({prefix:'/carts'})

//3.编写路由规则

//3.1添加到购物车接口：登录，格式

router.post('/',auth,validator,add)

//4.导入router对象
module.exports=router