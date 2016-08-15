function totalizaCarrinho(valorCompra, desconto, valorFrete) {
	if(desconto > 0.5) {
		console.log("O cupom de desconto não pode ser superior a 50% da compra!");
		return "Erro";
	}

	if(!valorFrete){
		console.log("Valor do frete deve ser informado!");
		return "Erro";
	}

	if(!valorCompra) {
		console.log("Valor da compra não pode ser zero!");
		return "Erro";
	}

	if(valorCompra > 500)
		valorFrete = 0;

	if(desconto > 0)
		return (valorCompra - (valorCompra * desconto)) + valorFrete;

	return valorCompra + valorFrete;
}