export function modalVariaveis(){

    const form = document.createElement('form');
    form.method = 'dialog';


    // HEADER
    const headerModal = document.createElement('div');
    headerModal.className = 'headerModal bg-bege-escuro-padrao';

    const titulo = document.createElement('h4');
    titulo.textContent = 'Editar Variáveis';

    const closeModal = document.createElement('button');
    closeModal.className = 'fechar-modal bg-bege-escuro-padrao';
    closeModal.setAttribute('data-modal', 'modalMestre');

    const iconFechar = document.createElement('i');
    iconFechar.className = 'fa-solid fa-xmark';

    closeModal.append(iconFechar);
    headerModal.append(titulo, closeModal);



    // BODY
    const bodyModal = document.createElement('div');
    bodyModal.className ='bodyModal';



    // objeto pra criar os campos do modal

    const camposValores = [
        {camposTitle: 'Valor da Matriz', camposId: 'valorMatriz', camposPlaceHolder: 'Ex: 30',  },
        {camposTitle: 'Valor por Mil Pontos', camposId: 'valorPorMilPontos', camposPlaceHolder: 'Ex: 1.4',  },
        {camposTitle: 'Preço UnidadeValor mínimo (1 und)', camposId: 'precoUnidade', camposPlaceHolder: 'Ex: 15',  },
        {camposTitle: 'Valor min Geral', camposId: 'menorPrecoGlobal', camposPlaceHolder: 'Ex: 8',  }

    ]


    // forEACH loop que cria os 4 campos
    camposValores.forEach((campo) =>{

    const valorItemBox = document.createElement('div');
    valorItemBox.className = 'campoVariaveis bg-bege-claro-padrao';

    const valorItem = document.createElement('h6');
    valorItem.textContent = campo.camposTitle;

    const valorItemInput = document.createElement('input');
    valorItemInput.type = 'text';
    valorItemInput.id = campo.camposId;
    valorItemInput.placeholder = campo.camposPlaceHolder;
    valorItemInput.required = true;

    valorItemBox.append(valorItem, valorItemInput);
    bodyModal.append(valorItemBox);

    });


    // BOTÃO SALVAR
    const botaoSalvar = document.createElement('button');
    botaoSalvar.id = 'AtualizarVariaveis';
    botaoSalvar.type = 'submit';
    botaoSalvar.textContent = 'Atualizar Variáveis';    

    bodyModal.append(botaoSalvar);


    form.append(headerModal, bodyModal);
 
    return form;
}

function pegarValor(form, id) {
  return parseFloat(form.querySelector(`#${id}`).value.replace(',', '.'));
}

export function capturarDadosVariaveis(form) {
  return [
    {
    valorMatriz: pegarValor(form, 'valorMatriz'),
    valorPorMilPontos: pegarValor(form, 'valorPorMilPontos'),
    precoUnidade: pegarValor(form, 'precoUnidade'),
    menorPrecoGlobal: pegarValor(form, 'menorPrecoGlobal')
    }
  ];
};