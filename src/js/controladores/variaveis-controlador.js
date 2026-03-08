import { renderizarPainelVariaveis } from '../componentes/variaveis-painel.js'
import ServicoVariaveis from '../servicos/variaveis-servico.js'

export function atualizarInterfaceVariaveis(containerVariaveis) {
    const configuracoes = ServicoVariaveis.buscarConfiguracoes();
    containerVariaveis.innerHTML = '';
    renderizarPainelVariaveis(configuracoes, containerVariaveis);
}
