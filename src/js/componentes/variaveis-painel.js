export function renderizarPainelMetricas(variaveis, caixaVariaveis) {
    const camposConfig = [
        {id: 'custoCriacaoMatriz', classe: 'u-tema-claro-padrao', texto: 'Criação da matriz'},
        {id: 'custoPorMilPontos', classe: 'u-tema-claro-padrao', texto: 'Valor por mil pontos'},
        {id: 'valorMinimoPorPeca', classe: 'u-tema-claro-padrao', texto: 'Valor mínimo (1 und)'},
        {id: 'valorMinimoAbsoluto', classe: 'u-tema-claro-padrao', texto: 'Valor min Geral'}
    ]

    camposConfig.forEach((config) => {
        const cardMetrica = document.createElement('div');
        cardMetrica.id = config.id;
        cardMetrica.className = `painel-metricas__card ${config.classe}`;

        const titulo = document.createElement('h5');
        titulo.className = 'painel-metricas__titulo u-tema-claro-alt';
        titulo.textContent = config.texto;

        const valorExibicao = document.createElement('h6');
        valorExibicao.textContent = variaveis[0][config.id].toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

        cardMetrica.appendChild(titulo);
        cardMetrica.appendChild(valorExibicao);
        caixaVariaveis.appendChild(cardMetrica);
    })
    
    return caixaVariaveis;
}
