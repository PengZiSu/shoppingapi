const {DataTypes}=require('sequelize')

const seq=require('../db/seq')

//创建模型(Model zd_user -> zd_users)
const User=seq.define('zd_user',{
    //id 会被sequelize自动创建,管理
    user_name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        comment:'用户名,唯一',
        
    },
    password:{
        type:DataTypes.CHAR(64),
        allowNull:false,
        comment:'密码'
    },
    is_admin:{
         type:DataTypes.BOOLEAN,
         defaultValue:0,
         comment:'是否为管理员,0:不是管理员(默认);1:是管理员'
    }, 
}
// {
//   timestamps:false
// }
)
//强制同步数据库(创建数据表)
// User.sync({force:true})//强制创建数据表,若已存在数据表,会删除数据表再创建新数据表

module.exports=User