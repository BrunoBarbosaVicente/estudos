// estrutura de um array - obs :Arrays podem guardar mais de um valor por vez, e cada item é separado por vírgula.

const alunosTurma1 = ['Fàbio', 'Cristina', 'Jéssica'];
const alunosTurma2 = ['João', 'Diogo'];
const numerosSorteados = [39, 7, 2, 21, 6, 26];

console.log(alunosTurma1);
console.log(alunosTurma2);
console.log(numerosSorteados);

// acessando um valor pelo seu indice - obs: O índice inicia a partir do 0 e, para acessar a posição de um item no array, usamos a estrutura meuArray[indiceQueEuQuero].

const pizzas = ['4 queijos', 'frango com catupiry', 'alho', 'chocolate', 'pepperoni'];

const pizzaEscolhida = pizzas[3]; // acessando o indice 3 = 'frango com catupiry'

console.log(pizzaEscolhida);



// adicionando novo item no array - estrutura - meuArray.push(valor); ou meuArray[indice] = 'valor';

// obs:  A vantagem do .push() é que você não precisa saber o próximo índice disponível para adicionar um valor a um array, pois essa função já adiciona ao final da lista o valor passado entre os parênteses.

const listaDeCompras = ['arroz', 'feijão', 'ovo'];

listaDeCompras.push('farofa'); // adiciona um novo item ao final da lista sem precisar saber o indice.

listaDeCompras[3] = 'farofa'; // adiciona um novo item ao final da lista mas é nescessario saber o indice disponivel.

console.log(listaDeCompras); // [ 'arroz', 'feijão', 'ovo', 'farofa' ]



// Substituindo um item em um array - estrutura - meuArray[meuIndiceJaOcupado] = valor

//obs: Para facilitar a manipulação de listas, sem precisar escrevê-las do zero quando quiser substituir um valor, utilize o índice do item que você quer substituir.

const estadosNorte = ['Acre', 'Amapá', 'Amazonas', 'Paraná', 'Rondônia', 'Roraima', 'Tocantins'];

estadosNorte[3] = 'Pará'; // selecionando o indice ja ocupado podemos atribuir um novo valor a ele 

console.log(estadosNorte); //[ 'Acre', 'Amapá', 'Amazonas', 'Pará', 'Rondônia', 'Roraima', 'Tocantins']

const ingredientes = ['arroz', 'batata', 'cenoura', 'sal', 'pimenta do reino'];

ingredientes[2] = 'suco'; // substituindo o indice 2 

console.log(ingredientes); // ['arroz', 'batata', 'cenoura', 'sal', 'pimenta do reino']



//Recuperando o tamanho de um array - estrutura - meuArray.length

//obs: A palavra length, em português, significa comprimento, ou seja, essa função nos retorna o comprimento do nosso array e também pode ser utilizada para saber o tamanho de uma string, utilizando o formato string.length.

//obs: Com o .length, também podemos descobrir qual é o último valor da lista, sem precisar de índice!

const convidados = ['Sheila', 'Cleyton', 'Leticia', 'Gisele', 'Vinicius', 'Ivan', 'Laura', 'Guilherme', 'Erickson', 'Claudio', 'Adilson', 'Juliana'];
convidados.push('Evelyn');
const quantidadeConvidados = convidados.length; // essa funçao retorna o comprimento do nosso array

const ultimoConvidado = convidados[convidados.length-1] // verifica o ultimo valor da lista, ou o valor que deseja verificar

console.log(convidados); // ['Sheila', 'Cleyton', 'Leticia', 'Gisele', 'Vinicius', 'Ivan', 'Laura', 'Guilherme', 'Erickson', 'Claudio', 'Adilson', 'Juliana']
console.log(quantidadeConvidados); // 13

console.log(ultimoConvidado); // Evelyn

