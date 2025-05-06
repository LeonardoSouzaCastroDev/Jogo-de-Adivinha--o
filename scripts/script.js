let numeroRandom = Math.floor(Math.random() * 101)
let dicas = 1

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
    document.getElementById('win').textContent = '🎉 Parabéns! Você acertou!'
    aplicarDestaque('win')
    return
  }

  if (dicas >= 10) {
    document.getElementById('dicaQuantidade').textContent = 'Você perdeu! O número secreto era ' + numeroRandom
    aplicarDestaque('dicaQuantidade')
    return
  }

  document.getElementById('dicaQuantidade').textContent = `Dicas restantes: ${10 - dicas}`
  dicas++
}

function aplicarDestaque(id) {
  const elemento = document.getElementById(id)
  if (!elemento) return
  elemento.classList.remove("piscar-verde")
  void elemento.offsetWidth
  elemento.classList.add("piscar-verde")
}
