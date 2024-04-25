let dados = {
    nome: "Eduardo",
    idade: 19,
    altura: 1.68, 
    temCNH: false,
    apelidos: ["Eduardin", "novais"]
}

let txtCNH = ""

if (dados.temCNH){
    txtCNH = "tenho CNH"
} else {
    txtCNH = "não tenho CNH"
}
/* ou 
let txtCNH = (dados.temCNH ? "possui CNH" : "não tem CNH")
*/
console.log(`Meu nome é ${dados.nome} tenho ${dados.idade} e ${dados.altura}m de altura, ${txtCNH}`)
for (let apelido of dados.apelidos) {
    console.log(`- ${apelido}`)
}