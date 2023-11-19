
const key = "52dcf353682fa9cab74fdac926fc81af"

function colocardadosnatela(dados){
  console.log(dados)
  document.querySelector(".city").innerHTML = "Tempo em " + dados.name
  document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "C°"
  document.querySelector(".tempo").innerHTML = dados.weather[0].description
  document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
  document.querySelector(".previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}

async function buscarcidade(cidade) {

  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json() )

  colocardadosnatela(dados)
}

function cliquenobotao() {
  const cidade =  document.querySelector(".incidade").value

  buscarcidade(cidade)
}