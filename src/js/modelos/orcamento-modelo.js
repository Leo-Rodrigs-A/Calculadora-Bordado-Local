import { orcamentosIniciais } from '../dados-iniciais/orcamentos-iniciais.js';

const ServicoOrcamentos = {
  _chaveLocalStorage: 'orcamentos',

  _carregar() {
    const jaTemSalvo = localStorage.getItem(this._chaveLocalStorage);
    if (jaTemSalvo) return JSON.parse(jaTemSalvo);

    this._salvar(orcamentosIniciais);
    return orcamentosIniciais;
  },

  _salvar(lista) {
    localStorage.setItem(this._chaveLocalStorage, JSON.stringify(lista));
  },

  buscarTodos() {
    return this._carregar();
  },

  salvarNovo(orcamento) {
    const lista = this._carregar();
    lista.unshift(orcamento);
    this._salvar(lista);
  },

  excluir(id) {
    const lista = this._carregar().filter(item => item.id !== id);
    this._salvar(lista);
  }
};

export default ServicoOrcamentos;
