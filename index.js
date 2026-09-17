import express from 'express' //TYPE MODULE
//const express = require("express")--> TYPE common JS
import router from "./src/router/exercicio.js"

const app = express() // Inicializando o express - new
app.use(express.json())

app.use(router)

app.listen(3000, () =>{
    console.log("Servidor ouvindo na porta 3000")
})