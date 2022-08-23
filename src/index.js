const btnSend = document.querySelector("#send");
const cantidadDiv = document.querySelector("#dato");

btnSend.addEventListener("click", () => {
  cargarDiv(cantidadDiv.value);
});

function addDiv() {
  const containerOfCards = document.querySelector("#container");
  const divElement = document.createElement("div");
  containerOfCards.appendChild(divElement);
}

function cargarDiv(cantidad) {
  for (var indice = 0; indice < cantidad; indice++) {
    addDiv();
  }
}
