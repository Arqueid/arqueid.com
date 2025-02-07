const professores = [
    { nome: "Francis", imagem: "imagens/francis.jpg", escolhas: 0 },
    { nome: "Inara", imagem: "imagens/inara.jpg", escolhas: 0 },
    { nome: "Jocélia", imagem: "imagens/jocelia.jpg", escolhas: 0 },
    { nome: "Joelma", imagem: "imagens/joelma.jpg", escolhas: 0 },
    { nome: "Junior", imagem: "imagens/junior.jpg", escolhas: 0 },
    { nome: "Marijane", imagem: "imagens/marijane.jpg", escolhas: 0 },
    { nome: "Mário", imagem: "imagens/mario.jpg", escolhas: 0 },
    { nome: "Michele", imagem: "imagens/michele.jpg", escolhas: 0 },
    { nome: "Moisés", imagem: "imagens/moises.jpg", escolhas: 0 },
    { nome: "Nycassia", imagem: "imagens/nycassia.jpg", escolhas: 0 },
    { nome: "Zilda", imagem: "imagens/zilda.jpg", escolhas: 0 }
];

const container = document.getElementById('professores-container');

professores.forEach(professor => {
    const divProfessor = document.createElement('div');
    divProfessor.className = 'professor';

    const img = document.createElement('img');
    img.src = professor.imagem;
    img.alt = professor.nome;

    const h2 = document.createElement('h2');
    h2.textContent = professor.nome;

    const escolhas = document.createElement('div');
    escolhas.className = 'escolhas';
    escolhas.textContent = `Escolhas: ${professor.escolhas}`;

    const grafico = document.createElement('div');
    grafico.className = 'grafico';

    const botaoEscolher = document.createElement('button');
    botaoEscolher.textContent = 'Escolher';
    botaoEscolher.addEventListener('click', () => {
        if (professor.escolhas < 12) {
            professor.escolhas++;
            escolhas.textContent = `Escolhas: ${professor.escolhas}`;
            atualizarGrafico(grafico, professor.escolhas);
        }
    });

    divProfessor.appendChild(img);
    divProfessor.appendChild(h2);
    divProfessor.appendChild(escolhas);
    divProfessor.appendChild(grafico);
    divProfessor.appendChild(botaoEscolher);

    container.appendChild(divProfessor);
});

function atualizarGrafico(grafico, escolhas) {
    if (escolhas >= 12) {
        grafico.className = 'grafico vermelho';
    } else if (escolhas >= 6) {
        grafico.className = 'grafico amarelo';
    } else {
        grafico.className = 'grafico';
    }
}
