const notas = [4.5, 4.1, 7.4, 2.8, 9.5, 8.8]

// Sem Callback

let notasBaixas1 = []
 for (let i in notas){
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

notasBaixas1.forEach((nota, indice) => console.log(`${indice}. ${nota}`))

// Com Callback

const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log('-------------------------------------------------------------')
notasBaixas2.forEach((nota2, indice2) => console.log(`${indice2}. ${nota2}`))

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)