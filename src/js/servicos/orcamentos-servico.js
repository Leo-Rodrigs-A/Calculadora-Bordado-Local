import { orcamentosIniciais } from '../dados-iniciais/orcamentos-iniciais.js';

function normalizarOrcamentoSalvo(orcamentoSalvo) {
  return {
    ...orcamentoSalvo,
    valoresPorQuantidade: (orcamentoSalvo.valoresPorQuantidade ?? orcamentoSalvo.valores ?? []).map(Number),
    valorUnitario: Number(orcamentoSalvo.valorUnitario ?? orcamentoSalvo.orcamento)
  };
}

const ServicoOrcamentos = {
  _chaveLocalStorage: 'orcamentos',

  _carregar() {
    const dadosSalvos = localStorage.getItem(this._chaveLocalStorage);
    if (dadosSalvos) {
      const orcamentosNormalizados = JSON.parse(dadosSalvos).map(normalizarOrcamentoSalvo);
      this._salvar(orcamentosNormalizados);
      return orcamentosNormalizados;
    }

    this._salvar(orcamentosIniciais);
    return orcamentosIniciais;
  },

  _salvar(lista) {
    localStorage.setItem(this._chaveLocalStorage, JSON.stringify(lista));
  },

  buscarTodos() {
    return this._carregar();
  },

  buscarPorId(id) {
    return this._carregar().find(orcamento => orcamento.id === id);
  },

  salvarNovo(orcamento) {
    const lista = this._carregar();
    lista.unshift(orcamento);
    this._salvar(lista);
  },

  excluirPorId(id) {
    const lista = this._carregar().filter(orcamento => orcamento.id !== id);
    this._salvar(lista);
  }
};

export default ServicoOrcamentos;
