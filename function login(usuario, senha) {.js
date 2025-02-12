function login(usuario, senha) {
    if (usuario === "admin" && senha === "1234") {
        return "Login bem-sucedido";
    } else {
        return "Usuário ou senha incorretos";
    }
}

console.log(login("admin", "1234"));  // Exemplo
