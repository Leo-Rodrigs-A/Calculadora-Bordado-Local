import { listaOrcamentos as listaBase } from "./lista-base.js";
import {construirComponente} from "./construir-componentes.js";

let listaOrcamentos;
let montarLista = document.querySelector(".recentes")


if (localStorage.getItem('orcamentos')){
  listaOrcamentos = JSON.parse(localStorage.getItem('orcamentos'))
} else {
  localStorage.setItem('orcamentos', JSON.stringify(listaBase));
  listaOrcamentos = listaBase;
}



construirComponente(listaOrcamentos, montarLista);

 