export function construirComponente(listaOrcamentos, montarLista){

listaOrcamentos.forEach(bordado => {
  const novoItem = document.createElement('li');
  novoItem.classList.add('bordado');

  const titulo = document.createElement('h3');
  const data = document.createElement('span');
  data.classList.add('dataCriacao');
  const pontos = document.createElement('span');
  pontos.classList.add('qtdPontos');
  const valorPraUm = document.createElement('div');
  valorPraUm.classList.add('valorPraUm');

  const spanLabel = document.createElement('span');
  const spanValor = document.createElement('span');

  titulo.innerText = bordado.nomeMatriz;
  data.innerText = bordado.dataCriacao;
  pontos.textContent = `quantidade de pontos: ${bordado.qtdPontos}`;

  spanLabel.textContent = 'Valor para uma Unidade: ';
  spanValor.textContent = Number(bordado.valores[0]).toLocaleString('PT-BR', {
    style: 'currency',
    currency: 'BRL'
  })
  
  valorPraUm.appendChild(spanLabel);
  valorPraUm.appendChild(spanValor);

  novoItem.appendChild(titulo);
  novoItem.appendChild(data);
  novoItem.appendChild(pontos);
  novoItem.appendChild(valorPraUm);

  montarLista.appendChild(novoItem);  
});

const loadMore = document.createElement('p')
loadMore.classList.add('carregarMais')
loadMore.textContent = 'carregar mais...'
montarLista.appendChild(loadMore);

return montarLista;
}