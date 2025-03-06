const form = document.querySelector("#formulario");

const imcIndividual = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const peso = form.querySelector("peso");
  const altura = form.querySelector("altura");

  setResultado(imcIndividual.push({ peso, altura }));
});

function setResultado(mensagem) {
const resultado = document.querySelector('#resultado');
  resultado.innerHtml = '';
}
