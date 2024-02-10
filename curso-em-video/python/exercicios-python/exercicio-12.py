# Exercicio 12
# Faça um programa que leia a largura e a altura de uma parede em metros, calcule a sua área e a quantidade de tinta necessária para pintá-la, sabendo que cada litro de tinta, pinta uma área de 2m^2

largura = float(input('Digite a largura da parede:'))
altura = float(input('Digite a altura da parede:'))
area = (largura * altura) / 2
print(f'para pintar a area desejada vc vai precisar de {area:.2f} Litros de tinta')

