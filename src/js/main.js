import { atualizarLista } from "./atualizar-lista.js";
import { atualizarVariaveis } from "./atualizar-variaveis.js"; 
import { modalNovo } from "./dom-builder/modal-novo.js";
import { modalVariaveis } from "./dom-builder/modal-variaveis.js";
import { capturarDadosVariaveis } from './dom-builder/modal-variaveis.js';
import variaveisService from "./acessar-local-storage/variaveis-service.js";


const recentes = document.querySelector(".recentes");
const variaveisField = document.querySelector('.variaveis');
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

atualizarVariaveis(variaveisField);


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
  });

})


//clique no campo variaveis
variaveisField.addEventListener('click', () => {
  modal.innerHTML = '';

  const form = modalVariaveis();  
  modal.appendChild(form);
  modal.showModal();

  const fecharModal = form.querySelector('.fechar-modal');
  fecharModal.addEventListener('click' , () => {
  modal.close();
  });

  form.addEventListener('submit', (e) => {
  e.preventDefault(); // evita o modal fechar logo após o clique em submit, pq eu tenho mais coisa pra fazer que precisa dos dados do modal
  console.log(document.getElementById('valorMatriz'));
  const novasVariaveis = capturarDadosVariaveis(form);
  variaveisService.salvarVariaveis(novasVariaveis);
  atualizarVariaveis(variaveisField);
  modal.close();

});

})





 