# Exercicio 7
# Crie um algoritmo que leia um número e mostre o seu drobro, triplo e raiz quadrada.

n = int(input('Digite um numero:'))
d = n * 2
t = n * 3
rQ = n ** (1/2)
print(f'O Dobro de {n} é {d}\nO triplo de {n} é {t}\nA raiz quadrada de {n} é {rQ:.2f}')

print(f'O Dobro de {n} é {n*2}\nO triplo de {n} é {n*3}\nA raiz quadrada de {n} é {n**(1/2):.2f}')