let numeroRandom = Math.floor(Math.random() * 101)
let dicas = 1

function botao(){
  document.getElementById('reiniciar').style.display = 'inline-block'
  document.getElementById('chutar').style.display = 'none'
}

function perder(){
  const dicaElem = document.getElementById('dicaQuantidade')
  document.getElementById('dicaQuantidade').textContent = 'Você perdeu! O número secreto era ' + numeroRandom

  dicaElem.classList.remove("piscar-vermelho")
  void dicaElem.offsetWidth
  dicaElem.classList.add("piscar-vermelho")
  
  document.getElementById('dica').textContent = ''

  botao()
}

function win() {
  document.getElementById('dica').textContent = ''
  document.getElementById('dicaQuantidade').textContent = ''
  
  const winElem = document.getElementById('win')
  winElem.textContent = '🎉 Parabéns! Você acertou!'

  winElem.classList.remove("piscar-verde")
  void winElem.offsetWidth // força reflow
  winElem.classList.add("piscar-verde")

  botao()

  return
}

function reiniciarJogo() {
  numeroRandom = Math.floor(Math.random() * 101)
  dicas = 1

  document.getElementById('numero').value = ''
  document.getElementById('win').textContent = ''
  document.getElementById('dicaQuantidade').textContent = ''
  document.getElementById('reiniciar').style.display = 'none'
  document.getElementById('chutar').style.display = 'inline-block'
}

function adivinharNumero() {
  let palpiteJogador = parseFloat(document.getElementById('numero').value)

  if (isNaN(palpiteJogador) || palpiteJogador < 0 || palpiteJogador > 100) {
    document.getElementById('dica').textContent = "Digite um número entre 0 e 100."
    return
  }

  if (palpiteJogador > numeroRandom) {
    document.getElementById('dica').textContent = "O número secreto é menor"
  } else if (palpiteJogador < numeroRandom) {
    document.getElementById('dica').textContent = "O número secreto é maior"
  } else {
    win()
    return
  }

  if (dicas >= 10) {
    perder()
    return

  } else {
    document.getElementById('dicaQuantidade').textContent = `Dicas restantes: ${10 - dicas}`
  dicas++
  }
}
