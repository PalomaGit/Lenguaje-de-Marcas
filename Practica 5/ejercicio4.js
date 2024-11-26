function calcular() {
    operando1 = parseFloat(document.getElementById("operando1").value);
    operando2 = parseFloat(document.getElementById("operando2").value);
    operador = document.getElementById("operador").value;


    document.getElementById("resultado").value = {
        suma: operando1 + operando2,
        resta: operando1 - operando2,
        multiplicacion: operando1 * operando2,
        division: operando1 / operando2
    }[operador];
}
