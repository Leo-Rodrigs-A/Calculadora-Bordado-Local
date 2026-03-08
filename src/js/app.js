import { atualizarInterfaceLista } from "./controladores/lista-controlador.js";
import { atualizarInterfaceVariaveis } from "./controladores/variaveis-controlador.js"; 
import { criarModalNovoOrcamento } from "./componentes/modal-novo.js";
import { criarModalEditarVariaveis, lerDadosFormularioVariaveis } from "./componentes/modal-variaveis.js";
import { criarModalVisualizarOrcamento } from "./componentes/modal-visualizar.js";
import ServicoOrcamentos from "./servicos/orcamentos-servico.js";
import ServicoVariaveis from "./servicos/variaveis-servico.js";
import { inicializarInterruptores } from "./utilitarios/gerenciador-toggles.js";

const containerListaOrcamentos = document.querySelector(".lista-orcamentos");
const containerVariaveis = document.querySelector('.painel-variaveis');
const inputPesquisa = document.querySelector('.barra-acoes__campo-pesquisa');
const btnNovoOrcamento = document.querySelector('#btn-novo-orcamento');
const btnEditVariaveisMobile = document.querySelector('.cabecalho-principal__btn-editar-mobile');
const dialogGlobal = document.getElementById('dialog-global');
const btnCarregarMais = document.querySelector('.secao-lista__btn-carregar-mais');

let limiteListaAtual = 12;

function renderizarListaComEstadoAtual() {
  atualizarInterfaceLista({
    pesquisa: inputPesquisa.value,
    limiteLista: limiteListaAtual,
    container: containerListaOrcamentos
  });
}

function gerenciarAberturaModalVariaveis() {
  const configuracoesAtuais = ServicoVariaveis.buscarConfiguracoes();
  const formulario = criarModalEditarVariaveis(configuracoesAtuais);
  abrirModal(formulario);

  const btnFechar = formulario.querySelector('.modal__btn-fechar');
  btnFechar.addEventListener('click' , () => {
    dialogGlobal.close();
  });

  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const novasConfiguracoes = lerDadosFormularioVariaveis(formulario, configuracoesAtuais);
    ServicoVariaveis.salvarConfiguracoes(novasConfiguracoes);
    atualizarInterfaceVariaveis(containerVariaveis);
    dialogGlobal.close();
  });
}

function abrirModal(conteudo) {
  dialogGlobal.innerHTML = '';
  dialogGlobal.appendChild(conteudo);
  dialogGlobal.showModal();
}

function abrirModalVisualizacaoOrcamento(orcamento) {
  const modal = criarModalVisualizarOrcamento(orcamento, {
    onFechar: () => {
      dialogGlobal.close();
    },
    onExcluir: () => {
      ServicoOrcamentos.excluirPorId(orcamento.id);
      renderizarListaComEstadoAtual();
      dialogGlobal.close();
    },
    onEditar: () => {
      dialogGlobal.close();
    }
  });

  abrirModal(modal);
}

// Inicialização
renderizarListaComEstadoAtual();
atualizarInterfaceVariaveis(containerVariaveis);

// Eventos
inputPesquisa.addEventListener('input' , () => {
  limiteListaAtual = 12;
  renderizarListaComEstadoAtual();
});

btnCarregarMais.addEventListener('click', () => {
  limiteListaAtual += 12;
  renderizarListaComEstadoAtual();
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

containerListaOrcamentos.addEventListener('click', (event) => {
  const cardOrcamento = event.target.closest('.card-orcamento');

  if (!cardOrcamento || !containerListaOrcamentos.contains(cardOrcamento)) {
    return;
  }

  const idOrcamento = cardOrcamento.dataset.orcamentoId;
  const orcamento = ServicoOrcamentos.buscarPorId(idOrcamento);

  if (!orcamento) {
    return;
  }

  abrirModalVisualizacaoOrcamento(orcamento);
});
