const form = document.querySelector("#formulario");
//capturamos um evento
form.addEventListener("submit", (e) => {
  e.preventDefault(); // N deixamos o formulario ser enviado

  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  //Valores elementos
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  //verificamos se peso náo era um numero
  if (!peso) {
    setResultado("Peso inválido", false);
    return;
  }
  if (!altura) {
    setResultado("Altura invalida", false);
    return;
  }
  const imc = getImc(peso, altura);

  const nivelImc = getNivelImc(imc);

  console.log(imc, nivelImc);

  const msg = `Seu IMC é ${imc} (${nivelImc}). `;
  setResultado(msg, true);
});

function getImc(peso, altura) {
  const imc1 = peso / altura ** 2;
  return imc1.toFixed(2);
}
function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso Normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) return nivel[4];

  if (imc >= 29.9) return nivel[3];

  if (imc >= 24.9) return nivel[2];

  if (imc >= 18.5) return nivel[1];

  if (imc < 18.5) return nivel[0];
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHtml = "";
  const p = CriaP();
  p.innerHTML = msg;
  resultado.appendChild(p);
  if (isValid) {
    p.classList.add("  paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }
}

function CriaP() {
  const p = document.createElement("p");
  return p;
}
