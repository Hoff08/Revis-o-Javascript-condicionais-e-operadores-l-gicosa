function aplicarDesconto(valorCompra, codigoDesconto) {
    if (codigoDesconto === "DESC10") {
        return valorCompra - (valorCompra * 0.10);  // Desconto de 10%
    } else if (codigoDesconto === "DESC20") {
        return valorCompra - (valorCompra * 0.20);  // Desconto de 20%
    } else {
        return valorCompra;  // Nenhum desconto
    }
}

console.log(aplicarDesconto(100.0, "DESC10"));  // Exemplo
