function sh() {
    let statusSenha = formLogin.senha;
    if (statusSenha.type === "password") {
        statusSenha.type = "text";
    } else {
        statusSenha.type = "password";
    }
}
function cadastro() {
    let nome = String(formLogin.nome.value);
    let password = document.getElementById("senha").value;
    let email = document.getElementById("email").value;
    if (nome === "") {
        document.getElementById("nome").focus();
    } else if (password === "") {
        document.getElementById("senha").focus();
        if (password.length < 4) {
            document.getElementById("senha").focus();
        } else {
        }
    } else {
        if (email === "") {
            document.getElementById("email").focus();
        } else {
            let regex = /\S+@\S+\.\S+/;
            if (regex.test(email)) {
                alert("Cadastro Aprovado!!");
                document.getElementById("loginFinal");
            }
        }
    }
}

function logar() {

}