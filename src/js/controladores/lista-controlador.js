import { renderizarListaOrcamentos } from "../componentes/lista-componente.js";
import ServicoOrcamentos from "../modelos/orcamento-modelo.js";

function normalizarTextoBusca(texto) {
  return texto
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export function atualizarInterfaceLista ({pesquisa = '', limiteLista = 12, container}) {
    const termoBusca = normalizarTextoBusca(pesquisa);
    const regex = new RegExp(`\\b${termoBusca}`, 'i');

    const listaLocal = ServicoOrcamentos.buscarTodos();

    const listaFiltrada = listaLocal.filter(bordado => 
        regex.test(normalizarTextoBusca(bordado.nomeProjeto))
    );

    const listaOrdenada = listaFiltrada.sort((a, b) => 
        new Date(b.dataCriacao) - new Date(a.dataCriacao)
    );

    const listaPaginada = listaOrdenada.slice(0, limiteLista);

    container.innerHTML = '';

    if (listaFiltrada.length === 0) {
      const msgVazia = document.createElement('h6');
      msgVazia.className = 'lista-cards__mensagem-vazia';
      msgVazia.textContent = 'Nenhum Resultado Encontrado';
      container.appendChild(msgVazia);
      return;
    }

    const btnCarregarMais = document.querySelector('.lista-cards__btn-carregar-mais');
    if(btnCarregarMais && listaOrdenada.length > listaPaginada.length){
      btnCarregarMais.style.display = 'block';
    } else if (btnCarregarMais) {
      btnCarregarMais.style.display = 'none';
    }

    renderizarListaOrcamentos(listaPaginada, container);
}
