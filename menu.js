/**
 * ARQUIVO: menu.js
 * GUIA E PASSO A PASSO PARA O PROGRAMADOR:
 * 1. Este script injeta automaticamente a estrutura HTML padrão (Barra Superior, 
 *    Cabeçalho, Menu Lateral e Rodapé) em todas as páginas que o carregarem.
 * 2. COMO ADICIONAR OU REMOVER LINKS: Edite diretamente as strings HTML dentro 
 *    das variáveis abaixo (topBarHTML, sidebarHTML, footerHTML).
 * 3. Contém as funções de interação: toggleMenu(), verificarEnter() e realizarBusca().
 */

document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================
    // 1. DEFINIÇÃO DOS COMPONENTES HTML
    // ==========================================

    // Barra superior de navegação global
    const topBarHTML = `
        <nav class="top-bar">
            <a href="https://arqueid.com.br/home/">Home</a> 
            <a href="#">Tartago</a>
            <a href="#">Detalhe</a>
            <a href="https://ultradownload89.webnode.page/">Ultradownload89</a>
            <a href="https://arqueid.github.io/apoie07/">WTube</a>
         </nav>
    `;

    // Cabeçalho principal com botão de menu hambúrguer e campo de busca
    const mainHeaderHTML = `
        <div class="main-header">
            <div class="menu-trigger" onclick="toggleMenu()">
                <span class="hamburger-icon">&#9776;</span> 
                <span class="menu-label">MENU</span>
            </div>
            <div class="search-box">
                <input type="text" id="campoBuscaHome" placeholder="BUSCAR" onkeypress="verificarEnter(event)">
                <span class="search-icon" onclick="realizarBusca()">&#128269;</span>
            </div>
        </div>
    `;

    // Overlay escuro e menu lateral deslizante (Sidebar)
    const sidebarHTML = `
        <div class="overlay" onclick="toggleMenu()"></div> 
        <aside class="sidebar" id="sidebarMenu">
            <span class="close-btn" onclick="toggleMenu()">&times;</span>
            <ul>
                <li><a href="#">Sony Vegas</a></li>
                <li><a href="#">Virtual dj</a></li>
                <li><a href="#">Efeito Sonoro</a></li>
            </ul>
        </aside>
    `;

    // Rodapé padrão do site
    const footerHTML = `
        <footer>
            <p>&copy; 2026 Arqueid</p>
        </footer>
    `;

    // ==========================================
    // 2. INJEÇÃO DOS ELEMENTOS NO DOM
    // ==========================================
    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
    document.body.insertAdjacentHTML('afterbegin', mainHeaderHTML);
    document.body.insertAdjacentHTML('afterbegin', topBarHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});

// ==========================================
// 3. FUNÇÕES DE CONTROLE E INTERAÇÃO
// ==========================================

/**
 * Função: toggleMenu()
 * Descrição: Abre ou fecha o menu lateral e ativa o fundo escuro (overlay).
 * Como remover/modificar: Altera a classe 'active' da sidebar e do overlay.
 */
function toggleMenu() {
    const sidebar = document.getElementById('sidebarMenu');
    const overlay = document.querySelector('.overlay');
    if (sidebar && overlay) {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

/**
 * Função: verificarEnter(event)
 * Descrição: Identifica se a tecla pressionada no campo de busca foi o 'Enter'.
 */
function verificarEnter(event) {
    if (event.key === "Enter") {
        realizarBusca();
    }
}

/**
 * Função: realizarBusca()
 * Descrição: Coleta o termo digitado e redireciona para a página de busca.
 */
function realizarBusca() {
    var termo = document.getElementById('campoBuscaHome').value;
    if (termo) {
        window.location.href = "busca.html?q=" + encodeURIComponent(termo);
    }
}
