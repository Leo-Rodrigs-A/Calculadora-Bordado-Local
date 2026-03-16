import { formatarDataExibicao, formatarMoeda } from '../utilitarios/formatadores.js';
import { quantidadesPadrao } from '../dados-iniciais/quantidades-padrao.js';

function obterIndiceDestaque(quantidadeSelecionada) {
  const quantidadeNormalizada = Number(quantidadeSelecionada);
  if (!Number.isFinite(quantidadeNormalizada) || quantidadeNormalizada <= 0) {
    return 0;
  }

  let indiceDestaque = 0;
  quantidadesPadrao.forEach((quantidade, index) => {
    if (quantidadeNormalizada >= quantidade) {
      indiceDestaque = index;
    }
  });

  return indiceDestaque;
}

export function criarExibicaoValores(valoresPorQuantidade, quantidadeSelecionada, dataCriacao = null) {
  const labelsQuantidade = quantidadesPadrao;
  const fragment = document.createDocumentFragment();
  const indiceDestaque = obterIndiceDestaque(quantidadeSelecionada);
  const valorDestaque = valoresPorQuantidade[indiceDestaque] ?? valoresPorQuantidade[0] ?? 0;

  const destaque = document.createElement('section');
  destaque.className = 'modal__destaque-valor';

  const linhaRotulo = document.createElement('div');
  linhaRotulo.className = 'modal__linha-info-visualizacao';

  const rotuloValor = document.createElement('span');
  rotuloValor.className = 'modal__rotulo-visualizacao';
  rotuloValor.textContent = 'Valor a cobrar pelo bordado';

  linhaRotulo.append(rotuloValor);

  if (dataCriacao) {
    const containerData = document.createElement('div');
    containerData.className = 'modal__bloco-data';

    const rotuloData = document.createElement('span');
    rotuloData.className = 'modal__rotulo-data';
    rotuloData.textContent = 'Criado em:';

    const dataExibicao = document.createElement('span');
    dataExibicao.className = 'modal__data-visualizacao';
    dataExibicao.textContent = formatarDataExibicao(dataCriacao);

    containerData.append(rotuloData, dataExibicao);
    linhaRotulo.append(containerData);
  }

  const linhaValor = document.createElement('div');
  linhaValor.className = 'modal__linha-info-visualizacao';

  const valorPrincipal = document.createElement('strong');
  valorPrincipal.className = 'modal__valor-cobrar';
  valorPrincipal.textContent = formatarMoeda(valorDestaque);

  linhaValor.append(valorPrincipal);

  const divisor = document.createElement('hr');
  divisor.className = 'u-divisor-padrao';

  destaque.append(linhaRotulo, linhaValor, divisor);

  const tituloGrade = document.createElement('h5');
  tituloGrade.className = 'modal__titulo-grade';
  tituloGrade.textContent = 'Valores base';

  const grade = document.createElement('div');
  grade.className = 'modal__grade-valores';

  valoresPorQuantidade.forEach((valorQuantidade, index) => {
    const itemValor = document.createElement('div');
    itemValor.className = 'modal__item-valor';

    const quantidade = document.createElement('span');
    quantidade.className = 'modal__card-quantidade';
    if (index === 0) {
      quantidade.textContent = '1 und';
    } else {
      quantidade.textContent = labelsQuantidade[index] + '+ unds' || `+${index + 1} und`;
    }

    const cardValor = document.createElement('article');
    const classeTema = index === indiceDestaque ? 'u-tema-destaque' : 'u-tema-claro-padrao';
    cardValor.className = `modal__card-valor ${classeTema}`;

    const preco = document.createElement('strong');
    preco.className = 'modal__card-preco';
    preco.textContent = formatarMoeda(valorQuantidade);

    cardValor.appendChild(preco);
    itemValor.append(quantidade, cardValor);
    grade.appendChild(itemValor);
  });

  fragment.append(destaque, tituloGrade, grade);
  return fragment;
}
