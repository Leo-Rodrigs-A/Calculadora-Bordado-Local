import { renderizarListaOrcamentos } from "../componentes/lista-componente.js";
import ServicoOrcamentos from "../servicos/orcamentos-servico.js";

function normalizarTextoBusca(texto) {
  return texto
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export function atualizarInterfaceLista ({pesquisa = '', limiteLista = 12, container}) {
    const termoBusca = normalizarTextoBusca(pesquisa);
    const regexBusca = new RegExp(`\\b${termoBusca}`, 'i');

    const orcamentos = ServicoOrcamentos.buscarTodos();

    const listaFiltrada = orcamentos.filter(orcamento => 
        regexBusca.test(normalizarTextoBusca(orcamento.nomeProjeto))
    );

    const listaOrdenada = listaFiltrada.sort((a, b) => 
        new Date(b.dataCriacao) - new Date(a.dataCriacao)
    );

    const listaPaginada = listaOrdenada.slice(0, limiteLista);

    container.innerHTML = '';

    if (listaFiltrada.length === 0) {
      const mensagemSemResultados = document.createElement('h6');
      mensagemSemResultados.className = 'lista-cards__mensagem-vazia';
      mensagemSemResultados.textContent = 'Nenhum Resultado Encontrado';
      container.appendChild(mensagemSemResultados);
      return;
    }

    const btnCarregarMais = document.querySelector('.secao-lista__btn-carregar-mais');
    if(btnCarregarMais && listaOrdenada.length > listaPaginada.length){
      btnCarregarMais.style.display = 'block';
    } else if (btnCarregarMais) {
      btnCarregarMais.style.display = 'none';
    }

    renderizarListaOrcamentos(listaPaginada, container);
}
