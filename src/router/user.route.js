const Router=require('koa-router')

const {uservalidator,verifyUser,crpytPassword,verifyLogin}=require('../middleware/user.middleware')
const {auth}=require('../middleware/auth.middleware')
const {register,login,changePasssword}=require('../controller/user.controller')

const router=new Router({prefix:'/users'})

//注册接口
router.post('/register',uservalidator,verifyUser,crpytPassword,register)

//登录接口
router.post('/login',uservalidator,verifyLogin,login)

//修改密码接口
router.patch('/',auth,crpytPassword,changePasssword)

module.exports=router