import {construirLista} from "./dom-builder/construir-lista.js";
import OrcamentoService from "./acessar-local-storage/orcamento-service.js";

function formatString(texto) {
  return texto
    .trim()
    .normalize("NFD")                   // separa acentos
    .replace(/[\u0300-\u036f]/g, "")   // remove acentos
    .toLowerCase();
}


export function atualizarLista ({pesquisa = '', limiteLista = 12, container}) {

    const txtPesquisa = formatString(pesquisa);
    const regex = new RegExp(`\\b${txtPesquisa}`, 'i');

    let listaLocal = OrcamentoService.buscarOrcamentos();

    let listaFiltrada = listaLocal
    .filter(bordado => regex.test(formatString(bordado.nomeMatriz)))
    

    let listaSortida = listaFiltrada
    .sort((a, b) => new Date(b.dataCriacao) - new Date(a.dataCriacao));

    let listaSliced = listaSortida
    .slice(0, limiteLista);

    container.innerHTML = '';

    if (listaFiltrada.length === 0) {
      const noResults = document.createElement('h6');
      noResults.className = 'no-results';
      noResults.textContent = 'Nenhum Resultado Encontrado';
      container.appendChild(noResults);
      return
    }

    
    const carregarMais = document.querySelector('.loadMore');
    if(carregarMais && listaSortida.length > listaSliced.length){
      carregarMais.style.display = 'block';
    } else {
      carregarMais.style.display = 'none';
    }
    


    construirLista(listaSliced, container);
}