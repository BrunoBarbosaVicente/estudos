if (1 + 1 === 2) { // true
  console.log('Entrou no escopo deste if'); // executa o código
}

if (1 + 1 === 3) { // false
  console.log('Não entrou no escopo deste if'); // não executa o código
}

if (estiver frio) { // SE estiver frio
    saia com casaco
  } else { // SE NÃO
    deixe o casaco em casa
  }


const frutaDisponivel = 'laranja';

if (frutaDisponivel === 'abacate') {
  console.log('Vitamina de abacate saindo');
} else if (frutaDisponivel === 'banana') {
  console.log('Vitamina de banana saindo');
} else {
  console.log('Suco de ' + frutaDisponivel + ' saindo');
}

const notaDaPessoaEstudante = 7.5;

if (notaDaPessoaEstudante >= 8) {
  console.log('Nota A');
} else if (notaDaPessoaEstudante >= 6 && notaDaPessoaEstudante < 8 ) {
  console.log('Nota B');
} else if (notaDaPessoaEstudante >= 4 && notaDaPessoaEstudante < 6 ) {
  console.log('Nota C');
} else {
  console.log('Nota D');
}
/***** Não altere os códigos dentro desse bloco *****/
let dadoNumero = 16;
let classe = '';
let resultado;
/***** Não altere os códigos dentro desse bloco *****/

  /***** Escreva seu if nas linhas abaixo *****/
  if (dadoNumero < 4) {
    classe = 'Guerreiro(a)', resultado = 'Sua classe é: ' + classe;
  } else if (dadoNumero >= 4 && dadoNumero < 8) {
    classe = 'Ladino(a)', resultado = 'Sua classe é: ' + classe;
  } else if (dadoNumero >= 8 && dadoNumero < 12) {
    classe = 'Curandeiro(a)', resultado = 'Sua classe é: ' + classe;
  } else if (dadoNumero >= 12 && dadoNumero < 16) {
    classe = 'Arqueiro(a)', resultado = 'Sua classe é: ' + classe;
  } else if (dadoNumero >= 16) {
    classe = 'Feiticeiro(a)', resultado = 'Sua classe é: ' + classe;
  } 
 console.log(resultado);


