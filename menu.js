/* ==========================================================================
   GUIA DE MANUTENÇÃO DO MENU
   
   - Para adicionar um link na barra superior (.top-bar):
     Adicione a tag <a> dentro de topBarHTML na função renderizarHeader().
     
   - Para adicionar uma categoria no menu lateral (.sidebar):
     Adicione uma tag <li><a href="...">NOME</a></li> na lista dentro da <aside class="sidebar">.
     
   - Para remover um link/item:
     Basta deletar a linha da tag <a> ou <li> correspondente no HTML string abaixo.
   ========================================================================== */

function renderizarHeader() {
    // 1. Estrutura HTML do Topo, Menu Principal e Sidebar Lateral
    const topBarHTML = `
        <nav class="top-bar">
            <!-- ADICIONE OU REMOVA LINKS DA BARRA SUPERIOR AQUI -->
            <a href="https://arqueid.com.br/downloads" target="_blank">Downloads</a>
            <a href="https://arqueid.com.br/tartago/" target="_blank">Tartago</a>
            <a href="https://arqueid.com.br/detalhe/" target="_blank">Detalhe</a>
            <a href="https://arqueid.com.br/cepdeapiai/" target="_blank">Cep</a>
        </nav>
        
        <div class="main-header">
            <div class="menu-trigger" onclick="toggleMenu()">
                <span class="hamburger-icon">&#9776;</span>
                <span class="menu-label">MENU</span>
            </div>

            <div class="search-box">
                <input type="text" id="campoBuscaHeader" placeholder="BUSCAR" onkeypress="verificarEnterHeader(event)">
                <span class="search-icon" onclick="realizarBuscaHeader()">&#128269;</span>
            </div>
        </div>

        <div class="overlay" onclick="toggleMenu()"></div>

        <aside class="sidebar" id="sidebarMenu">
            <span class="close-btn" onclick="toggleMenu()">&times;</span>
            <ul>
                <!-- ADICIONE OU REMOVA ITENS DO MENU LATERAL AQUI -->
                <li><a href="#" target="_blank">Sony Vegas</a></li>
                <li><a href="#" target="_blank">Virtual dj</a></li>
                <li><a href="#" target="_blank">Efeito Sonoro</a></li>
            </ul>
        </aside>
    `;

    // 2. Injeta o HTML diretamente no início do <body> da página
    document.body.insertAdjacentHTML('afterbegin', topBarHTML);
}

// Alterna visibilidade do menu lateral (Slide)
function toggleMenu() {
    const sidebar = document.getElementById('sidebarMenu');
    const overlay = document.querySelector('.overlay');
    if (sidebar && overlay) {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

// Verifica a tecla Enter no campo de busca
function verificarEnterHeader(event) {
    if (event.key === "Enter") {
        realizarBuscaHeader();
    }
}

// Redireciona para a página busca.html
function realizarBuscaHeader() {
    const input = document.getElementById('campoBuscaHeader');
    if (input && input.value.trim() !== '') {
        window.location.href = "../busca.html?q=" + encodeURIComponent(input.value.trim());
    }
}

// Executa a montagem do menu assim que o DOM estiver pronto
document.addEventListener('DOMContentLoaded', renderizarHeader);