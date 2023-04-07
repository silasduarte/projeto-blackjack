/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
let verificaCarta
console.log("Bem vindo ao jogo de cartas Black Jack")

const black = confirm("Quer começar o jogo?")

if (black) {
   let carta1 = comprarCarta()
   let carta2 = comprarCarta()
   let cPc1 = comprarCarta()
   let cPc2 = comprarCarta()


   let pontosJog = carta1.valor + carta2.valor
   let pontosPc = cPc1.valor + cPc2.valor
   console.log(`Jogador 1 cartas: ${carta1.texto} ${carta2.texto} Total : ${pontosJog}`)
   console.log(`Jogador 2 cartas: ${cPc1.texto} ${cPc2.texto} Total: ${pontosPc}`)

   if (pontosJog > pontosPc) {
      console.log("Jogador 1 venceu!")
   } else if (pontosPc > pontosJog) {
      console.log("Jogador 2 venceu!")
   } else if (pontosJog === pontosPc) {
      console.log("Empatou!")
   }

} else {
   console.log("Terminou a partida!")
}