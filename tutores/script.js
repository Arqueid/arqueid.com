const numerosSorteados = [];
const maxNumeros = 35;

document.getElementById('sortearBtn').addEventListener('click', sortearNumero);

function sortearNumero() {
    if (numerosSorteados.length >= maxNumeros) {
        alert('Todos os números já foram sorteados!');
        return;
    }

    let numeroSorteado;
    do {
        numeroSorteado = Math.floor(Math.random() * maxNumeros) + 1;
    } while (numerosSorteados.includes(numeroSorteado));

    numerosSorteados.push(numeroSorteado);
    atualizarNumerosSorteados(numeroSorteado);
}

function atualizarNumerosSorteados(ultimoNumero) {
    const numerosSorteadosElement = document.getElementById('numerosSorteados');
    numerosSorteadosElement.innerHTML = '';

    numerosSorteados.forEach((numero, index) => {
        const numeroElement = document.createElement('div');
        numeroElement.classList.add('numero');
        if (numero === ultimoNumero) {
            numeroElement.classList.add('destaque');
            setTimeout(() => {
                numeroElement.classList.remove('destaque');
            }, 2000); // Remove o destaque após 2 segundos
        }
        numeroElement.textContent = numero;
        numerosSorteadosElement.appendChild(numeroElement);
    });
}