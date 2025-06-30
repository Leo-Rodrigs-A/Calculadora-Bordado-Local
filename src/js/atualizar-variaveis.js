import { construirVariaveis } from './dom-builder/construir-variaveis.js'
import variaveisService from './acessar-local-storage/variaveis-service.js'

export function atualizarVariaveis(varBox) {

    const variaveisObj = variaveisService.buscarVariaveis();

    varBox.innerHTML = '';
    construirVariaveis(variaveisObj, varBox);

}