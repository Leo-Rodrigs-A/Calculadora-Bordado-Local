import { atualizarInterfaceLista } from "./controladores/lista-controlador.js";
import { atualizarInterfaceVariaveis } from "./controladores/variaveis-controlador.js"; 
import { criarModalNovoOrcamento } from "./componentes/modal-novo.js";
import { criarModalEditarVariaveis, lerDadosFormularioVariaveis } from "./componentes/modal-variaveis.js";
import { criarModalVisualizar } from "./componentes/modal-visualizar.js";
import ServicoOrcamentos from "./modelos/orcamento-modelo.js";
import ServicoVariaveis from "./modelos/variaveis-modelo.js";
import { inicializarInterruptores } from "./utilitarios/gerenciador-toggles.js";

const containerRecentes = document.querySelector(".recentes");
const containerVariaveis = document.querySelector('.painel-metricas');
const inputPesquisa = document.querySelector('.barra-acoes__campo-pesquisa');
const btnNovoOrcamento = document.querySelector('#btn-novo-orcamento');
const btnEditVariaveisMobile = document.querySelector('.cabecalho-principal__btn-editar-mobile');
const dialogGlobal = document.getElementById('dialog-global');
const btnCarregarMais = document.querySelector('.lista-cards__btn-carregar-mais');

let limiteAtual = 12;

function atualizarListaAtual() {
  atualizarInterfaceLista({
    pesquisa: inputPesquisa.value,
    limiteLista: limiteAtual,
    container: containerRecentes
  });
}

function gerenciarAberturaModalVariaveis() {
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
}

function abrirModal(conteudo) {
  dialogGlobal.innerHTML = '';
  dialogGlobal.appendChild(conteudo);
  dialogGlobal.showModal();
}

function gerenciarAberturaModalVisualizacao(bordado) {
  const modal = criarModalVisualizar(bordado, {
    onFechar: () => {
      dialogGlobal.close();
    },
    onExcluir: () => {
      ServicoOrcamentos.excluir(bordado.id);
      atualizarListaAtual();
      dialogGlobal.close();
    },
    onEditar: () => {
      dialogGlobal.close();
    }
  });

  abrirModal(modal);
}

// Inicialização
atualizarListaAtual();
atualizarInterfaceVariaveis(containerVariaveis);

// Eventos
inputPesquisa.addEventListener('input' , () => {
  limiteAtual = 12;
  atualizarListaAtual();
});

btnCarregarMais.addEventListener('click', () => {
  limiteAtual += 12;
  atualizarListaAtual();
});

btnNovoOrcamento.addEventListener('click', () => {
  const formulario = criarModalNovoOrcamento();
  abrirModal(formulario);

  const btnFechar = formulario.querySelector('.modal__btn-fechar');
  btnFechar.addEventListener('click' , () => {
    dialogGlobal.close();
  });

  inicializarInterruptores(formulario);
});

containerVariaveis.addEventListener('click', gerenciarAberturaModalVariaveis);
btnEditVariaveisMobile.addEventListener('click', gerenciarAberturaModalVariaveis);

containerRecentes.addEventListener('click', (event) => {
  const cardOrcamento = event.target.closest('.card-orcamento');

  if (!cardOrcamento || !containerRecentes.contains(cardOrcamento)) {
    return;
  }

  const idOrcamento = cardOrcamento.dataset.orcamentoId || cardOrcamento.id;
  const bordado = ServicoOrcamentos.buscarPorId(idOrcamento);

  if (!bordado) {
    return;
  }

  gerenciarAberturaModalVisualizacao(bordado);
});
