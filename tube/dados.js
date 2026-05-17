// ARQUIVO: dados.js
// FUNÇÃO: Atuar como banco de dados central do sistema Tube.
// GUIA FUTURO PROGRAMADOR: 
// - Para ADICIONAR um novo vídeo: Copie um bloco entre chaves { ... }, coloque uma vírgula após o último bloco existente e cole o novo bloco.
// - Para REMOVER um vídeo: Apague todo o bloco correspondente, desde a chave de abertura { até a chave de fechamento }, incluindo a vírgula.
// - IMPORTANTE: Não repita o 'idUnico'. O 'idGrupo' é o responsável por ligar os vídeos recomendados no player.

const bancoDeVideos = [
    {
        idUnico: "vid_01",
        idGrupo: "santos_fc", // Equivalente ao seu "a008". Vídeos com "santos_fc" serão recomendados juntos.
        titulo: "Santos FC - Gols Históricos da Vila",
        descricao: "Melhores momentos e jogadas clássicas do Santos.",
        urlVideo: "caminho_do_seu_video/santos.mp4", // Link direto do mp4 ou webm
        urlCapa: "caminho_da_imagem/capa_santos.jpg", // Link da miniatura
        tags: ["santos", "futebol", "pelé", "vila belmiro"]
    },
    {
        idUnico: "vid_02",
        idGrupo: "santos_fc", 
        titulo: "Episódio Clássico - Chaves em Acapulco",
        descricao: "Episódio completo das férias em Acapulco.",
        urlVideo: "caminho_do_seu_video/chaves.webm",
        urlCapa: "caminho_da_imagem/capa_chaves.jpg",
        tags: ["chaves", "chespirito", "humor", "acapulco"]
    },
    {
        idUnico: "vid_03",
        idGrupo: "filmes_antigos", 
        titulo: "Amácio Mazzaropi - Jeca Tatu",
        descricao: "Filme completo remasterizado.",
        urlVideo: "caminho_do_seu_video/jeca.mp4",
        urlCapa: "caminho_da_imagem/capa_mazzaropi.jpg",
        tags: ["mazzaropi", "filme", "cinema brasileiro", "comédia"]
    },
    {
        idUnico: "vid_04",
        idGrupo: "series_acao", 
        titulo: "O Incrível Hulk - Transformação",
        descricao: "Cena clássica da série de TV dos anos 70.",
        urlVideo: "caminho_do_seu_video/hulk.mp4",
        urlCapa: "caminho_da_imagem/capa_hulk.jpg",
        tags: ["hulk", "bill bixby", "lou ferrigno", "série"]
    },
    {
        idUnico: "vid_05",
        idGrupo: "santos_fc", // Usa o mesmo idGrupo do vid_01 para aparecer nos recomendados dele
        titulo: "Campeonato de 2011 - Final",
        descricao: "Jogo completo da final histórica.",
        urlVideo: "caminho_do_seu_video/santos_2011.mp4",
        urlCapa: "caminho_da_imagem/capa_santos_2011.jpg",
        tags: ["santos", "neymar", "futebol", "final"]
    }
];

// FUNÇÃO AUXILIAR GLOBAL
// Objetivo: Embaralhar arrays para gerar resultados aleatórios na Home e nos Recomendados.
// Como alterar: Não é necessário alterar. É um algoritmo padrão (Fisher-Yates).
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}