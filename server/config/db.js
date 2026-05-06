const Sequelize = require('sequelize')

const sequelize = new Sequelize('dev', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: true,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,//你的连接10s内没有操作，就自动断开
    },
})

sequelize.authenticate().then(() => {
    console.log('连接成功')
}).catch((error) => {
    console.error('连接失败')
})

//根据模型自动创建表格
sequelize.sync()
module.exports = sequelize