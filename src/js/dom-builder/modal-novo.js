export function modalNovo(){

    const form = document.createElement('form');
    form.method = 'dialog';



    // HEADER
    const headerModal = document.createElement('div');
    headerModal.className = 'headerModal bg-bege-escuro-padrao';

    const titulo = document.createElement('h4');
    titulo.textContent = 'Novo Orçamento';

    const closeModal = document.createElement('button');
    closeModal.className = 'fechar-modal bg-bege-escuro-padrao';
    closeModal.setAttribute('data-modal', 'modalMestre');

    const iconFechar = document.createElement('i');
    iconFechar.className = 'fa-solid fa-xmark';

    closeModal.appendChild(iconFechar);
    headerModal.append(titulo, closeModal);




    // BODY
    const bodyModal = document.createElement('div');
    bodyModal.className ='bodyModal';


    // NOME MATRIZ
    const nomeMatrizBox = document.createElement('div');
    nomeMatrizBox.className = 'nomeMatriz bg-bege-claro-padrao';

    const nomeMatriz = document.createElement('h6');
    nomeMatriz.textContent = 'Nome da Matriz';

    const nomeMatrizInput = document.createElement('input');
    nomeMatrizInput.type = 'text';
    nomeMatrizInput.id = 'nomeMatriz';
    nomeMatrizInput.placeholder = 'Digite um nome';
    nomeMatrizInput.required = true;


    nomeMatrizBox.append(nomeMatriz, nomeMatrizInput);



    // QUANTIDADES
    const quantidadesBox = document.createElement('div');
    quantidadesBox.className = 'quantidades';


    //box qtd pontos
    const qtdPontosBox = document.createElement('div');
    qtdPontosBox.className = 'qtdPontos';

    const qtdPontos = document.createElement('h6');
    qtdPontos.textContent = 'Qtd. pontos';

    const qtdPontosInput = document.createElement('input');
    qtdPontosInput.type = 'number';
    qtdPontosInput.id = 'qtdPontos';
    qtdPontosInput.placeholder = 'Ex: 1468';
    qtdPontosInput.required = true;

    qtdPontosBox.append(qtdPontos, qtdPontosInput);


    // box qtd bordados
    const qtdBordadosBox = document.createElement('div');
    qtdBordadosBox.className = 'qtdBordados';

    const qtdBordados = document.createElement('h6');
    qtdBordados.textContent = 'Qtd. Bordados';

    const qtdBordadosInput = document.createElement('input');
    qtdBordadosInput.type = 'number';
    qtdBordadosInput.id = 'qtdBordados';
    qtdBordadosInput.placeholder = 'Ex: 4';
    qtdBordadosInput.required = true;

    qtdBordadosBox.append(qtdBordados, qtdBordadosInput);


    quantidadesBox.append(qtdPontosBox, qtdBordadosBox);



    //VARIABLE GROUP





    bodyModal.append(nomeMatrizBox, quantidadesBox)

    form.append(headerModal, bodyModal);

    return form;
    
}