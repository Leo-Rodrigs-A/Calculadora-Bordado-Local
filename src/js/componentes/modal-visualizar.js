import { formatarDataExibicao, formatarMoeda } from '../utilitarios/formatadores.js';

function criarTagDetalhe(rotulo, valor) {
  const item = document.createElement('div');
  item.className = 'modal__tag-detalhe u-tema-claro-padrao';

  const texto = document.createElement('span');
  texto.textContent = `${rotulo}: ${valor}`;

  item.appendChild(texto);
  return item;
}

export function criarModalVisualizarOrcamento(orcamento, callbacks = {}) {
  const {
    onFechar = () => {},
    onExcluir = () => {},
    onEditar = () => {}
  } = callbacks;

  const labelsQuantidade = [
    '1 und',
    '+2 und',
    '+3 und',
    '+4 und',
    '+5 und',
    '+6 und',
    '+7 und',
    '+8 und'
  ];

  const container = document.createElement('section');
  container.className = 'modal__visualizacao';

  const cabecalho = document.createElement('div');
  cabecalho.className = 'modal__cabecalho u-tema-escuro-padrao';

  const titulo = document.createElement('h4');
  titulo.textContent = orcamento.nomeProjeto;

  const btnFechar = document.createElement('button');
  btnFechar.type = 'button';
  btnFechar.className = 'modal__btn-fechar u-tema-escuro-padrao';
  btnFechar.setAttribute('aria-label', 'Fechar modal');

  const iconeFechar = document.createElement('i');
  iconeFechar.className = 'fa-solid fa-xmark';

  btnFechar.appendChild(iconeFechar);
  btnFechar.addEventListener('click', onFechar);
  cabecalho.append(titulo, btnFechar);

  const corpo = document.createElement('div');
  corpo.className = 'modal__corpo modal__corpo--visualizacao';

  const resumo = document.createElement('section');
  resumo.className = 'modal__resumo-visualizacao';

  const subtitulo = document.createElement('p');
  subtitulo.className = 'modal__subtitulo-visualizacao';
  subtitulo.textContent = `${orcamento.totalPontos.toLocaleString('pt-BR')} pontos`;

  const tags = document.createElement('div');
  tags.className = 'modal__tags-detalhes';

  const detalhes = [
    { rotulo: 'Criar matriz', valor: orcamento.precisaCriarMatriz ? 'Sim' : 'Não' },
    { rotulo: 'Material do cliente', valor: orcamento.usaMaterialCliente ? 'Sim' : 'Não' },
    { rotulo: 'Urgente', valor: orcamento.ehUrgente ? 'Sim' : 'Não' }
  ];

  detalhes.forEach((detalhe) => {
    tags.appendChild(criarTagDetalhe(detalhe.rotulo, detalhe.valor));
  });

  resumo.append(subtitulo, tags);

  const destaque = document.createElement('section');
  destaque.className = 'modal__destaque-valor';

  const linhaInfo = document.createElement('div');
  linhaInfo.className = 'modal__linha-info-visualizacao';

  const rotuloValor = document.createElement('span');
  rotuloValor.className = 'modal__rotulo-visualizacao';
  rotuloValor.textContent = 'Valor a cobrar';

  const dataCriacao = document.createElement('span');
  dataCriacao.className = 'modal__data-visualizacao';
  dataCriacao.textContent = formatarDataExibicao(orcamento.dataCriacao);

  linhaInfo.append(rotuloValor, dataCriacao);

  const valorDestaque = document.createElement('strong');
  valorDestaque.className = 'modal__valor-cobrar';
  valorDestaque.textContent = formatarMoeda(orcamento.valorUnitario);

  const divisor = document.createElement('hr');
  divisor.className = 'u-divisor-padrao';

  destaque.append(linhaInfo, valorDestaque, divisor);

  const tituloGrade = document.createElement('h5');
  tituloGrade.className = 'modal__titulo-grade';
  tituloGrade.textContent = 'Valores base';

  const grade = document.createElement('div');
  grade.className = 'modal__grade-valores';

  orcamento.valoresPorQuantidade.forEach((valorQuantidade, index) => {
    const cardValor = document.createElement('article');
    const classeTema = index === 0 ? 'u-tema-destaque' : 'u-tema-claro-padrao';
    cardValor.className = `modal__card-valor ${classeTema}`;

    const quantidade = document.createElement('span');
    quantidade.className = 'modal__card-quantidade';
    quantidade.textContent = labelsQuantidade[index] || `+${index + 1} und`;

    const preco = document.createElement('strong');
    preco.className = 'modal__card-preco';
    preco.textContent = formatarMoeda(valorQuantidade);

    cardValor.append(quantidade, preco);
    grade.appendChild(cardValor);
  });

  const rodape = document.createElement('div');
  rodape.className = 'modal__acoes-visualizacao';

  const btnExcluir = document.createElement('button');
  btnExcluir.type = 'button';
  btnExcluir.className = 'modal__btn-acao modal__btn-acao--outline';
  btnExcluir.textContent = 'Excluir';
  btnExcluir.addEventListener('click', onExcluir);

  const btnEditar = document.createElement('button');
  btnEditar.type = 'button';
  btnEditar.className = 'modal__btn-acao modal__btn-acao--solid u-tema-destaque';
  btnEditar.textContent = 'Editar';
  btnEditar.addEventListener('click', onEditar);

  rodape.append(btnExcluir, btnEditar);
  corpo.append(resumo, destaque, tituloGrade, grade, rodape);
  container.append(cabecalho, corpo);

  return container;
}
