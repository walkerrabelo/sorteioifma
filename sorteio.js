console.log('Sorteio IFMA - Desenvolvimento de Apps')

const quantidadeDeParticipantes = 600
const numerosDoSorteio = Array.from(Array(quantidadeDeParticipantes).keys())
const sorteados = []
const quantidadeDeVagas = 40

/*
    A idéia aqui é realizar um sorteio de 40 vagas, sem repetições
    A cada vez que for detectada uma repetição, um novo número é sorteado.
*/
let quantidadeDeSorteios = 0
const repetidos = []
while(sorteados.length < quantidadeDeVagas) {
    const numeroSorteado = Math.floor(Math.random() * quantidadeDeParticipantes)
    quantidadeDeSorteios++
    
    /* 
        Aqui verificamos se o número já foi sorteado anteriormente. 
        Só incluimos na lista se não for repetido. : )
    */
    if(!sorteados.some(sorteado => sorteado == numeroSorteado))
        sorteados.push(numeroSorteado)
    else
        repetidos.push(numeroSorteado)
}

console.log('Numeros Sorteados mais de uma vez (Gerando um Novo Número) ', repetidos)
console.log('Quantidade de Sorteios: ', quantidadeDeSorteios)


console.log('Numeros Sorteados ', sorteados)

//sorteados.forEach(sorteado => console.log(sorteado))