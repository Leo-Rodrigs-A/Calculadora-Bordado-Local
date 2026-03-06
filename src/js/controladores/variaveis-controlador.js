import { renderizarPainelMetricas } from '../componentes/variaveis-painel.js'
import ServicoVariaveis from '../modelos/variaveis-modelo.js'

export function atualizarInterfaceVariaveis(caixaVariaveis) {
    const variaveisObj = ServicoVariaveis.buscarTodos();
    caixaVariaveis.innerHTML = '';
    renderizarPainelMetricas(variaveisObj, caixaVariaveis);
}
