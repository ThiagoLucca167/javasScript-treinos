let calcular = document.getElementById('calcular');
let limpar = document.getElementById('limpar');
let chart = null;

function limpeza() {
    document.getElementById('resultado').textContent = '';
    document.getElementById('nome').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('peso').value = '';

    if (chart !== null) {
        chart.destroy();
    }
    document.getElementById('chart').style = 'display:none'
}

function imc() {
    let nome = document.getElementById('nome').value;
    let peso = +document.getElementById('peso').value;
    let altura = +document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && peso !== '' && altura !== '') {
        document.getElementById('chart').style = 'display:block'
        var calcIMC = (peso / (altura * altura)).toFixed(1);
        let classificacao = '';
        let classificacaoImc = '';
        let corVerde = 'green';
        let corVermelha = 'red';
        let corLaranja = 'orange';
        let cor;

        if (calcIMC < 18.5) {
            classificacao = 'Abaixo do Peso';
            classificacaoImc = 'não saudavel';
            cor = corVermelha;
        } else if (calcIMC < 24.9) {
            classificacao = 'Peso Normal';
            classificacaoImc = 'saudavel';
            cor = corVerde;
        } else if (calcIMC < 29.9) {
            classificacao = 'Sobrepeso';
            classificacaoImc = 'medio';
            cor = corLaranja;
        } else if (calcIMC < 34.9) {
            classificacao = 'Obesidade Grau 1';
            classificacaoImc = 'nao saudavel';
            cor = corVermelha;
        } else if (calcIMC < 39.9) {
            classificacao = 'Obesidade Grau 2';
            classificacaoImc = 'nao saudavel';
            cor = corVermelha;
        } else if (calcIMC >= 40.0) {
            classificacao = 'Obesidade Grau 3 / Mórbida';
            classificacaoImc = 'nao saudavel';
            cor = corVermelha;
        }
        resultado.textContent = `Olá ${nome}, seu IMC é de: ${calcIMC} e sua classificação é ${classificacao}`;

        if (chart !== null) {
            chart.destroy();
        }

        let ctx = document.getElementById('chart').getContext('2d');
        chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [classificacaoImc],
                datasets: [{
                    label: "IMC",
                    backgroundColor: [cor],
                    borderColor: 'rgba(255, 99, 132)',
                    data: [calcIMC]
                }]
            },
            options: {}
        });
    } else {
        alert("Preencha todos os campos");
    }
}

calcular.addEventListener('click', imc);
limpar.addEventListener('click', limpeza);
