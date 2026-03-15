import { atualizarInterfaceLista, vincularAcoesModalOrcamento } from "./controladores/lista-controlador.js";
import { atualizarInterfaceVariaveis } from "./controladores/variaveis-controlador.js"; 
import { criarModalNovoOrcamento } from "./componentes/modal-novo.js";
import { criarModalEditarVariaveis, lerDadosFormularioVariaveis } from "./componentes/modal-variaveis.js";
import { criarModalVisualizarOrcamento } from "./componentes/modal-visualizar.js";
import { criarModalEditarOrcamento } from "./componentes/modal-editar.js";
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

function aplicarEstadoInicialInterruptores(formulario, estadoInterruptores, orcamento) {
  const mapaEstado = {
    'modal__interruptores-criar-matriz': orcamento.precisaCriarMatriz,
    'modal__interruptores-material-cliente': orcamento.usaMaterialCliente,
    'modal__interruptores-urgente': orcamento.ehUrgente
  };

  Object.entries(mapaEstado).forEach(([chave, ativo]) => {
    if (!ativo) {
      return;
    }

    const toggle = formulario.querySelector(`.interruptor[data-key="${chave}"]`);
    if (toggle) {
      toggle.classList.add('interruptor--ativo');
      estadoInterruptores[chave] = true;
    }
  });
}

function abrirModalEdicaoOrcamento(orcamento) {
  const formulario = criarModalEditarOrcamento(orcamento);
  abrirModal(formulario);

  const btnFechar = formulario.querySelector('.modal__btn-fechar');
  btnFechar.addEventListener('click', () => {
    dialogGlobal.close();
  });

  const estadoInterruptores = inicializarInterruptores(formulario);
  aplicarEstadoInicialInterruptores(formulario, estadoInterruptores, orcamento);

  vincularAcoesModalOrcamento({
    formulario,
    estadoInterruptores,
    modo: 'editar',
    orcamentoBase: orcamento,
    onSalvar: () => {
      renderizarListaComEstadoAtual();
      dialogGlobal.close();
    }
  });
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
      abrirModalEdicaoOrcamento(orcamento);
    }
  });

  abrirModal(modal);
}

console.log(containerVariaveis);

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

  const estadoInterruptores = inicializarInterruptores(formulario);
  vincularAcoesModalOrcamento({
    formulario,
    estadoInterruptores,
    modo: 'novo',
    onSalvar: () => {
      renderizarListaComEstadoAtual();
      dialogGlobal.close();
    }
  });
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
