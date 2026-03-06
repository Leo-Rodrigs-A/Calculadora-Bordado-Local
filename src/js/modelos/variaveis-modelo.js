import { variaveisIniciais } from '../dados-iniciais/variaveis-iniciais.js'

const ServicoVariaveis = {
    _chaveLocalStorage: 'variaveis',

    _carregarVar() {
        const jaTemSalvo = localStorage.getItem(this._chaveLocalStorage);
        if (jaTemSalvo) return JSON.parse(jaTemSalvo);
    
        this._salvarVar(variaveisIniciais);
        return variaveisIniciais;
    },

    _salvarVar(obj) {
        localStorage.setItem(this._chaveLocalStorage, JSON.stringify(obj));
    },

    buscarTodos(){
        return this._carregarVar();
    },

    salvarConfiguracoes(novasVariaveis){
        this._salvarVar(novasVariaveis);
    }
}

export default ServicoVariaveis;
