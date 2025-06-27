import { atualizarLista } from "./atualizar-lista.js";


const montarLista = document.querySelector(".recentes");
const inputPesquisa = document.querySelector('.pesquisa');
const mostrarMais = document.querySelector('.loadMore');
const botaoNovoOrcamento = document.querySelector('#botaoNovoOrcamento');

let limiteAtual = 12;

// carrega a lista ao iniciar o dom
atualizarLista({
  pesquisa: '',
  limiteLista: limiteAtual,
  container: montarLista
});


// input de pesquisa
inputPesquisa.addEventListener('input' , () => {
  atualizarLista({
    pesquisa: inputPesquisa.value, 
    limiteLista: limiteAtual, 
    container: montarLista 
  });  
});


// botao novo orcamento
botaoNovoOrcamento.addEventListener('click', () => {
  const modalId = botaoNovoOrcamento.getAttribute('data-modal');
  const modal = document.getElementById(modalId);
  modal.showModal();
})



 