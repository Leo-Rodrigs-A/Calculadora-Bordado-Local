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

const botaoNovoOrcamento = document.querySelector('#botaoNovoOrcamento');
botaoNovoOrcamento.addEventListener('click', () => {
  const modalId = botaoNovoOrcamento.getAttribute('data-modal');
  const modal = document.getElementById(modalId);
  modal.showModal();
})

construirComponente(listaOrcamentos, montarLista);

 