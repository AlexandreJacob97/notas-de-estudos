import ServiceExercicio from "../service/exercicio.js"

class ControllerExercicio{

    Potator(req, res) {
        try{
    const potato = Number(req.query.potato)
    const tomato = Number(req.query.tomato)
    const potator = ServiceExercicio.Potator(potato, tomato)

    res.send({ resultado: potator })
        } catch (error){
            res.send({ Message: error.message })
        }
}
    Somar(req, res) {
        try{
    const num1 = req.body.num1
    const num2 = req.body.num2
    const somar = ServiceExercicio.Somar(num1, num2)
    //const exemplo = "batata" 
    //let exemploAlterar = 0
    //exemploAlterar = "batata"
    res.send({ somar })
    } catch (error){
        res.send({ Message: error.message })
    }
}

    Salario(req, res) {
        try{

        
    const valor = req.body.valor
    const hora = req.body.hora

    const salario = ServiceExercicio.Salario(valor, hora)
    res.send({ salario })
        } catch (error) {
            res.send({ Message: error.message })
        }
}

    Peso(req, res) {
        try{
    const num1 = req.body.num1
    const num2 = req.body.num2
    const num3 = req.body.num3
    const num4 = req.body.num4
    const num5 = req.body.num5
    const peso = ServiceExercicio.Peso((num1+num2+num3+num4+num5)/5)
    res.send({ peso })
        } catch (error) {
            res.send({ Message: error.message })
        }
}

    Temp(req, res) {
        try{
    const celsius = req.body.celsius

    const fahrenheit = (9 * celsius + 160) / 5
    res.send({ message: fahrenheit })
        } catch (error) {
            res.send({ message: error.message })
        }
}

    Milhas(req, res) {
        try{
    const quilometros = req.body.quilometros

    const milhas = quilometros * 1.60934
    res.send({ milhas })
        } catch (error) {
            res.send(error.message)
        }
}

    Tempo(req, res) {
    const segundos = req.body.segundos
    const minutos = segundos / 60
    const horas = segundos / 3600

    res.send({ horas: horas, minutos: minutos, segundos: segundos })
}

    Metros(req, res) {
    const quilometros = req.body.quilometros
    const metros = quilometros * 1000
    const centimetros = quilometros * 100000

    res.send({ metros: metros, centimetros: centimetros })
}
    
}

export default new ControllerExercicio()