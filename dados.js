/**
 * ARQUIVO: dados.js (Script Ponte / Proxy Remoto)
 * GUIA PARA O PROGRAMADOR:
 * - Função: Este arquivo serve como um "falso dados". Ele intercepta a chamada 
 *   local e injeta dinamicamente o arquivo JavaScript real hospedado em um link externo.
 * - Como alterar o link: Mude o valor da constante 'urlExterna' para o novo link do arquivo .js.
 * - Como voltar a usar dados locais: Basta apagar este código e colar o array 
 *   original de dados diretamente dentro deste arquivo.
 */

(function() {
    // URL do arquivo JS externo
    var urlExterna = "https://files.catbox.moe/4r7g84.js";

    // Cria dinamicamente a tag <script> apontando para o link externo
    var scriptElement = document.createElement('script');
    scriptElement.src = urlExterna;
    scriptElement.async = false; // Garante que o script carregue na ordem correta

    // Insere o script no cabeçalho (head) da página atual
    document.head.appendChild(scriptElement);
})();