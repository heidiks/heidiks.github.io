test('totalizaCarrinho()', function(assert) {
	assert.equal( totalizaCarrinho(10, 0, 5), 15, "Valor da compra somado ao frete" );
	assert.equal( totalizaCarrinho(600, 0, 35), 600, "Frete gratis" );
	assert.equal( totalizaCarrinho(600, 0.1, 35), 540, "Frete gratis com desconto de 10%" );
	assert.equal( totalizaCarrinho(0, 0.1, 10), "Erro", "Valor da compra não pode ser zero" );
	assert.equal( totalizaCarrinho(600, 0.6, 5), "Erro", "Desconto superiror a 50% proibido" );
	assert.equal( totalizaCarrinho(10, 0, null), "Erro", "Valor do frete deve ser informado" );
	assert.equal( totalizaCarrinho(100, 0.1, 5), 95, "Valor da compra somado ao frete mais desconto 10%" );
})