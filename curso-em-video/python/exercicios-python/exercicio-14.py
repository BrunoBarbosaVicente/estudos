# Exercicio 14
# Faça um algoritmo que leia o salário de um funcionário e mostre seu novo salário, com 15% de aumento.

salario = float(input('Digite o salario atual:'))
novoSalario = salario + (salario * 15 / 100)
print(f'Seu novo salario é {novoSalario:.2f}')
