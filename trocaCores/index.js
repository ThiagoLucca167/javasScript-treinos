var fundo = document.getElementById("fundo");
fundo.style.backgroundColor = 'red';
var botao = document.getElementById("botao");
function botaoMudar(click){
   color();

}

function color(){
    var corAtual =fundo.style.backgroundColor;
    switch(corAtual){
        case 'red':
                fundo.style.backgroundColor = 'blue';
        break;
        case 'blue':
                fundo.style.backgroundColor = 'green';
        break;
        case 'green':
                fundo.style.backgroundColor = 'purple';
        break;
        case 'purple':
            fundo.style.backgroundColor = 'red';
        break;
        default:
            fundo.style.backgroundColor = 'white';
    }
}