# Exercicio 16
# Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado e a quantidade de dias pelos quais ele foi alugado. Calcule o preço a pagar, sabendo que o carro custa R$60 por dia e R$0,15 por Km rodado

km = float(input('Digite a quantida de Km:'))
dia = int(input('Digite a quantidade de dias:'))
total = km * 0.15 + dia * 60
print(f'O valor a pagar é de {total:.2f}')