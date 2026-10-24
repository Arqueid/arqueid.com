const displayGlobal = document.getElementById('display-global');

// FUNÇÃO: Busca as músicas no banco de dados
function buscarMusicas() {
    const termo = document.getElementById('campo-busca').value.toLowerCase();
    const listaDiv = document.getElementById('lista-resultados');
    listaDiv.innerHTML = ''; 

    if (termo === '') return; 

    const resultados = listaDeMusicas.filter(musica => {
        const nasTags = musica.tags.some(tag => tag.toLowerCase().includes(termo));
        const noTitulo = musica.titulo.toLowerCase().includes(termo);
        const noArtista = musica.artista.toLowerCase().includes(termo);
        return nasTags || noTitulo || noArtista;
    });

    resultados.forEach(musica => {
        const div = document.createElement('div');
        div.className = 'item-musica';
        div.draggable = true; 
        div.innerText = `${musica.artista} - ${musica.titulo}`;
        
        div.ondragstart = (event) => {
            const dados = { link: musica.link, titulo: musica.titulo, artista: musica.artista };
            event.dataTransfer.setData('application/json', JSON.stringify(dados));
        };
        listaDiv.appendChild(div);
    });
}

function permitirSoltar(event) {
    event.preventDefault(); 
}

function soltarMusica(event, deckId) {
    event.preventDefault();
    const audio = document.getElementById(`audio-${deckId}`);
    
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
        const arquivoFisico = event.dataTransfer.files[0];
        const urlArquivo = URL.createObjectURL(arquivoFisico); 
        carregarNoAudio(audio, urlArquivo, arquivoFisico.name, deckId);
    } 
    else {
        const dadosTexto = event.dataTransfer.getData('application/json');
        if (dadosTexto) {
            const dados = JSON.parse(dadosTexto);
            const nomeCompleto = `${dados.artista} - ${dados.titulo}`;
            carregarNoAudio(audio, dados.link, nomeCompleto, deckId);
        }
    }
}

// FUNÇÃO MODIFICADA: Trata o item solto na vinheta atualizando apenas o texto
function soltarVinheta(event, numeroVinheta) {
    event.preventDefault();
    const textoSlot = document.getElementById(`texto-v${numeroVinheta}`);
    const audio = document.getElementById(`audio-v${numeroVinheta}`);

    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
        const arquivoFisico = event.dataTransfer.files[0];
        const urlArquivo = URL.createObjectURL(arquivoFisico);
        audio.src = urlArquivo;
        textoSlot.innerText = arquivoFisico.name.substring(0, 10); 
    } else {
        const dadosTexto = event.dataTransfer.getData('application/json');
        if (dadosTexto) {
            const dados = JSON.parse(dadosTexto);
            audio.src = dados.link;
            textoSlot.innerText = dados.titulo; 
        }
    }
}

function carregarNoAudio(elementoAudio, url, nome, deckId) {
    elementoAudio.src = url;
    displayGlobal.innerText = `[DECK ${deckId.toUpperCase()}] ${nome}`;
    
    // Quando a música carregar, mostra o tempo total no visor
    elementoAudio.onloadedmetadata = () => {
        document.getElementById(`tempo-${deckId}`).innerText = formatarTempo(elementoAudio.duration);
    };

    // Atualiza o tempo decrescente enquanto a música toca
    elementoAudio.ontimeupdate = () => {
        const restante = elementoAudio.duration - elementoAudio.currentTime;
        document.getElementById(`tempo-${deckId}`).innerText = formatarTempo(restante);
    };

    elementoAudio.onended = () => parar(deckId);
}

// FUNÇÃO: Inicia a reprodução do Deck e gira o disco
function tocar(deckId) {
    const audio = document.getElementById(`audio-${deckId}`);
    if (audio.src) {
        audio.play();
        document.getElementById(`disco-${deckId}`).classList.add('rodando');
    }
}

// FUNÇÃO: Pausa a reprodução no ponto atual
function pausar(deckId) {
    const audio = document.getElementById(`audio-${deckId}`);
    audio.pause();
    document.getElementById(`disco-${deckId}`).classList.remove('rodando');
}

// FUNÇÃO NOVA: Para a reprodução, volta para o início (0s) e para o disco
function parar(deckId) {
    const audio = document.getElementById(`audio-${deckId}`);
    audio.pause();
    audio.currentTime = 0; 
    document.getElementById(`disco-${deckId}`).classList.remove('rodando');
    
    // Quando parar, volta o visor para o tempo total original da música
    if (!isNaN(audio.duration)) {
        document.getElementById(`tempo-${deckId}`).innerText = formatarTempo(audio.duration);
    }
}

// FUNÇÃO MODIFICADA: Alterna entre tocar a vinheta e parar a vinheta
function tocarVinheta(numeroVinheta) {
    const audio = document.getElementById(`audio-v${numeroVinheta}`);
    if (audio.src) {
        // Verifica se o áudio está pausado ou no começo
        if (audio.paused) {
            audio.currentTime = 0; // Volta para o início antes de tocar
            audio.play();
        } else {
            // Se já estiver tocando, o clique interrompe e zera
            audio.pause();
            audio.currentTime = 0;
        }
    }
}

function mudarVolume(deckId, valor) {
    const audio = document.getElementById(`audio-${deckId}`);
    audio.volume = valor; 
}
// NOVA FUNÇÃO: Converte os segundos em formato MM:SS
function formatarTempo(segundos) {
    if (isNaN(segundos)) return "00:00";
    const min = Math.floor(segundos / 60);
    const seg = Math.floor(segundos % 60);
    return `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
}