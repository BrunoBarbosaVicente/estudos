# Exercicio 11
# Crie um programa que leia quanto dinheiro uma pessoa tem na carteira e mostre quantos dólares ela pode comprar.  Considere US$ 1,00 = R$ 3,27

reais = float(input('Quantos reais você tem?:'))
conversão = reais / 3.27
print(f'Com R${reais} reais, Você pode comprar US${conversão:.2f} Dolar')