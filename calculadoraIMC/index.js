var calcular = document.getElementById('calcular');
var limpar = document.getElementById('limpar');

function calcImc(){
    const nome = document.getElementById('nome').value;
    const altura =+document.getElementById('altura').value;
    const peso =+document.getElementById('peso').value;
    const resultado = document.getElementById('resultado')

    if(nome !==''&& altura !== '' && peso !== ''){
        document.getElementById('resultado').style.color ="yellow"; 
        document.getElementById('resultado').style.background ="black"; 

        const imc = (peso / (altura * altura)).toFixed(1);
        let classificacao = 'Indefinido';
        
        if(imc < 18.5){
            classificacao = 'Abaixo do Peso';
        }else if(imc < 24.9){
            classificacao = 'Peso Normal';
        }else if(imc <29.9){
            classificacao = 'Sobrepeso';
        }else if(imc < 34.9){
            classificacao = 'Obesidade Grau 1';
        }else if(imc < 39.9){
            classificacao = 'Obesidade Grau 2';
        }else if(imc >= 40.0){
            classificacao = 'Obesidade Grau 3 / Mórbida';
        }
        resultado.textContent  = `Olá ${nome}, seu IMC é ${imc} e você está classificado como: ${classificacao}`
    }else{
            resultado.textContent  = 'Preencha todos os campos !!!';
            document.getElementById('resultado').style.color = 'red';
        }
}

function limpeza(){
    document.getElementById('resultado').textContent = 'Resultado Aqui'
    document.getElementById('resultado').style.color ="yellow"; 
    document.getElementById('resultado').style.background ="black"; 
    document.getElementById('nome').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('peso').value = '';
}

calcular.addEventListener('click',calcImc)
limpar.addEventListener('click', limpeza)