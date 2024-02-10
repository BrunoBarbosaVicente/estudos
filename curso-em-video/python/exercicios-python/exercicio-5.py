# Exercicio 5
# Faça um progrma que leia algo pelo teclado e mostre na tela o seu tipo primitivo e todas as informações possiveis sobre ele.

objeto = input('Digite algo:')
print(f'o tipo primitivo desse valor é',type(objeto))
print(f'É alfanumerico?',objeto.isalnum())
print(f'É alfabético?',objeto.isalpha())
print(f'É ASCII?',objeto.isascii()) #verifica se é do tipo 7-bit.
print(f'É decimal?',objeto.isdecimal())
print(f'É um digito?',objeto.isdigit())
print(f'É um identificador?',objeto.isidentifier()) #verificar se o caracter digitado é valido parar escrever um identificador no código.
print(f'É minuscula?',objeto.islower())
print(f'É numérico?',objeto.isnumeric())
print(f'Pode ser impresso?',objeto.isprintable())
print(f'Só tem espaço?',objeto.isspace())
print(f'É um titulo?',objeto.istitle()) # verifica se esta capitalizada.
print(f'É maiuscula?',objeto.isupper())
