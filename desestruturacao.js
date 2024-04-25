//Desestruturacao de objetos - Destructuring

let dados = {
    nome: "Eduardo",
    idade: 19,
    cidade: "Brasilia",
    profissao: "Escravo"
}

// const nome = dados.nome
// const idade = dados.idade

const {nome, idade, ...outros} = dados

console.log(nome, idade, outros)