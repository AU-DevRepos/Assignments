let precio = 400000;

let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

const valorTotalElemento = document.querySelector(".cantidad");
const totalcarro = document.querySelector(".valor-total");
const precioElemento = parseInt(document.querySelector(".precio-inicial").innerHTML);

function sumar() {
//   console.log(valorTotalElemento.textContent);
  let valorActual = parseInt(valorTotalElemento.textContent, 10);
  let valorcarro = parseFloat(totalcarro);

  valorActual += 1;
  valorcarro = precioElemento * valorActual;
  valorTotalElemento.textContent = valorActual;
  totalcarro.textContent = valorcarro;
}

function restar() {
  let valorActual = parseInt(valorTotalElemento.textContent, 10);
  let valorcarro = parseFloat(totalcarro);
  if (valorActual == 0) valorActual = 0;
  else valorActual -= 1;
  valorcarro = precioElemento * valorActual;
  valorTotalElemento.textContent = valorActual;
  totalcarro.textContent = valorcarro;
}
