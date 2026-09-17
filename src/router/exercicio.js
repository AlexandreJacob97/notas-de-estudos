import express from "express"
import ControllerExercicio from '../controller/exercicio.js'

const router = express.Router()

//exemplo de get
//localhost:3000/api/potato?potato=20&tomato=20
router.get("/api/potator", ControllerExercicio.Potator)
//exemplo de params
//exercicio 1
router.post("/api/somar", ControllerExercicio.Somar)
//exercicio 2 
router.post("/api/salario", ControllerExercicio.Salario)
//exercicio 3
router.post("/api/peso", ControllerExercicio.Peso)
//exercicio 4
router.post("/api/temp", ControllerExercicio.Temp )
//exercicio 5
router.post("/api/milhas", ControllerExercicio.Milhas )
//exercicio 6
router.post("/api/tempo", ControllerExercicio.Tempo )
//exercicio 7
router.post("/api/metros", ControllerExercicio.Metros )


export default router