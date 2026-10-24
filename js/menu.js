/* ======================================================================
   GUIA PARA O PROGRAMADOR - COMPONENTE DE MENU REUTILIZÁVEL (menu.js)
   - Injeta o HTML da barra superior, cabeçalho, menu lateral e overlay.
   - Contém a lógica de abertura do menu (toggleMenu) e busca (realizarBusca).
   - Como adicionar em nova página: Basta incluir <script src="js/menu.js"></script>.
======================================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const menuHTML = `
        <nav class="top-bar">
            <a href="https://arqueid.com.br/downloads" target="_blank">Downloads</a>
            <a href="https://arqueid.com.br/tartago/" target="_blank">Tartago</a>
            <a href="https://arqueid.com.br/detalhe/" target="_blank">Detalhe</a>
            <a href="https://arqueid.com.br/cepdeapiai/" target="_blank">Cep</a>
        </nav>

        <div class="main-header">
            <div class="menu-trigger" onclick="toggleMenu()">
                <span class="hamburger-icon">&#9776;</span> <span class="menu-label">MENU</span>
            </div>

            <div class="search-box">
                <input type="text" id="campoBuscaHome" placeholder="BUSCAR" onkeypress="verificarEnter(event)">
                <span class="search-icon" onclick="realizarBusca()">&#128269;</span>
            </div>
        </div>

        <div class="overlay" onclick="toggleMenu()"></div> 
        
        <aside class="sidebar" id="sidebarMenu">
            <span class="close-btn" onclick="toggleMenu()">&times;</span>
            <ul>
                <li><a href="#" target="_blank">Sony Vegas</a></li>
                <li><a href="#" target="_blank">Virtual dj</a></li>
                <li><a href="#" target="_blank">Efeito Sonoro</a></li>
            </ul>
        </aside>
    `;

    // Insere o menu no início do corpo da página atual
    document.body.insertAdjacentHTML('afterbegin', menuHTML);
});

// Função para abrir/fechar o menu lateral
function toggleMenu() {
    const sidebar = document.getElementById('sidebarMenu');
    const overlay = document.querySelector('.overlay');
    if (sidebar && overlay) {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

// Função para capturar a tecla Enter na barra de busca
function verificarEnter(event) {
    if (event.key === "Enter") {
        realizarBusca();
    }
}

// Função que processa o termo de busca e redireciona
function realizarBusca() {
    var termo = document.getElementById('campoBuscaHome').value;
    if (termo) {
        window.location.href = "https://arqueid.com.br/busca.html?q=" + encodeURIComponent(termo);
    }
}