function criarProduto(nome, preco){
    return{
        nome: this.nome = nome,
        preco: this.preco = preco,
        dezPorcento: this.preco - (this.preco * 0.1)
    }
}

console.log(criarProduto("Veja", 34, 2))

const veja = new criarProduto("Veja", 34.99, 1)

