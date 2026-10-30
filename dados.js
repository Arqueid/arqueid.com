// BANCO DE DADOS MANUAL
// Para adicionar mais notícias, copie um bloco entre chaves {} e cole abaixo, separando por vírgula.

/* 
  GUIA PARA O PROGRAMADOR (SEGURANÇA DE DOMÍNIO):
  - Função: Verifica se o site que está carregando este script é o domínio oficial.
  - COMO FUNCIONA: Se o script for injetado em outro domínio não autorizado, o conteúdo do banco é anulado.
  - COMO ADICIONAR NOVO DOMÍNIO: Inclua o endereço na constante 'dominioPermitido'.
  - COMO REMOVER A PROTEÇÃO: Basta apagar todo este bloco IIFE abaixo.
*/
(function() {
    const dominioPermitido = "arqueid.com.br";
    const hostAtual = window.location.hostname;
    
    // Valida se o host atual é o domínio principal, subdomínio ou ambiente local de testes
    const acessoPermitido = hostAtual === dominioPermitido || 
                            hostAtual.endsWith("." + dominioPermitido) || 
                            hostAtual === "localhost" || 
                            hostAtual === "127.0.0.1";

    if (!acessoPermitido) {
        // Esvazia os dados caso o script seja carregado externamente sem autorização
        window.bancoDeDados = [];
        console.warn("Acesso negado: Banco de dados restrito a arqueid.com.br.");
        return;
    }
})();

// os 4 Primeiros tem destaque principalmente o 1
// digite final para ir ao fim das IDs
const bancoDeDados = [
    {
        id: 1,
        titulo: "Lançamento do novo Portal Dark Mode agita a web",
        resumo: "Como ejetar um hd ou disco do computador via promp de comando cmd",
        categoria: "TECNOLOGIA",
        tempo: "em 30/10/2026",
        imagem: "https://yourimageshare.com/ib/L1RyR7VRhM.png", // Link da imagem 16:9
        link: "https://arqueid.com.br/artigo/artigo-999.html" // Link para onde vai ao clicar
    },
    {
        id: 2,
        titulo: "Tutorial: Como criar menus responsivos com CSS",
        resumo: "Aprenda passo a passo como fazer o menu hambúrguer funcionar sem usar frameworks pesados.",
        categoria: "PROGRAMAÇÃO",
        tempo: "há 5 horas",
        imagem: "foto.jpg",
        link: "https://www.w3schools.com"
    },
    {
        id: 3,
        titulo: "Tutorial: Como criar menus responsivos com CSS",
        resumo: "Aprenda passo a passo como fazer o menu hambúrguer funcionar sem usar frameworks pesados.",
        categoria: "PROGRAMAÇÃO",
        tempo: "há 5 horas",
        imagem: "foto.jpg",
        link: "https://www.w3schools.com"
    },
    {
        id: 4,
        titulo: "Tutorial: Como criar menus responsivos com CSS",
        resumo: "Aprenda passo a passo como fazer o menu hambúrguer funcionar sem usar frameworks pesados.",
        categoria: "PROGRAMAÇÃO",
        tempo: "há 5 horas",
        imagem: "foto.jpg",
        link: "https://www.w3schools.com"
    },
    {
        id: 5,
        titulo: "O futuro do Javascript no desenvolvimento Front-end",
        resumo: "Especialistas discutem as novas atualizações da linguagem e o que esperar para 2026.",
        categoria: "MERCADO",
        tempo: "há 1 dia",
        imagem: "https://via.placeholder.com/320x180/333333/ffffff?text=JS+FUTURO",
        link: "https://developer.mozilla.org"
    }
];
