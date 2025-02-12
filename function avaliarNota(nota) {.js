function avaliarNota(nota) {
    if (nota >= 9) {
        return "Excelente";
    } else if (nota >= 7) {
        return "Bom";
    } else if (nota >= 5) {
        return "Regular";
    } else {
        return "Insuficiente";
    }
}

console.log(avaliarNota(8.5));  // Exemplo
