let atualizarTela = 0;
let atualizarValor = 250;

function visorTela() {
    document.getElementById("quantidade").value = atualizarTela;
    document.getElementById("valorTotal").innerText = atualizarTela * atualizarValor;
}

function atualizarQuantidade(event) {
    atualizarTela = parseInt(event.target.value) || 0;
    visorTela();
}

document.getElementById("botaoSoma").addEventListener('click', function() {
    atualizarTela++;
    visorTela();
});

document.getElementById("botaoMenos").addEventListener('click', function() {
    if (atualizarTela > 0) {
        atualizarTela--;
        visorTela();
    }
});