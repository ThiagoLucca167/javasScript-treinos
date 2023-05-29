function cadNome(){
}
function cadEmail(){
}
function cadSenha(){
}
function cadTelefone(){
}
function cadNascimento(){

}

function enviarCad(){
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var telefone = document.getElementById("telefone").value;
    var nascimento = document.getElementById("nascimento").value;

    if(nome === ''){
        alert("O campo Nome é obrigatório.");
        return false; // Retorna false para impedir o envio do formulário
    }
    if(email===''){
        alert("O campo E-mail é obrigatório.");
        return false;
    }
    if(senha===''){
        alert("O campo Senha é obrigatório.");
        return false;
    }
    if(telefone===''){
        alert("O campo Telefone é obrigatório.");
        return false;
    }
    if(nascimento===''){
        alert("O campo Data Nascimento é obrigatório.");
        return false;
    }
    console.log(nome,email,senha,telefone,nascimento);
    alert("Cadastro realizado com sucesso");
    limparFormulario();
}
function limparFormulario(){
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("nascimento").value = "";
}