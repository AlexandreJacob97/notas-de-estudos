import express from 'express' //TYPE MODULE
//const express = require("express")--> TYPE common JS

const app = express() // Inicializando o express - new
app.use(express.json())




//exemplo de get
//localhost:3000/api/potato?potato=20&tomato=20

app.get("/api/potato", (req, res) => {
    const potato = Number(req.query.potato)
    const tomato = Number(req.query.tomato)

    res.send({ resultado: potato + tomato })
})

//exemplo de params
//http://localhost:3000/api/exemplo1/2?exemplo2=robson
app.get("/api/exemplo1/:id", (req, res) => {
    const id = Number(req.params.id)
    const exemplo2 = req.query.exemplo2

    res.send({ numero: id, nome: exemplo2 })
})

//exercicio 1
app.post("/api/somar", (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2
    //const exemplo = "batata" 
    //let exemploAlterar = 0
    //exemploAlterar = "batata"
    res.send({ resultado: num1 + num2 })
})
//exercicio 2 
//http://localhost:3000/api/salario/2000/10
app.post("/api/salario", (req, res) => {
    const valorGanho = req.body.valor
    const horasTrabalhadas = req.body.hora

    const resultado = valorGanho * horasTrabalhadas
    res.send({ resultado })
})
//exercicio 3
//http://localhost:3000/api/peso?num1=90&num2=100&num3=120&num4=80&num5=150
app.post("/api/peso", (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2
    const num3 = req.body.num3
    const num4 = req.body.num4
    const num5 = req.body.num5
    res.send({ message: (num1 + num2 + num3 + num4 + num5) / 5 })

})



//exercicio 4
//http://localhost:3000/api/temp?celsius=40
app.post("/api/temp", (req, res) => {
    const celsius = req.body.celsius

    const fahrenheit = (9 * celsius + 160) / 5
    res.send({ message: fahrenheit })
})

//exercicio 5
//http://localhost:3000/api/milhas?quilometros=100
app.post("/api/milhas", (req, res) => {
    const quilometros = req.body.quilometros

    const milhas = quilometros * 1.60934
    res.send({ milhas })
})

//exercicio 6
app.post("/api/tempo", (req, res) => {
    const segundos = req.body.segundos
    const minutos = segundos / 60
    const horas = segundos / 3600

    res.send({ horas: horas, minutos: minutos, segundos: segundos })
})
//exercicio 7
app.post("/api/metros", (req, res) => {
    const quilometros = req.body.quilometros
    const metros = quilometros * 1000
    const centimetros = quilometros * 100000

    res.send({ metros: metros, centimetros: centimetros })
})
//exercicio 8
app.post("/api/tabuada", (req, res) => {
    const exemplo = req.body.exemplo

    const num0 = exemplo * 0
    const num1 = exemplo * 1
    const num2 = exemplo * 2
    const num3 = exemplo * 3
    const num4 = exemplo * 4
    const num5 = exemplo * 5
    const num6 = exemplo * 6
    const num7 = exemplo * 7
    const num8 = exemplo * 8
    const num9 = exemplo * 9
    const num10 = exemplo * 10

    res.send({
        x0: num0,
        x1: num1,
        x2: num2,
        x3: num3,
        x4: num4,
        x5: num5,
        x6: num6,
        x7: num7,
        x8: num8,
        x9: num9,
        x10: num10
    })


})
//exercicio com for array
app.post("/api/multiplicador", (req, res) => {
    let index = []
    const number = Number(req.body.number)
    for (let index = 0; index <= 10; i++) {
        number.push('${number} x ${i} = ${number * i}')
    }
    return index;
    res.send({ resultado: number })
})

app.post("/api/Solmar",(req,res) =>{
const num1 = req.body.num1
const num2 = req.body.num2

res.send({resultado: num1 + num2})
} )


app.get("/api/dividir/:num1/:num2",(req,res) =>{
const num1 = Number(req.params.num1)
const num2 = Number(req.params.num2)
const resultado = num1 / num2

res.send({Mensagem: resultado})
} )
app.get("/api/mult",(req,res) =>{
const num1 = req.query.num1
const num2 = req.query.num2
const resultado = num1 * num2

res.send({Mensagem: resultado})
} )
app.listen(3000, () => {
    console.log("Servidor na porta 3000")
})