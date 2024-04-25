// spread ... (espalhar o conteudo)

const pessoa = {
    nome: "Eduardo",
    idade: 19,
    cidade: "Brasilia",
    profissao: "Auxiliar de escravo"
}

const endereco = {
    quadra: "121",
    conjunto: "11",
    casa: "25",
    bairro: "Samambaia Sul"
}

const objetoFundido = {
    ...pessoa,
    ...endereco
}