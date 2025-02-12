function verificarAnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        return "Ano bissexto";
    } else {
        return "Não é ano bissexto";
    }
}

console.log(verificarAnoBissexto(2024));  // Exemplo
