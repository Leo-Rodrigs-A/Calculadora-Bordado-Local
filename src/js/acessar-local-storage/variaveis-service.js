import { variaveisBase } from '../objetos/variaveis-base.js'

const variaveisService = {
    _chaveLocal: 'variaveis',

    _carregarVar() {
        // busca no local storage o registro das variaveis, e utiliza da base caso não tenha
        const jaTemSalvo = localStorage.getItem(this._chaveLocal);
        if (jaTemSalvo) return JSON.parse(jaTemSalvo);
    
        // Inicializa com a base se não existir, e salva no localStorage para uso no futuro
        this._salvarVar(variaveisBase);
        return variaveisBase;
    },

    _salvarVar(obj) {
        localStorage.setItem(this._chaveLocal, JSON.stringify(obj));
    },

    buscarVariaveis(){
        return this._carregarVar();
    },

    salvarVariaveis(novasVariaveis){
        this._salvarVar(novasVariaveis);
    }

}

export default variaveisService;