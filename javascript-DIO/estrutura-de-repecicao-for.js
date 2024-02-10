//Estrutura de repetição for - estrutura - for (expressão inicial; condição a ser cumprida; atualização da expressão inicial) {
    // código que será repetido }

    //obs: expressão inicial: início do loop. Aqui, normalmente, declaramos uma variável, que será o valor inicial a ser usado;
    //condição a ser cumprida: critério que vai parar o loop, caso a condição seja atendida;
    //atualização da expressão inicial: alteração da variável utilizada na primeira expressão, o que acontece a cada loop, até a condição ser atendida.

    //obs: Para nos referirmos a laços de repetição (loops), podemos utilizar a palavra ‘iteração’, que significa ‘repetição’.

    //obs: Se você declarar a variável utilizando const, ela não poderá ser alterada e o seu for não vai funcionar da forma esperada.

    //obs: Você pode nomear essa variável do jeito que preferir, porém é uma boa prática chamá-la de index (índice), já que a iteração acontece pelo index do array.

    //obs:  Você também pode usar o operador de decremento --. Ele vai ter o mesmo efeito que index = index - 1. Ficaria da seguinte forma: --index. Mas tenha atenção: esse operador tira apenas uma unidade do número!

    
    for (let index = 10; index >= 1; --index) {  
        console.log(index);
}
console.log('UHULLLLLLLLLLLLLLLLLLLL FELIZ ANO NOVOOOOOOOO 🍾🎆🎆✨');

/*O for funciona da seguinte forma:

Primeiro passo: Inicia o loop, declarando a variável index com o valor 10;

Segundo passo: A condição a ser verificada é se o index é maior ou igual a 1;

Terceiro passo: Se a condição verificada for verdadeira, ou seja, o valor de index ser maior ou igual a 1, então o console.log(index) é executado;

Quarto passo: Após a execução do console.log, o valor do index é decrementado; Após o decremento do index, é verificada a condição a ser cumprida novamente, ou seja, se o index é maior ou igual a 1.

Quinto passo: Quando a condição a ser cumprida for falsa, nesse caso quando o index for menor que 1, então o loop é finalizado e o restante do código é executado.

Você conseguiu fazer o seu primeiro for!!*/

//ex:
//obs:O carrinho começa vazio, vamos adicionar itens nele durante o for.

//obs: Quando posicaoNaLista for igual ao tamanho do array listaDeCompras, a condição é falsa e o for para. Dessa forma vamos conseguir pegar todos os itens da lista de compras.

//obs: Para pegar o tamanho de um array, use o .length. 

//obs: É possível usar o operador de incremento ++ em substituição à estrutura posicaoNaLista = posicaoNaLista + 1, ficando da seguinte forma: ++ posicaoNaLista. Mas esse operador adiciona somente uma unidade ao número.


const listaDeCompras = ['maçã','gengibre','miojo','biscoito/bolacha','banana','feijão carioquinha','pasta de dente',]; // itens para comprar
const carrinho = []; // array vazio que irá receber os itens da variável listaDeCompras

for (let posicaoNaLista = 0; posicaoNaLista < listaDeCompras.length; ++posicaoNaLista) {
    if (listaDeCompras[posicaoNaLista] ==='maçã' || listaDeCompras[posicaoNaLista] ==='banana') {
        carrinho.push(listaDeCompras[posicaoNaLista]);
    }

}
console.log(carrinho);


let numero = 7
for (let contador = 1; contador <= 10; ++contador) {
    console.log(numero * contador);
}


//Utilizando duas estruturas de repetição for aninhadas

//obs:Também será necessária uma lista para armazenar as amizades em comum

//obs:Não se esqueça de utilizar o console.log() na variável amizadesEmComum para verificar se tudo deu certo mesmo 😅.

const amizadesDaJuliana = ['Erickson', 'Cleyton', 'Laura', 'Claudio', 'Sheila', 'Vinicius', 'Leticia'];
const amizadesDoAdilson = ['Leticia', 'Guilherme', 'Cleyton', 'Ivan', 'Vinicius', 'Gisele'];
const amizadesEmComum = [];

for (indexDaJuliana = 0; indexDaJuliana < amizadesDaJuliana.length; ++indexDaJuliana) {
   for (let indexDoAdilson = 0; indexDoAdilson < amizadesDoAdilson.length; ++indexDoAdilson){
        if (amizadesDaJuliana[indexDaJuliana] === amizadesDoAdilson[indexDoAdilson]) {
            amizadesEmComum.push(amizadesDoAdilson[indexDoAdilson]);
        }  
     }
}
console.log(amizadesEmComum);

const nomes = ['João', 'Lucas', 'Juliana', 'Amanda', 'Guilherme'];
let maiorNome = '';

for (let index = 0; index < nomes.length; index = index + 1) {
  if (nomes[index].length < maiorNome.length) {
    maiorNome = nomes[index];
  }
}
console.log(maiorNome);






function mediaDosNumeros(arrayNumeros) {
    let soma = 0;
    let media = 0;

    for (let index = 0; index < arrayNumeros.length; index = index + 1) {
        soma = soma + arrayNumeros[index];
     }
    media = soma / arrayNumeros.length;
    return media;  
  }


  function imprimeItens(array) {
    for (let index = 0; index < array.length; index = index + 1) {
      console.log(array[index]);
    }
  }
c





