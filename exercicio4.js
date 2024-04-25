let produtos = [
    {
        produto: "Sopa",
        preco: 1000,
        quantidade: 1
    },
    {
        produto: "Guaraná",
        preco: 500,
        quantidade: 2
    },
    {
        produto: "Chocolote",
        preco: 400,
        quantidade: 2
    }
]   

let cartao = {
    nome: "Eduardo",
    idade: 19,
    produtos 
}

let valorTotal = 0
for (let produt of produtos) {
    valorTotal += (produt.preco * produt.quantidade) / 100
}

console.log(`${cartao.nome} o senhor terá que pagar ${valorTotal} reais`)