let n1 = null;
let n2 = null;
let operador = null;
let resultado = null;

function display(value){
    document.getElementById('campo').value += value;
}

function operator(op){
    if (n1 === null){
        n1 = parseFloat(document.getElementById('campo').value);
        operador = op;
        document.getElementById('campo').value = "";
    }
}

function calculo(){
    if (n1 !== null && operador !== null){
        n2 = parseFloat(document.getElementById('campo').value);
        switch (operador){
            case '+':
                resultado = n1 + n2;
                break;
            case '-':
                resultado = n1 - n2;
                break;
            case '*':
                resultado = n1 * n2;
                break;
            case '/':
                resultado = n1 / n2;
                break;
        }
        document.getElementById('campo').value = resultado;
    }
}

function limpiaPantalla(){
    document.getElementById('campo').value = '';
    reset();
}

function reset(){
    n1 = null;
    n2 = null;
    operador = null
    resultado = null
}