function conversor(){
    var valor = document.getElementById("valor");
    var num = valor.value;
    var valoremnum = parseFloat(num);
    var valorEmReal = valoremnum * 5.02;
    console.log(valorEmReal);

    var ValorConvertido = document.getElementById("Convertendo");
    var Convertendo = 'Resultado em Real é R$'+ valorEmReal;
    ValorConvertido.innerHTML = Convertendo;
}