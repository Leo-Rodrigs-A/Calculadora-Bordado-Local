import { orcamentosIniciais } from '../dados-iniciais/orcamentos-iniciais.js';

function normalizarOrcamentoSalvo(orcamentoSalvo) {
  return {
    ...orcamentoSalvo,
    quantidade: Number(orcamentoSalvo.quantidade ?? 1),
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

    const orcamentosNormalizados = orcamentosIniciais.map(normalizarOrcamentoSalvo);
    this._salvar(orcamentosNormalizados);
    return orcamentosNormalizados;
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

  atualizarPorId(id, dadosAtualizados) {
    const lista = this._carregar();
    const indice = lista.findIndex(orcamento => orcamento.id === id);
    if (indice === -1) {
      return;
    }

    lista[indice] = {
      ...lista[indice],
      ...dadosAtualizados,
      id: lista[indice].id,
      dataCriacao: lista[indice].dataCriacao
    };

    this._salvar(lista);
  },

  excluirPorId(id) {
    const lista = this._carregar().filter(orcamento => orcamento.id !== id);
    this._salvar(lista);
  }
};

export default ServicoOrcamentos;
