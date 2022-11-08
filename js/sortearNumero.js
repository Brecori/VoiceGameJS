const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + menorValor);
}

console.log('Número Secreto: ' , numeroSecreto);

const elementoMenorValor = document.getElementById('menorValor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maiorValor');
elementoMaiorValor.innerHTML = maiorValor;

