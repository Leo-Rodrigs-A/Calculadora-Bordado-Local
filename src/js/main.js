import { atualizarLista } from "./atualizar-lista.js";


const montarLista = document.querySelector(".recentes");
const inputPesquisa = document.querySelector('.pesquisa');
const mostrarMais = document.querySelector('.loadMore');

let limiteAtual = 12;
atualizarLista({
  pesquisa: '',
  limiteLista: limiteAtual,
  container: montarLista
});


inputPesquisa.addEventListener('input' , () => {

  atualizarLista({
    pesquisa: inputPesquisa.value, 
    limiteLista: limiteAtual, 
    container: montarLista 
  });
  
});



const botaoNovoOrcamento = document.querySelector('#botaoNovoOrcamento');
botaoNovoOrcamento.addEventListener('click', () => {
  const modalId = botaoNovoOrcamento.getAttribute('data-modal');
  const modal = document.getElementById(modalId);
  modal.showModal();
})



 