import { formatarMoeda } from '../utilitarios/formatadores.js';
import { quantidadesPadrao } from '../dados-iniciais/quantidades-padrao.js';

export function criarExibicaoValores(valoresPorQuantidade) {
  const labelsQuantidade = quantidadesPadrao;
  const fragment = document.createDocumentFragment();

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
    const classeTema = index === 0 ? 'u-tema-destaque' : 'u-tema-claro-padrao';
    cardValor.className = `modal__card-valor ${classeTema}`;

    const preco = document.createElement('strong');
    preco.className = 'modal__card-preco';
    preco.textContent = formatarMoeda(valorQuantidade);

    cardValor.appendChild(preco);
    itemValor.append(quantidade, cardValor);
    grade.appendChild(itemValor);
  });

  fragment.append(tituloGrade, grade);
  return fragment;
}
