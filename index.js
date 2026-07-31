import express from 'express' //TYPE MODULE
//const express = require("express")--> TYPE common JS

const app = express() // Inicializando o express - new

app.get("/api/somar", (req, res) => {
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)
    //const exemplo = "batata" 
    //let exemploAlterar = 0
    //exemploAlterar = "batata"
    res.send({ message: num1 + num2 })
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})