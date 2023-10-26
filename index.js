const selectBoxOperacao = document.getElementById("selectBoxOperacao");
const botaoCalcular = document.getElementById("botaoCalcular");
const labelResultado = document.getElementById("labelResultado");
const form = document.getElementById("form");
const pResultado = document.getElementById("pResultado");
const inputNumeroA = document.getElementById("numeroA");
const inputNumeroB = document.getElementById("numeroB");

function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function divisao(a, b) {
  if (b == 0) {
    alert(
      "Não é possível dividir por zero. Informe outro número ou mude a operação."
    );
    return;
  }
  return a / b;
}

function multiplicacao(a, b) {
  return a * b;
}

function esconderResultado() {
  pResultado.classList.add("hidden");
}

function mostrarResultado() {
  pResultado.classList.remove("hidden");
}

function limparCampos() {
  selectBoxOperacao.selectedIndex = 0;
  inputNumeroA.value = "";
  inputNumeroB.value = "";
  esconderResultado();
}

const objOperacoes = {
  "+": (a, b) => soma(a, b),
  "-": (a, b) => subtracao(a, b),
  "/": (a, b) => divisao(a, b),
  "*": (a, b) => multiplicacao(a, b),
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  esconderResultado();

  const operacao = selectBoxOperacao.value;
  let numeroA = Number(inputNumeroA.value);
  let numeroB = Number(inputNumeroB.value);

  if (operacao == "") {
    alert("Selecione uma operação.");
    return;
  }

  let resultado = objOperacoes[operacao](numeroA, numeroB);
  if (resultado != undefined) {
    labelResultado.innerText = resultado;
    mostrarResultado();
  }
});
