import { renderizarListaOrcamentos } from "../componentes/lista-componente.js";
import { atualizarModalNovoOrcamento } from "../componentes/modal-novo.js";
import { atualizarModalEditarOrcamento } from "../componentes/modal-editar.js";
import ServicoOrcamentos from "../servicos/orcamentos-servico.js";
import { calcularOrcamentoFormulario } from "./calculo-controlador.js";

function normalizarTextoBusca(texto) {
  return texto
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export function atualizarInterfaceLista ({pesquisa = '', limiteLista = 12, container}) {
    const termoBusca = normalizarTextoBusca(pesquisa);
    const regexBusca = new RegExp(`\\b${termoBusca}`, 'i');

    const orcamentos = ServicoOrcamentos.buscarTodos();

    const listaFiltrada = orcamentos.filter(orcamento => 
        regexBusca.test(normalizarTextoBusca(orcamento.nomeProjeto))
    );

    const listaOrdenada = listaFiltrada.sort((a, b) => 
        new Date(b.dataCriacao) - new Date(a.dataCriacao)
    );

    const listaPaginada = listaOrdenada.slice(0, limiteLista);

    container.innerHTML = '';

    if (listaFiltrada.length === 0) {
      const mensagemSemResultados = document.createElement('h6');
      mensagemSemResultados.className = 'lista-cards__mensagem-vazia';
      mensagemSemResultados.textContent = 'Nenhum Resultado Encontrado';
      container.appendChild(mensagemSemResultados);
      return;
    }

    const btnCarregarMais = document.querySelector('.secao-lista__btn-carregar-mais');
    if(btnCarregarMais && listaOrdenada.length > listaPaginada.length){
      btnCarregarMais.style.display = 'block';
    } else if (btnCarregarMais) {
      btnCarregarMais.style.display = 'none';
    }

    renderizarListaOrcamentos(listaPaginada, container);
}

function criarDataAtualIso() {
  const agora = new Date();
  const ano = agora.getFullYear();
  const mes = String(agora.getMonth() + 1).padStart(2, '0');
  const dia = String(agora.getDate()).padStart(2, '0');
  return `${ano}-${mes}-${dia}`;
}

function gerarIdOrcamento() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `orcamento-${Date.now()}`;
}

export function vincularAcoesModalOrcamento({
  formulario,
  estadoInterruptores,
  modo = 'novo',
  orcamentoBase = null,
  onSalvar = () => {}
}) {
  formulario.addEventListener('submit', (event) => {
    event.preventDefault();
  });

  const btnCalcular = formulario.querySelector('#btn-acao-calcular');
  const btnSalvar = formulario.querySelector('#btn-acao-salvar');
  const atualizarExibicao = modo === 'editar' ? atualizarModalEditarOrcamento : atualizarModalNovoOrcamento;
  let orcamentoCalculado = null;

  function calcularEAtualizar() {
    if (typeof formulario.reportValidity === 'function' && !formulario.reportValidity()) {
      return null;
    }
    const metadados = modo === 'editar' && orcamentoBase
      ? { id: orcamentoBase.id, dataCriacao: orcamentoBase.dataCriacao }
      : {};

    orcamentoCalculado = calcularOrcamentoFormulario(formulario, estadoInterruptores, metadados);
    atualizarExibicao(formulario, orcamentoCalculado.valoresPorQuantidade);
    return orcamentoCalculado;
  }

  if (btnCalcular) {
    btnCalcular.addEventListener('click', () => {
      calcularEAtualizar();
    });
  }

  if (btnSalvar) {
    btnSalvar.addEventListener('click', (event) => {
      event.preventDefault();
      const orcamentoFinal = orcamentoCalculado ?? calcularEAtualizar();
      if (!orcamentoFinal) {
        return;
      }

      if (modo === 'editar' && orcamentoBase) {
        ServicoOrcamentos.atualizarPorId(orcamentoBase.id, orcamentoFinal);
        onSalvar(orcamentoFinal);
        return;
      }

      const orcamentoNovo = {
        ...orcamentoFinal,
        id: gerarIdOrcamento(),
        dataCriacao: criarDataAtualIso()
      };

      ServicoOrcamentos.salvarNovo(orcamentoNovo);
      onSalvar(orcamentoNovo);
    });
  }
}
