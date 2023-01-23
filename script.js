/* document -> objeto que existe em todo navegador
.querySelector('a') -> seleciona a tag.*/
const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add) //A ação de clicar vai adicionar 
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if(dayExists){
    alert("Dia já incluso")
    return
  }

  alert('Adicionado com sucesso')
  nlwSetup.addDay(today)
}

function save(){
console.log(nlwSetup.data)
}
/* 
const data = {
  run: ["01-01","01-03","01-05"],
  read: ["01-01", "01-02", "01-04"],
  shop: ["01-03", "01-10"],
  game: ["01-04", "01-08"],
  movie: ["01-02", "01-10"]
}
nlwSetup.setData(data)
nlwSetup.load()
*/