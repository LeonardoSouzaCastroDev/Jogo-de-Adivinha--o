let numeroRandom = Math.floor(Math.random() * 101)
let tentativasRestantes = 10

const btnReiniciar = document.getElementById('reiniciar')
const btnChutar = document.getElementById('chutar')
const dicaQuant = document.getElementById('dicaQuantidade')
const winElem = document.getElementById('win')
const dica = document.getElementById('dica')
const number = document.getElementById('numero')

function animarClasseComReflow(elemento, classe){
  elemento.classList.remove(classe)
  void elemento.offsetWidth
  elemento.classList.add(classe)
}


function limparInterface(){
  number.value = ''
  winElem.textContent = ''
  dicaQuant.textContent = ''
  dica.textContent = ''
}


function mostrarBotaoReiniciar(){
  btnReiniciar.style.display = 'inline-block'
  btnChutar.style.display = 'none'
}


function perder(){
  limparInterface()

  dicaQuant.textContent = 'Você perdeu! O número secreto era ' + numeroRandom

  animarClasseComReflow(dicaQuant, 'piscar-vermelho')

  mostrarBotaoReiniciar()
}


function win() {
  limparInterface()

  winElem.textContent = '🎉 Parabéns! Você acertou!'

  animarClasseComReflow(winElem, 'piscar-verde')

  mostrarBotaoReiniciar()

  return
}


function reiniciarJogo() {
  numeroRandom = Math.floor(Math.random() * 101)
  tentativasRestantes = 10

  limparInterface()

  btnReiniciar.style.display = 'none'
  btnChutar.style.display = 'inline-block'
}


function adivinharNumero() {
  const palpiteJogador = parseFloat(number.value)

  if (isNaN(palpiteJogador) || palpiteJogador < 0 || palpiteJogador > 100) {
    dica.textContent = "Digite um número entre 0 e 100."
    return
  }

  if (palpiteJogador > numeroRandom) {
    dica.textContent = "O número secreto é menor"
  } else if (palpiteJogador < numeroRandom) {
    dica.textContent = "O número secreto é maior"
  } else {
    win()
    return
  }

  if ( tentativasRestantes <= 0) {
    perder()
    return

  } else {
    dicaQuant.textContent = `Dicas restantes: ${tentativasRestantes}`
  tentativasRestantes--
  }
}
