export function criarModalEditarVariaveis(configuracoesAtuais){
    const formulario = document.createElement('form');
    formulario.method = 'dialog';
    formulario.className = 'modal__formulario modal__formulario--variaveis';

    const cabecalho = document.createElement('div');
    cabecalho.className = 'modal__cabecalho u-tema-escuro-padrao';

    const titulo = document.createElement('h4');
    titulo.textContent = 'Editar Variáveis';

    const btnFechar = document.createElement('button');
    btnFechar.className = 'modal__btn-fechar u-tema-escuro-padrao';
    btnFechar.setAttribute('data-modal', 'dialog-global');

    const iconeFechar = document.createElement('i');
    iconeFechar.className = 'fa-solid fa-xmark';

    btnFechar.append(iconeFechar);
    cabecalho.append(titulo, btnFechar);

    const corpo = document.createElement('div');
    corpo.className ='modal__corpo modal__corpo--variaveis';

    const camposConfiguracao = [
        {titulo: 'Valor da Matriz', id: 'input-preco-matriz', placeholder: 'Ex: 30', chave: 'custoCriacaoMatriz' },
        {titulo: 'Valor por Mil Pontos', id: 'input-preco-milheiro', placeholder: 'Ex: 1.4', chave: 'custoPorMilPontos' },
        {titulo: 'Preço Unidade Valor mínimo (1 und)', id: 'input-minimo-unidade', placeholder: 'Ex: 15', chave: 'valorMinimoPorPeca' },
        {titulo: 'Valor min Geral', id: 'input-minimo-global', placeholder: 'Ex: 8', chave: 'valorMinimoAbsoluto' }
    ]

    camposConfiguracao.forEach((campo) =>{
        const itemBox = document.createElement('div');
        itemBox.className = 'modal__campo-configuracao modal__campo-configuracao--variaveis u-tema-claro-padrao';

        const rotulo = document.createElement('h6');
        rotulo.textContent = campo.titulo;

        const input = document.createElement('input');
        input.type = 'text';
        input.id = campo.id;
        input.placeholder = campo.placeholder;
        input.value = configuracoesAtuais[campo.chave];

        itemBox.append(rotulo, input);
        corpo.append(itemBox);
    });

    const btnAtualizar = document.createElement('button');
    btnAtualizar.id = 'btn-acao-atualizar-vars';
    btnAtualizar.className = 'modal__btn-atualizar';
    btnAtualizar.type = 'submit';
    btnAtualizar.textContent = 'Atualizar Variáveis';    

    corpo.append(btnAtualizar);
    formulario.append(cabecalho, corpo);
 
    return formulario;
}

function obterValorNumerico(form, id, valorPadrao) {
  const input = form.querySelector(`#${id}`);
  if (!input.value.trim()) return valorPadrao;
  return parseFloat(input.value.replace(',', '.'));
}

export function lerDadosFormularioVariaveis(form, configuracoesAtuais) {
  return {
    custoCriacaoMatriz: obterValorNumerico(form, 'input-preco-matriz', configuracoesAtuais.custoCriacaoMatriz),
    custoPorMilPontos: obterValorNumerico(form, 'input-preco-milheiro', configuracoesAtuais.custoPorMilPontos),
    valorMinimoPorPeca: obterValorNumerico(form, 'input-minimo-unidade', configuracoesAtuais.valorMinimoPorPeca),
    valorMinimoAbsoluto: obterValorNumerico(form, 'input-minimo-global', configuracoesAtuais.valorMinimoAbsoluto)
  };
};
