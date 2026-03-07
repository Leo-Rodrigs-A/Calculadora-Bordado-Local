export function renderizarListaOrcamentos(listaSliced, container){
  const listaCards = document.createElement('ul');
  listaCards.className = 'lista-cards';

  function formatarDataExibicao(obj){
    const [ano, mes, dia] = obj.split('-');
    return `${dia}/${mes}/${ano}`;
  }

  listaSliced.forEach((bordado) => {
    const cardOrcamento = document.createElement('li');
    cardOrcamento.className = 'card-orcamento u-tema-medio-padrao';
    cardOrcamento.id = bordado.id;
    cardOrcamento.dataset.orcamentoId = bordado.id;

    const cabecalho = document.createElement('section');
    cabecalho.className = 'card-orcamento__cabecalho u-tema-escuro-padrao';

    const corpo = document.createElement('section');
    corpo.className = 'card-orcamento__corpo';

    const titulo = document.createElement('h6');
    titulo.className = 'card-orcamento__titulo';
    titulo.innerText = bordado.nomeProjeto;

    const btnEditar = document.createElement('img');
    btnEditar.src = 'src/img/edit-icon.svg';
    btnEditar.alt = 'Editar';
    btnEditar.className = 'card-orcamento__btn-editar u-tema-claro-padrao';
    btnEditar.draggable = false;

    const linhaData = document.createElement('div');
    linhaData.className = 'card-orcamento__linha-info';

    const rotuloData = document.createElement('span');
    rotuloData.className = 'card-orcamento__rotulo';
    rotuloData.textContent = 'Criado em:';

    const valorData = document.createElement('span');
    valorData.className = 'card-orcamento__valor card-orcamento__valor--destaque';
    valorData.textContent = formatarDataExibicao(bordado.dataCriacao);

    const divisor1 = document.createElement('hr');
    divisor1.className = 'card-orcamento__divisor';

    const linhaPontos = document.createElement('div');
    linhaPontos.className = 'card-orcamento__linha-info';

    const rotuloPontos = document.createElement('span');
    rotuloPontos.className = 'card-orcamento__rotulo';
    rotuloPontos.textContent = 'Quantidade de Pontos:';

    const valorPontos = document.createElement('span');
    valorPontos.className = 'card-orcamento__valor card-orcamento__valor--destaque';
    valorPontos.textContent = bordado.totalPontos.toLocaleString('pt-BR');

    const divisor2 = document.createElement('hr');
    divisor2.className = 'card-orcamento__divisor';

    const linhaValor = document.createElement('div');
    linhaValor.className = 'card-orcamento__linha-info';

    const rotuloValor = document.createElement('span');
    rotuloValor.className = 'card-orcamento__rotulo';
    rotuloValor.textContent = 'Valor Unitário:';
    
    const valorUnitario = document.createElement('span');
    valorUnitario.className = 'card-orcamento__valor--destaque';
    valorUnitario.textContent = Number(bordado.orcamento).toLocaleString('PT-BR', {
      style: 'currency',
      currency: 'BRL'
    })

    cabecalho.appendChild(titulo);
    cabecalho.appendChild(btnEditar);

    linhaData.appendChild(rotuloData);
    linhaData.appendChild(valorData);

    linhaPontos.appendChild(rotuloPontos);
    linhaPontos.appendChild(valorPontos);

    linhaValor.appendChild(rotuloValor);
    linhaValor.appendChild(valorUnitario);

    corpo.appendChild(linhaData);
    corpo.appendChild(divisor1);
    corpo.appendChild(linhaPontos);
    corpo.appendChild(divisor2);
    corpo.appendChild(linhaValor);  

    cardOrcamento.appendChild(cabecalho);
    cardOrcamento.appendChild(corpo);

    listaCards.appendChild(cardOrcamento);  
  });

  container.appendChild(listaCards);

  return container;
}
