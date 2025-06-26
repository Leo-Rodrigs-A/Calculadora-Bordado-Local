import {construirComponente} from "./dom-builder/construir-componentes.js";
import { buscarOrcamentos } from "./orcamento-service.js";

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

    let listaLocal = buscarOrcamentos();

    let listaFiltrada = listaLocal
    .filter(bordado => regex.test(formatString(bordado.nomeMatriz)))
    .sort((a, b) => new Date(b.dataCriacao) - new Date(a.dataCriacao))
    .slice(0, limiteLista);

    construirComponente(listaFiltrada, container);
}