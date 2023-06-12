var nome = document.getElementById("nomeAluno");


function calcularMedia(){
    var nota1= document.getElementById("nota1").value;
    var nota2= document.getElementById("nota2").value;
    var nota3= document.getElementById("nota3").value;
    var nota4= document.getElementById("nota4").value;
    var calc=nota1+nota2+nota3+nota4/4;
    var media = calc;
    console.log(nota1)
    console.log(nota2)
    console.log(nota3)
    console.log(nota4)
    console.log("A media do aluno foi"+media)


}