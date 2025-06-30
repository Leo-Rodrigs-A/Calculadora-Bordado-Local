export function construirVariaveis(variaveis, varBox) {

    const fieldVar = [
        {id: 'valorMatriz', classe: 'bg-bege-claro-padrao', texto: 'Criação da matriz'},
        {id: 'valorPorMilPontos', classe: 'bg-bege-claro-padrao', texto: 'Valor por mil pontos'},
        {id: 'precoUnidade', classe: 'bg-bege-claro-padrao', texto: 'Valor mínimo (1 und)'},
        {id: 'menorPrecoGlobal', classe: 'bg-bege-claro-padrao', texto: 'Valor min Geral'}
    ]

    fieldVar.forEach((box) => {
        const divBox = document.createElement('div');
        divBox.id = box.id;
        divBox.className = box.classe;

        const titulo = document.createElement('h5');
        titulo.className = 'bg-bege-claro-alt';
        titulo.textContent = box.texto;

        const valorCampo = document.createElement('h6');
        valorCampo.textContent = variaveis[0][box.id].toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

        divBox.appendChild(titulo);
        divBox.appendChild(valorCampo);
        varBox.appendChild(divBox);
    })
    
    return varBox;
}