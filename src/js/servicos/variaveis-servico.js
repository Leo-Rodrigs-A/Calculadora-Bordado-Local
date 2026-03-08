import { configuracoesIniciais } from '../dados-iniciais/variaveis-iniciais.js'

function normalizarConfiguracoesSalvas(configuracoesSalvas) {
    const configuracoesBase = Array.isArray(configuracoesSalvas)
        ? configuracoesSalvas[0]
        : configuracoesSalvas;

    return {
        custoCriacaoMatriz: Number(configuracoesBase?.custoCriacaoMatriz ?? configuracoesIniciais.custoCriacaoMatriz),
        custoPorMilPontos: Number(configuracoesBase?.custoPorMilPontos ?? configuracoesIniciais.custoPorMilPontos),
        valorMinimoPorPeca: Number(configuracoesBase?.valorMinimoPorPeca ?? configuracoesIniciais.valorMinimoPorPeca),
        valorMinimoAbsoluto: Number(configuracoesBase?.valorMinimoAbsoluto ?? configuracoesIniciais.valorMinimoAbsoluto)
    };
}

const ServicoVariaveis = {
    _chaveLocalStorage: 'variaveis',

    _carregarConfiguracoes() {
        const dadosSalvos = localStorage.getItem(this._chaveLocalStorage);
        if (dadosSalvos) {
            const configuracoesNormalizadas = normalizarConfiguracoesSalvas(JSON.parse(dadosSalvos));
            this._salvarConfiguracoes(configuracoesNormalizadas);
            return configuracoesNormalizadas;
        }
    
        this._salvarConfiguracoes(configuracoesIniciais);
        return configuracoesIniciais;
    },

    _salvarConfiguracoes(configuracoes) {
        localStorage.setItem(this._chaveLocalStorage, JSON.stringify(configuracoes));
    },

    buscarConfiguracoes(){
        return this._carregarConfiguracoes();
    },

    salvarConfiguracoes(novasConfiguracoes){
        this._salvarConfiguracoes(novasConfiguracoes);
    }
}

export default ServicoVariaveis;
