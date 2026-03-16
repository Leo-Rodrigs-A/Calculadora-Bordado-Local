import { formatarDataExibicao } from '../utilitarios/formatadores.js';
import { criarExibicaoValores } from './exibicao-valores.js';

export function criarModalVisualizarOrcamento(orcamento, callbacks = {}) {
  const {
    onFechar = () => {},
    onExcluir = () => {},
    onEditar = () => {}
  } = callbacks;

  const container = document.createElement('section');
  container.className = 'modal__visualizacao';

  const cabecalho = document.createElement('div');
  cabecalho.className = 'modal__cabecalho u-tema-escuro-padrao';

  const cabecalhoTitulo = document.createElement('div');
  cabecalhoTitulo.className = 'modal__cabecalho-titulo';

  const titulo = document.createElement('h4');
  titulo.textContent = orcamento.nomeProjeto;

  const subtitulo = document.createElement('p');
  subtitulo.className = 'modal__subtitulo-visualizacao';
  subtitulo.textContent = `${orcamento.totalPontos.toLocaleString('pt-BR')} pontos`;

  const btnFechar = document.createElement('button');
  btnFechar.type = 'button';
  btnFechar.className = 'modal__btn-fechar u-tema-escuro-padrao';
  btnFechar.setAttribute('aria-label', 'Fechar modal');

  const iconeFechar = document.createElement('i');
  iconeFechar.className = 'fa-solid fa-xmark';

  btnFechar.appendChild(iconeFechar);
  btnFechar.addEventListener('click', onFechar);
  cabecalhoTitulo.append(titulo, subtitulo);
  cabecalho.append(cabecalhoTitulo, btnFechar);

  const corpo = document.createElement('div');
  corpo.className = 'modal__corpo modal__corpo--visualizacao';

  const linhaRotulos = document.createElement('div');
  linhaRotulos.className = 'modal__linha-info-visualizacao';

  const rotuloDataCriacao = document.createElement('span');
  rotuloDataCriacao.className = 'modal__rotulo-visualizacao';
  rotuloDataCriacao.textContent = 'Criado em:';

  linhaRotulos.append(rotuloDataCriacao);

  const linhaValores = document.createElement('div');
  linhaValores.className = 'modal__linha-info-visualizacao';

  const dataCriacao = document.createElement('span');
  dataCriacao.className = 'modal__data-visualizacao';
  dataCriacao.textContent = formatarDataExibicao(orcamento.dataCriacao);

  linhaValores.append(dataCriacao);

  const exibicaoValores = criarExibicaoValores(orcamento.valoresPorQuantidade, orcamento.quantidade);

  const rodape = document.createElement('div');
  rodape.className = 'modal__acoes-visualizacao';

  const btnExcluir = document.createElement('button');
  btnExcluir.type = 'button';
  btnExcluir.className = 'modal__btn-acao modal__btn-acao--outline u-tema-claro-padrao';
  btnExcluir.textContent = 'Excluir';
  btnExcluir.addEventListener('click', onExcluir);

  const btnEditar = document.createElement('button');
  btnEditar.type = 'button';
  btnEditar.className = 'modal__btn-acao modal__btn-acao--solid u-tema-destaque';
  btnEditar.textContent = 'Editar';
  btnEditar.addEventListener('click', onEditar);

  rodape.append(btnExcluir, btnEditar);
  corpo.append(linhaRotulos, linhaValores, exibicaoValores, rodape);
  container.append(cabecalho, corpo);

  return container;
}
