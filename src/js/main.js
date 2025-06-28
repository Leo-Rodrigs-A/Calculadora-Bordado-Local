import { atualizarLista } from "./atualizar-lista.js";


const recentes = document.querySelector(".recentes");
const inputPesquisa = document.querySelector('.pesquisa');
const botaoNovoOrcamento = document.querySelector('#botaoNovoOrcamento');

let limiteAtual = 12;

// carrega a lista ao iniciar o dom
atualizarLista({
  pesquisa: '',
  limiteLista: limiteAtual,
  container: recentes
});

const carregarMais = document.querySelector('.loadMore');

if (carregarMais){
  carregarMais.addEventListener('click', () => {
    limiteAtual += 12;
    atualizarLista({
      pesquisa: inputPesquisa.value, 
      limiteLista: limiteAtual, 
      container: recentes
    });
  })
}


// input de pesquisa
inputPesquisa.addEventListener('input' , () => {
  limiteAtual = 12;

  atualizarLista({
    pesquisa: inputPesquisa.value, 
    limiteLista: limiteAtual, 
    container: recentes
  });  
});


// botao novo orcamento
botaoNovoOrcamento.addEventListener('click', () => {
  const modalId = botaoNovoOrcamento.getAttribute('data-modal');
  const modal = document.getElementById(modalId);
  modal.showModal();
})



 