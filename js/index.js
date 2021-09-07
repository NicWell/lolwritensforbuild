function sh() {
    let statusSenha = formLogin.senha;
    if (statusSenha.type === "password") {
        statusSenha.type = "text";
    } else {
        statusSenha.type = "password";
    }
}