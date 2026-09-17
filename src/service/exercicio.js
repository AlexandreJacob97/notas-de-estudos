class ServiceExercicio {
    Potator(potato,tomato) {
        if(isNaN(potato) || isNaN(tomato)){
            throw new Error("Favor informar números")
        }
        return potato + tomato
    }
    Somar(num1,num2) {
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Favor informar números")
        }
        return num1 + num2
    }
    Salario(valor,hora) {
        if(isNaN(valor) || isNaN(hora)){
            throw new Error("Favor informar números")
        }
        return valor * hora
    }
    Peso(num1,num2,num3,num4,num5) {
        if(isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)){
            throw new Error("Favor informar números")
        }
        return (num1+num2+num3+num4+num5)/5
    }
    Temp(celsius){
        if(isNaN(celsius)){
            throw new Error("Favor informar número")
            }
            return (9 * celsius + 160 ) /5
    }
    Milhas(quilometros){
        if(isNaN(quilometros)){
            throw new error("Favor informar número")
        }
        return quilometros*1.60934
    }
}

export default new ServiceExercicio()