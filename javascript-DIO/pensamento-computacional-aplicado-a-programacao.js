let nome = 'Sheil';
let cargo = 'gerência';
let senhaDeAcesso = 12345

let mensagem;

if (nome === 'Sheila' && cargo === 'gerência') {
    if (senhaDeAcesso === 12345) {
        mensagem = 'Acesso para a visualização de produtos liberada!'
    } else if (nome === 'Jorge' && cargo === 'vendas') {
        mensagem = 'Acesso para a visualização de produtos liberada!'
    } else {
        mensagem = 'Você não possui acesso!'
    }
}

console.log(mensagem)