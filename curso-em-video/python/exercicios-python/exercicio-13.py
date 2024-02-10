# Exercicio 13
# Faça um algoritmo que leia o preço de um produto e mostre seu novo preço, com 5% de desconto.

preco = float(input('Digite o valor do produto:'))
novoPreco = preco - (preco * 5 / 100)
print(f'O valor com desconto é {novoPreco}')