const OrcamentoService = {
  _storageKey: 'orcamentos',

  _carregar() {
    const jaTemSalvo = localStorage.getItem(this._storageKey);
    if (jaTemSalvo) return JSON.parse(jaTemSalvo);

    // Inicializa com a base se não existir
    this._salvar(listaBase);
    return listaBase;
  },


  
  _salvar(lista) {
    localStorage.setItem(this._storageKey, JSON.stringify(lista));
  },



  buscarOrcamentos() {
    return this._carregar();
  },



  // essa função recebe o objeto montado e joga no local storage
  adicionar(orcamento) {
    const lista = this._carregar();
    lista.unshift(orcamento);
    this._salvar(lista);
  },



  // essa função recebe o id do bordado a ser excluido, cria um novo array sem ele, e salva no local storage;
  excluir(id) {
    const lista = this._carregar().filter(item => item.id !== id);
    this._salvar(lista);
  }


};

export default OrcamentoService;
