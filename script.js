/* document -> objeto que existe em todo navegador
.querySelector('a') -> seleciona a tag.*/
const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  run: ["01-01","01-03","01-05"],
  read: ["01-01", "01-02", "01-04"],
  shop: ["01-03", "01-10"],
  game: ["01-04", "01-08"],
  movie: ["01-02", "01-10"]
}
nlwSetup.setData(data)
nlwSetup.load()
