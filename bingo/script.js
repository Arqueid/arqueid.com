document.getElementById('adicionarNumero').addEventListener('click', function() {
    const numeroSorteado = document.getElementById('numeroSorteado').value;
    if (numeroSorteado >= 1 && numeroSorteado <= 75) {
        adicionarNumeroSorteado(numeroSorteado);
        document.getElementById('numeroSorteado').value = '';
    } else {
        alert('Por favor, insira um número válido entre 1 e 75.');
    }
});

function adicionarNumeroSorteado(numero) {
    let letra;
    if (numero >= 1 && numero <= 15) {
        letra = 'B';
    } else if (numero >= 16 && numero <= 30) {
        letra = 'I';
    } else if (numero >= 31 && numero <= 45) {
        letra = 'N';
    } else if (numero >= 46 && numero <= 60) {
        letra = 'G';
    } else if (numero >= 61 && numero <= 75) {
        letra = 'O';
    }

    const coluna = document.getElementById(letra);
    const numeroElemento = document.createElement('div');
    numeroElemento.textContent = numero;
    coluna.appendChild(numeroElemento);
}