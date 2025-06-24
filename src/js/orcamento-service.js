import { listaOrcamentos as listaBase } from "./lista-base.js";

export function buscarOrcamentos () {
    let listaAtual;

    if (localStorage.getItem('orcamentos')){
        listaAtual = JSON.parse(localStorage.getItem('orcamentos'))
    } else {
        localStorage.setItem('orcamentos', JSON.stringify(listaBase));
        listaAtual = listaBase;
    }

    return listaAtual;
}