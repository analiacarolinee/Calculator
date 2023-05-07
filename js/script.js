function calculo() {
  var valor = parseFloat(document.getElementById("valor").value);
  var juros = 0.0033
  var multa = 0.02
  var dias = parseInt(document.getElementById("dias2").value);

  var taxaJuros = valor * juros * dias;

  var resultado = document.getElementById("resultado");
  resultado.textContent = "Juros:" + taxaJuros.toFixed(2);
 
  var taxaMulta = valor * multa;

  var resultado = document.getElementById("resultado2");
  resultado.textContent = "Multa " + taxaMulta.toFixed(2);

  var total = valor + taxaMulta + taxaJuros; 

  var resultado = document.getElementById("resultadot");
  resultado.textContent = "Resultado " + total.toFixed(2);
}

var botaoCalcular = document.getElementById("botao");
botaoCalcular.addEventListener("click", calculo);

