function sh() {
    let statusSenha = formCad.senha;
    if (statusSenha.type === "password") {
        statusSenha.type = "text";
    } else {
        statusSenha.type = "password";
    }
}
function sh2() {
    let statusSenha = formLogin.UserSenha;
    if (statusSenha.type === "password") {
        statusSenha.type = "text";
    } else {
        statusSenha.type = "password";
    }
}
var senhaFinal = "Well";
var usuarioFinal = "1234";
function cadastro() {
    let nome = String(formCad.nome.value);
    let password = document.getElementById("senha").value;
    let email = document.getElementById("email").value;
    let convert = password.split("");
    if (nome === "") {
        document.getElementById("nome").focus();
    } else if (password === "") {
        document.getElementById("senha").focus();
    } else if (convert.length < 4) {
        document.getElementById("senha").focus();
    } else {
        if (email === "") {
            document.getElementById("email").focus();
        } else {
            let regex = /\S+@\S+\.\S+/;
            if (regex.test(email)) {
                this.senhaFinal = String(password);
                this.usuarioFinal = nome;
                alert("Cadastro Aprovado!!");
                // document.getElementById("loginFinal").innerText = "teste";
                window.open('https://wellingtonnicacio444.github.io/lolwritensforbuild/index.html', '_self');
            } else {
                alert("Preencha o email corretamente!!");
            }
        }
    }
}
function logar() {
    alert(senhaFinal);
    alert(usuarioFinal);
    let senhaAtual = document.getElementById("senha").value;
    if (senhaFinal != senhaAtual) {
        alert("Digite a senha que você cadastrou anteriormente!!");
    } else {

    }
}