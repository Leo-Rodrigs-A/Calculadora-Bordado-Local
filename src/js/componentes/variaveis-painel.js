import { formatarMoeda } from '../utilitarios/formatadores.js';

export function renderizarPainelVariaveis(configuracoes, containerVariaveis) {
    const camposConfig = [
        {id: 'custoCriacaoMatriz', classe: 'u-tema-claro-padrao', texto: 'Criação da matriz'},
        {id: 'custoPorMilPontos', classe: 'u-tema-claro-padrao', texto: 'Valor por mil pontos'},
        {id: 'valorMinimoPorPeca', classe: 'u-tema-claro-padrao', texto: 'Valor mínimo (1 und)'},
        {id: 'valorMinimoAbsoluto', classe: 'u-tema-claro-padrao', texto: 'Valor min Geral'}
    ]

    camposConfig.forEach((config) => {
        const cardVariavel = document.createElement('div');
        cardVariavel.id = config.id;
        cardVariavel.className = `painel-variaveis__card ${config.classe}`;

        const titulo = document.createElement('h5');
        titulo.className = 'painel-variaveis__titulo u-tema-claro-alt';
        titulo.textContent = config.texto;

        const valorExibicao = document.createElement('h6');
        valorExibicao.textContent = formatarMoeda(configuracoes[config.id]);

        cardVariavel.appendChild(titulo);
        cardVariavel.appendChild(valorExibicao);
        containerVariaveis.appendChild(cardVariavel);
    })
    
    return containerVariaveis;
}
