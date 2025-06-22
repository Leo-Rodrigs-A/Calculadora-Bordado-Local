export function construirComponente(listaOrcamentos, montarLista){

listaOrcamentos.forEach((bordado, index) => {



  const novoBordado = document.createElement('li');
  novoBordado.className = 'novoBordado';
  novoBordado.id = bordado.id

  const headBordado = document.createElement('section')
  headBordado.className = 'headBordado';

  const bodyBordado = document.createElement('section')
  bodyBordado.className = 'bodyBordado';

  // até esse ponto, eu criei os campos principais da estrutura


  // os dois elementos que vão na head
  const nomeBordado = document.createElement('h6');
  nomeBordado.className = 'nomeBordado';
  nomeBordado.innerText = bordado.nomeMatriz;

  const editIcon = document.createElement('div');
  editIcon.className = 'editIcon';

  
  // caixa da data
  const boxData = document.createElement('div');
  boxData.className = 'boxData';

  const spanData = document.createElement('span');
  spanData.className = 'spanData';
  spanData.textContent = 'Criado em:';

  const dataCriacao = document.createElement('span');
  dataCriacao.className = 'dataCriacao';
  dataCriacao.textContent = bordado.dataCriacao;

  
  // linha divisora n1
  const divLine1 = document.createElement('div');
  divLine1.className = 'divLine';
  divLine1.id = 'divLine1';

  
  // box dos pontos
  const boxPontos = document.createElement('div');
  boxPontos.className = 'boxPontos';

  const spanPontos = document.createElement('span');
  spanPontos.className = 'spanPontos';
  spanPontos.textContent = 'Quantidade de Pontos:';

  const qtdPontos = document.createElement('span');
  qtdPontos.className = 'qtdPontos';
  qtdPontos.textContent = bordado.qtdPontos;


  
  // linha divisora n2
  const divLine2 = document.createElement('div');
  divLine2.className = 'divLine';
  divLine2.id = 'divLine2';


  //  box do valor para uma unidade
  const boxValorUnd = document.createElement('div');
  boxValorUnd.className = 'boxValorUnd';

  const spanValor = document.createElement('span');
  spanValor.className = 'spanValor';
  spanValor.textContent = 'Valor para uma Unidade: ';
  
  const valorPraUm = document.createElement('span');
  valorPraUm.className = 'valorPraUm';
  valorPraUm.textContent = Number(bordado.valores[0]).toLocaleString('PT-BR', {
    style: 'currency',
    currency: 'BRL'
  })


  headBordado.appendChild(nomeBordado);
  headBordado.appendChild(editIcon);

  boxData.appendChild(spanData);
  boxData.appendChild(dataCriacao);

  boxPontos.appendChild(spanPontos);
  boxPontos.appendChild(qtdPontos);

  boxValorUnd.appendChild(spanValor);
  boxValorUnd.appendChild(valorPraUm);

  bodyBordado.appendChild(boxData);
  bodyBordado.appendChild(divLine1);
  bodyBordado.appendChild(boxPontos);
  bodyBordado.appendChild(divLine2);
  bodyBordado.appendChild(boxValorUnd);  

  novoBordado.appendChild(headBordado);
  novoBordado.appendChild(bodyBordado);

  montarLista.appendChild(novoBordado);  
});

const loadMore = document.createElement('p')
loadMore.className = 'carregarMais'
loadMore.textContent = 'carregar mais...'
montarLista.appendChild(loadMore);

return montarLista;
}