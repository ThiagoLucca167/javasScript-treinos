// Buttons
let gerador = document.getElementById('gerarSenha');
let copiar = document.getElementById('copiar');

// Input
let quantidade = document.getElementById('quantidade');
let letrasMinusculas = document.getElementById('letrasMinusculas');
let letrasMaiusculas = document.getElementById('letrasMaiusculas');
let numerosAleatorios = document.getElementById('numerosAleatorios');
let simbolosAleatorios = document.getElementById('simbolosAleatorios');
let resultado = document.getElementById('resultado');

// Função para gerar uma letra minúscula aleatória
function gerarMinusculas() {
  const minusculas = 'abcdefghijklmnopqrstuvwxyz';
  return minusculas[Math.floor(Math.random() * minusculas.length)];
}
// Função para gerar uma letra maiúscula aleatória
function gerarMaiusculas() {
  const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return maiusculas[Math.floor(Math.random() * maiusculas.length)];
}
// Função para gerar um número aleatório
function gerarNumeros() {
  const numeros = '0123456789';
  return numeros[Math.floor(Math.random() * numeros.length)];
}
// Função para gerar um símbolo aleatório
function gerarSimbolos() {
  const simbolos = '!@#$%&*.,/|-+=()[]{}';
  return simbolos[Math.floor(Math.random() * simbolos.length)];
}
// Objeto que mapeia os critérios aos respectivos geradores
const aleatorios = {
  min: gerarMinusculas,
  mai: gerarMaiusculas,
  num: gerarNumeros,
  sim: gerarSimbolos,
};

gerador.addEventListener('click', () => {
  const tamanho = quantidade.value; // Obtém o tamanho da senha da entrada
  const temMaiuscula = letrasMaiusculas.checked; // Verifica se letras maiúsculas estão selecionadas
  const temMinuscula = letrasMinusculas.checked;
  const temNumero = numerosAleatorios.checked;
  const temSimbolos = simbolosAleatorios.checked;
  //verifica se possui algum parametro seleciona caso exita ira rodar, caso não tenha dispara o alerta
  if (!temMaiuscula && !temMinuscula && !temNumero && !temSimbolos) {
    alert('Selecione pelo menos um critério para gerar a senha!');
  } else {
    resultado.innerText = criarSenha(tamanho, temMinuscula, temMaiuscula, temNumero, temSimbolos); // Gera e exibe a senha
  }
});
// Função para criar a senha com base nos critérios selecionados
function criarSenha(tamanho, minuscula, maiuscula, numero, simbolos) {
    let senha = '';
    const tiposContador = minuscula + maiuscula + numero + simbolos;
// Cria um array de critérios selecionados com suas respectivas funções geradoras
    let tiposArr = [
      { func: gerarMinusculas, ativo: minuscula },
      { func: gerarMaiusculas, ativo: maiuscula },
      { func: gerarNumeros, ativo: numero },
      { func: gerarSimbolos, ativo: simbolos },
    ].filter((item) => item.ativo);
  
    for (let i = 0; i < tamanho; i++) {
// Seleciona aleatoriamente um critério do array e chama sua função geradora correspondente
      let randomTipo = tiposArr[Math.floor(Math.random() * tiposArr.length)];
      senha += randomTipo.func();
    }
  
    const finalSenha = senha.slice(0, tamanho);
    return finalSenha;
  }
// Evento para o botão "Copiar Senha"
copiar.addEventListener('click', () => {
  navigator.clipboard.writeText(resultado.value);
  alert('Copiado: ' + resultado.value);
});
