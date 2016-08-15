var cart = ["Caneca", "Livro Clean Code", "Café", "Cereal", "Livro The Clean Coder"]

cart.sort();

/*joão da silva
masculino
26
5000

pedro de alcântara
masculino
17
1000

maria josefina
feminino
30
10000
*/
/*A equipe de negócios solicitou as informações:

- A média de idade dos clientes;
- A média de salário das mulheres;
- Quantas pessoas acima de 25 anos possuem salários superiores a 5000 reais.
*/
function Client(name, genre, age, salary) {
	this.name = name;
	this.genre = genre;
	this.age = age;
	this.salary = salary;

	this.isFemale = function() {
		return this.genre === "feminino";
	};
}

function getClients() {
	this.clients = [];
	this.clients.push(new Client("João da Silva", "masculino", 26, 5000));
	this.clients.push(new Client("Pedro de Alcântara", "masculino", 17, 1000));
	this.clients.push(new Client("Maria Josefina", "feminino", 30, 10000));

	return this.clients;
}


function ClientBusiness(clients) {
	this.clients = clients;
	this.money = "R$";


	this.getMoney = function() {
		return this.money;
	};

	this.averageAge = function() {
		var average = 0;

		for(var indice in clients)
			average += clients[indice].age;

		console.log("Client Average Age: " + Math.round(average/clients.length));
	};

	this.femaleAverageSalary = function() {
		var average = 0;

		for(var indice in clients)
			if(clients[indice].isFemale())
				average += clients[indice].salary;

		console.log("Client Female's Average Salary: "+ this.getMoney() + (average/clients.length).toFixed(2));
	};

	this.twentyFiveYearsWithSalaryAbove5000 = function() {
		for(var indice in clients)
			if(clients[indice].age > 25)
				console.log("Client " + clients[indice].name + " has salary above 5000");
	};

}

var clientBusiness = new ClientBusiness(getClients());

clientBusiness.averageAge();
clientBusiness.femaleAverageSalary();
clientBusiness.twentyFiveYearsWithSalaryAbove5000();


/*Questão 3
A promoção foi um sucesso! Agora, uma nova maneira de impulsionar as vendas será adotar o uso de cupons de desconto e você irá atuar nessa solicitação.

O processo de pagamento deverá considerar não somente o valor dos produtos e frete, mas também o desconto a ser aplicado. As regras definidas para o desconto são:

O cupom de desconto não pode ser superior a 50% da compra;
O desconto se aplica somente ao valor dos produtos;
Compras com valor bruto acima de R$ 500 ganham frete grátis.

Sua tarefa será escrever a função:

	totalizaCarrinho (valorCompra, desconto, valorFrete) 

que deverá aplicar o valor do desconto e o frete conforme as regras. 
O “desconto” é o percentual na sua forma decimal, ou seja, para 50% o valor do parâmetro será 0.5. 
O frete sempre é informado e a função que decide se ele deve ser aplicado ou não.

A equipe de manutenção, que é muito orgulhosa da qualidade daquilo que produz, aderiu ao uso de TDD 
(Test Driven Development) e sempre planeja a automação de testes antes mesmo da implementação. 
Você fará isso antes de escrever o código da função. 

Escreva as validações que você faria para a função totalizaCarrinho. Siga o modelo dos exemplos abaixo:

	Chamada: 			totalizaCarrinho(10, 0, 5)
	Resultado esperado: 		15 - valor da compra somado ao frete

	Chamada:			totalizaCarrinho(0, 0.1, 10)
	Resultado esperado:		erro - o valor da compra não pode ser zero
Escreva as validações que você faria para a função totalizaCarrinho 
	
	Aplicando o desconto

	Aplicando desonconto maior que 0.5

	Sem valor de frete

	valor da compra maior que 500 - para frete gratis
**/



function totalizaCarrinho(valorCompra, desconto, valorFrete) {
	if(desconto > 0.5) {
		console.log("O cupom de desconto não pode ser superior a 50% da compra!");
		return;
	}

	if(!valorFrete){
		console.log("Valor do frete deve ser informado!");
		return;
	}

	if(!valorCompra) {
		console.log("Valor da compra não pode ser zero!");
		return;
	}

	if(valorCompra > 500)
		valorFrete = 0;

	if(desconto > 0)
		return (valorCompra - (valorCompra * desconto)) + valorFrete;

	return valorCompra + valorFrete;
}