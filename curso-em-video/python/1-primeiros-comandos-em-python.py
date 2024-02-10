#Em python, por boa pratica é recomendado usar '' aspas simples para a grande maioria das mensagens, tbm funciona com "" aspas duplas;

print() # Significa escreva na tela, ira escrever na tela tudo o que houver dentro de parenteses seguido por aspas se for uma mensagem, caso seja numeros, o python entende sem aspas.

print('Olá, Mundo') # vai imprimir a mensagem "Olá, Mundo"

print('7' + '4') # Vai imprimir 74, como os numeros estão dentro de aspas e usarmos o operador de soma, ele vai concatenar os numeros.

print(7 + 4) # vai imprimir o resultado da soma 7 + 4 = 11, sem as aspas o python ja entende que é um numeros e realiza a operação matematica.

#Existe 4 metodos de usar o print()
#Exemplo 1

nome = input('')
print('o seu nome é', nome) # neste exemplo vai imprimir a mensagem seguido do valor armazenado na variavel "nome"

# Exemplo 2

nome =  input('')
print('O seu nome é %s' %(nome))

# Exemplo 3

nome = input('')
print('O seu nome é {}'.format(nome))

# Exemplo 4 
# Esse é o meto recomendade por boa pratica.

nome = input('')
print(f'o seu nome é {nome}')