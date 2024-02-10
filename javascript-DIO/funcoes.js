//  As funções podem receber e retornar informações. Elas também possibilitam a reutilização do código, mantendo-o limpo e organizado, já que podem ser executadas quantas vezes for necessário.

 /* estrutura de uma função -> function nomeDaFuncao() {
   bloco de código a ser executado
 }    */

 


 function imprimeSaudacao() {
   return 'olá, Mundo';
 }
  console.log(imprimeSaudacao());

// Atenção: O return interrompe a execução da função, isto é, ao utilizar o return, qualquer código abaixo dele dentro do mesmo bloco de código não vai ser executado. Observe:

  function imprimeSaudacao2() {
    const saudacao = 'Olá, Gisele!';
  
    console.log('Eu sou um console e vou aparecer!');
    return saudacao;
  
    console.log('Eu sou um console e não vou aparecer 😭!');
  }
  
  console.log(imprimeSaudacao2());

  // Anota aí 📣 : A palavra return indica qual é o retorno esperado e finaliza a execução da função.

  // Parâmetros
  // obs: Na declaração da função temos a palavra function, seguida do nome da função e dos parênteses. São eles que vão receber o parâmetro. Observe como isso acontece:

  function imprimeSaudacao3(parametro) {
    return parametro;
  }

  console.log(imprimeSaudacao3('Oi! Eu sou um parâmetro!'));
  console.log(imprimeSaudacao3('Olá! Bruno!'));

 //                            //                     //



  function imprimeSaudacao(nome) {
    const saudacao = 'Olá, ' + nome + '!';
    return saudacao;
  }
  
  console.log(imprimeSaudacao('Gisele'));

//                       //                          //



  function imprimeSaudacao(nome, sobrenome, ultimoNome) {
    const saudacao = 'Olá, ' + nome + ' '+ sobrenome + ' ' + ultimoNome + '!';
    return saudacao;
  }
  
  console.log(imprimeSaudacao('Bruno', 'Barbosa', 'Vicente'));

  //Atenção: A ordem dos parâmetros importa! Ou seja, se você declarou o nome como primeiro parâmetro, ao chamar a função, o valor a ser passado primeiro é referente ao nome da pessoa.

  function imprimeSaudacao4(nome, segundoNome, ultimoNome, idade) {
    const saudacao = 'Olá! ' + nome + ' ' + segundoNome + ' ' + ultimoNome + '!';
    const exibeIdade = 'Você tem ' + idade + ' anos.';
    return saudacao + ' ' + exibeIdade;
  }

  const nomeDaPessoa = 'Bruno';
  const segundoNomeDaPessoa = 'Barbosa';
  const ultimoNomeDaPessoa = 'Vicente';

  console.log(imprimeSaudacao4(nomeDaPessoa, segundoNomeDaPessoa, ultimoNomeDaPessoa, 30));

//                                   ///                                             ///


function imprimeSaudacao(nome, sobrenome, idade){
    const saudacao = 'Olá, ' + nome + ' ' + sobrenome + '!';
    const exibeIdade = 'Voce tem ' + idade + ' anos.';
    return saudacao + ' ' + exibeIdade;
}
console.log(imprimeSaudacao('Carolina', 'Pizol', 28));
console.log(imprimeSaudacao('Bruno', 'Barbosa', 30));
console.log(imprimeSaudacao('Bebezinha', 'Vicente', 7))

//                   //                            //                            //


function calcularDespesas(luz, internet) {
    const despesaTotal = luz + internet;
    return 'Esse mês, a despesa foi de: R$ ' + despesaTotal;
}
console.log(calcularDespesas(230,152));

///                                 ///                                /// 

function clientePedido(numeroPedido) {
    
    if (numeroPedido === 1) {
       return 'Pizza de Calabresa';
    } else if (numeroPedido === 2) {
      return 'Pizza de Quatro Queijos';
    } else if (numeroPedido === 3) {
      return 'Pizza de Frango com Catupiry';
    } else if (numeroPedido === 4) {
     return 'Pizza de Brigadeiro';
    } else {
    return 'Número do pedido inválido!';
    }
  }
console.log(clientePedido())

///                             ///                            ///



