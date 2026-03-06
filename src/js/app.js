import { atualizarInterfaceLista } from "./controladores/lista-controlador.js";
import { atualizarInterfaceVariaveis } from "./controladores/variaveis-controlador.js"; 
import { criarModalNovoOrcamento } from "./componentes/modal-novo.js";
import { criarModalEditarVariaveis, lerDadosFormularioVariaveis } from "./componentes/modal-variaveis.js";
import ServicoVariaveis from "./modelos/variaveis-modelo.js";
import { inicializarInterruptores } from "./utilitarios/gerenciador-toggles.js";

const containerRecentes = document.querySelector(".recentes");
const containerVariaveis = document.querySelector('.painel-metricas');
const inputPesquisa = document.querySelector('.barra-acoes__campo-pesquisa');
const btnNovoOrcamento = document.querySelector('#btn-novo-orcamento');
const dialogGlobal = document.getElementById('dialog-global');
const btnCarregarMais = document.querySelector('.lista-cards__btn-carregar-mais');

let limiteAtual = 12;

// Inicialização
atualizarInterfaceLista({
  pesquisa: '',
  limiteLista: limiteAtual,
  container: containerRecentes
});

atualizarInterfaceVariaveis(containerVariaveis);

// Eventos
inputPesquisa.addEventListener('input' , () => {
  limiteAtual = 12;
  atualizarInterfaceLista({
    pesquisa: inputPesquisa.value, 
    limiteLista: limiteAtual, 
    container: containerRecentes
  }); 
});

btnCarregarMais.addEventListener('click', () => {
  limiteAtual += 12;
  atualizarInterfaceLista({
    pesquisa: inputPesquisa.value, 
    limiteLista: limiteAtual, 
    container: containerRecentes
  }); 
});

btnNovoOrcamento.addEventListener('click', () => {
  dialogGlobal.innerHTML = '';
  const formulario = criarModalNovoOrcamento();
  dialogGlobal.appendChild(formulario);
  dialogGlobal.showModal();

  const btnFechar = formulario.querySelector('.modal__btn-fechar');
  btnFechar.addEventListener('click' , () => {
    dialogGlobal.close();
  });

  inicializarInterruptores(formulario);
});

containerVariaveis.addEventListener('click', () => {
  dialogGlobal.innerHTML = '';
  const formulario = criarModalEditarVariaveis();  
  dialogGlobal.appendChild(formulario);
  dialogGlobal.showModal();

  const btnFechar = formulario.querySelector('.modal__btn-fechar');
  btnFechar.addEventListener('click' , () => {
    dialogGlobal.close();
  });

  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const novasVariaveis = lerDadosFormularioVariaveis(formulario);
    ServicoVariaveis.salvarConfiguracoes(novasVariaveis);
    atualizarInterfaceVariaveis(containerVariaveis);
    dialogGlobal.close();
  });
});
