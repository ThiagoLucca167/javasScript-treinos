let atualizarTela = "";

function numero(numeros){
    atualizarTela += numeros;
    tela();
}
function operador(operadores){
    atualizarTela += operadores;
    tela();
}
function limpar(){
    atualizarTela = "";
    tela();
}

function calcular(){
    const resultado = eval(atualizarTela);
    atualizarTela = resultado.toString();
    tela();
    
}

function tela(mensagem=""){
document.getElementById("visor").value = mensagem || atualizarTela;
}