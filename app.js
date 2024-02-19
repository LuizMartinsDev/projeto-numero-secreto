let listaDeNumerosSorteados = [];
let numeroLimite = 10;

function gerarNumeroAleatorio(params) {

   let numeroGerado = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaDeNumerosSorteados.length;

    if(quantidadeElementosLista == numeroLimite){
        listaDeNumerosSorteados = []
    }
   if(listaDeNumerosSorteados.includes(numeroGerado)){
        return gerarNumeroAleatorio()
   } else{
        listaDeNumerosSorteados.push(numeroGerado)
        console.log(listaDeNumerosSorteados)
        return numeroGerado
   }
}

let numeroSecreto = gerarNumeroAleatorio();

let tentativas = 1;

console.log(numeroSecreto)

function exibirTextoMaiusculo(tag, texto){

    let campo = document.querySelector(tag);

    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoMaiusculo('h1', 'Jogo do número secreto');

    exibirTextoMaiusculo('.texto__paragrafo', 'Escolha um número entre 1 e 10');
}


exibirMensagemInicial()



function verificarChute(){
    let campoInput = document.querySelector('input').value
    if(campoInput == numeroSecreto){

        exibirTextoMaiusculo('h1', "Parabéns você acertou!");

        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';

        let mensagem = `Você descorbiu o número secreto em ${tentativas} ${palavraTentativas}`;

        exibirTextoMaiusculo('p', mensagem);

        document.querySelector('#reiniciar').removeAttribute('disabled');


    } else {
        if(campoInput < numeroSecreto) {

            exibirTextoMaiusculo('h1', "Errou");

            exibirTextoMaiusculo('p', `O número secreto é maior que ${campoInput}`);

        } else {

            exibirTextoMaiusculo('h1', "Errou");

            exibirTextoMaiusculo('p', `O número secreto é menor que ${campoInput}`);
        }
        tentativas++;
        limparCampo();
    }
}

function limparCampo(){
    campoInput = document.querySelector('input');
    campoInput.value = ''
}




function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();

    limparCampo();

    tentativas = 1;

   exibirMensagemInicial()

   document.querySelector('#reiniciar').setAttribute('disabled', true);
}