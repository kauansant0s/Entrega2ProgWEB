const bd = require('./bd')

const Time = bd.sequelize.define('competicao', {
    nomeTime: {
        type: bd.Sequelize.STRING
    },
    cidade: {
        type: bd.Sequelize.STRING
    },
    estado: {
        type: bd.Sequelize.STRING
    },
    email: {
        type: bd.Sequelize.STRING
    },
    numJog: {
        type: bd.Sequelize.INTEGER
    }
})
//Time.sync({force: true})

module.exports = Time 