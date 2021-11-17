const Sequelize = require("sequelize")

const sequelize = new Sequelize('trabalho2web','postgres','titleofyoursextape',{
    host: "localhost",
    dialect: "postgres"
})

sequelize.authenticate().then(()=>{
    console.log("Conectado com o banco")
}).catch((erro)=>{
    console.log(`Erro na conexão: ${erro}`)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}