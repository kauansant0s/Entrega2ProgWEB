const express = require("express")
const app = express()
const port = 8095
const moment = require("moment")
const Time = require("./models/Time")
const handlebars = require("express-handlebars")

//template engine
app.engine("handlebars", handlebars({
    defaultLayout: 'main',
    helpers:{
        formatDate: (date)=>{
            return moment(date).format('DD/MM/YYYY')
        }
    }
}))
app.set('view engine', "handlebars")

//body parser
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//rotas
app.get("/",(req, res)=>{
    Time.findAll().then((times)=>{
        res.render('home',{times: times})
    })
})
app.get("/cadastrar-time", (req, res)=>{
    res.render('cadastro')
})
app.post("/cadastrado",(req, res)=>{
    Time.create({
        nomeTime: req.body.nomeTime,
        cidade: req.body.cidade,
        estado: req.body.estado,
        email: req.body.email,
        numJog: req.body.numJog,
        email: req.body.email
    }).then(()=>{
        res.redirect('/')
    }).catch((erro)=>{
        console.log(`Erro ao cadastrar time: ${erro}`)
        res.redirect('/')
    })
})

//Editar
app.get('/editar/:id',(req, res)=>{
    id=req.params.id
    res.render('editar')
})
app.post('/editar', (req, res)=>{
    Time.update({
        nomeTime: req.body.nomeTime,
        cidade: req.body.cidade,
        estado: req.body.estado,
        numJog: req.body.numJog,
        email: req.body.email
    },{
        where: {id: id},
    }).then(()=>{
        res.redirect('/')
    }).catch((erro)=>{
        console.log(`Erro ao editar: ${erro}`)
    })
})

//Excluir
app.get('/deletar/:id', (req, res)=>{
    Time.destroy({
        where: {'id': req.params.id}
    }).then(()=>{
        res.redirect('/')
        console.log('Time deletado!')
    }).catch((erro)=>{
        console.log(`Erro ao deletar time: ${erro}`)
    })
})

//abertura do servidor
app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})