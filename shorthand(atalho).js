let pessoa = {
    nome: "Eduardo", 
    altura: 1.68,
    peso: 72, 
    carro: {
        marca: "Hyundai",
        modelo: "IX35",
        ano: 2014,
        potencia: 110
    }
}
console.log(pessoa.carro.marca)

/* ou
let carro = {
        marca: "Hyundai",
        modelo: "IX35",
        ano: 2014,
        potencia: 110
    }
    
let pessoa = {
    nome: "Eduardo", 
    altura: 1.68,
    peso: 72, 
    carro: carro ou carro (como tem o mesmo nome voce pode exluir ou ":")
}
*/