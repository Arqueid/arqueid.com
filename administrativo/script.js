document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const password = document.getElementById('password').value;

    // Senha correta
    const correctPassword = '07111993';

    if (password === correctPassword) {
        // Redireciona para a página administrativa
        window.location.href = 'adm.html';
    } else {
        alert('Senha incorreta. Tente novamente.');
    }
});