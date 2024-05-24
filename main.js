const frases = [
  "Acredite em si mesmo e todo o resto se encaixará. Tenha fé em suas próprias habilidades, trabalho duro e perseverança.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Não espere por uma oportunidade perfeita. Agarre cada chance e torne-a incrível.",
  "As dificuldades muitas vezes preparam as pessoas comuns para um destino extraordinário.",
  "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
  "Não importa quão devagar você vá, desde que você não pare.",
  "Sua mente é uma ferramenta poderosa. Quando você a enche de pensamentos positivos, sua vida começa a mudar.",
  "O fracasso é apenas a oportunidade de começar de novo,desta vez de forma mais inteligente.",
  "A jornada de mil milhas começa com um único passo.",
  "Acredite que você pode e você já está no meio do caminho."
]

function randomFrase() {
  const randomNumber = Math.round(Math.random() * 9)
  return frases[randomNumber]
}



document.addEventListener("DOMContentLoaded", () => {
  const btnAbrir = document.querySelector('#btnAbrir')
  const btnReset = document.querySelector('#btnReset')

  btnAbrir.addEventListener('click', handledrawphrase)
  btnReset.addEventListener('click', handleReset)
})

function handledrawphrase() {
  hideScreens()
  document.querySelector('#frase').innerHTML = randomFrase()
}

function handleReset() {
  hideScreens()
}

function hideScreens() {
  document.querySelector('.screen1').classList.toggle('hide')
  document.querySelector('.screen2').classList.toggle('hide')
}



