import calcularOrcamento from '../regras/calculo-orcamento.js';
import ServicoVariaveis from '../servicos/variaveis-servico.js';
import { quantidadesPadrao } from '../dados-iniciais/quantidades-padrao.js';

function obterValorNumero(formulario, idCampo) {
  const campo = formulario.querySelector(`#${idCampo}`);
  return Number(campo?.value ?? 0);
}

function obterValorTexto(formulario, idCampo) {
  const campo = formulario.querySelector(`#${idCampo}`);
  return campo?.value.trim() ?? '';
}

function mapearVariaveisParaRegra(configuracoes) {
  return {
    quantidadesPadrao,
    valorMinimoGeral: configuracoes.valorMinimoAbsoluto,
    valorminimoPraUm: configuracoes.valorMinimoPorPeca,
    valorCriacaoMatriz: configuracoes.custoCriacaoMatriz,
    valorPorMilPontos: configuracoes.custoPorMilPontos
  };
}

function montarEntradaCalculo(formulario, estadoInterruptores = {}) {
  return {
    nomeProjeto: obterValorTexto(formulario, 'input-nome-projeto'),
    totalPontos: obterValorNumero(formulario, 'input-qtd-pontos'),
    quantidade: obterValorNumero(formulario, 'input-qtd-bordados'),
    precisaCriarMatriz: Boolean(estadoInterruptores['modal__interruptores-criar-matriz']),
    usaMaterialCliente: Boolean(estadoInterruptores['modal__interruptores-material-cliente']),
    ehUrgente: Boolean(estadoInterruptores['modal__interruptores-urgente'])
  };
}

export function calcularOrcamentoFormulario(formulario, estadoInterruptores = {}, metadados = {}) {
  const entrada = montarEntradaCalculo(formulario, estadoInterruptores);
  const configuracoes = ServicoVariaveis.buscarConfiguracoes();
  const variaveisCalculo = mapearVariaveisParaRegra(configuracoes);
  const resultado = calcularOrcamento(entrada, variaveisCalculo);

  const valoresPorQuantidade = resultado.valoresEmCadaQuantidade ?? [];
  const valorUnitario = resultado.valorDoBordado ?? valoresPorQuantidade[0] ?? 0;

  return {
    ...metadados,
    nomeProjeto: entrada.nomeProjeto,
    totalPontos: entrada.totalPontos,
    quantidade: entrada.quantidade,
    precisaCriarMatriz: entrada.precisaCriarMatriz,
    ehUrgente: entrada.ehUrgente,
    usaMaterialCliente: entrada.usaMaterialCliente,
    valoresPorQuantidade,
    valorUnitario
  };
}
