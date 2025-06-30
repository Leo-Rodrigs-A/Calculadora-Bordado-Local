import { atualizarLista } from "./atualizar-lista.js";
import { modalNovo } from "./dom-builder/modal-novo.js";


const recentes = document.querySelector(".recentes");
const inputPesquisa = document.querySelector('.pesquisa');
const botaoNovoOrcamento = document.querySelector('#botaoNovoOrcamento');
const modal = document.getElementById('modalMestre');

const carregarMais = document.querySelector('.loadMore');



let limiteAtual = 12;

// carrega a lista ao iniciar o dom
atualizarLista({
  pesquisa: '',
  limiteLista: limiteAtual,
  container: recentes
});

// input de pesquisa
inputPesquisa.addEventListener('input' , () => {
  limiteAtual = 12;

  atualizarLista({
    pesquisa: inputPesquisa.value, 
    limiteLista: limiteAtual, 
    container: recentes
  }); 
});

// se o botão carregar mais estiver visivel
carregarMais.addEventListener('click', () => {
  limiteAtual += 12;

  atualizarLista({
    pesquisa: inputPesquisa.value, 
    limiteLista: limiteAtual, 
    container: recentes
  }); 
})


// botao novo orcamento
botaoNovoOrcamento.addEventListener('click', () => {

  modal.innerHTML = '';
  modal.appendChild(modalNovo());
  modal.showModal();

  const fecharModal = document.querySelector('.fechar-modal');
  fecharModal.addEventListener('click' , () => {
  modal.close();
  })

})





 