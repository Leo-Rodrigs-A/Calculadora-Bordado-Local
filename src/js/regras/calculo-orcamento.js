function arredondarMoeda(valor) {
  return Math.round(valor * 100) / 100;
}

function normalizarConfiguracoes(configuracoes) {
  return Array.isArray(configuracoes) ? configuracoes[0] : configuracoes;
}

function calcularMultiplicadorUrgencia(ehUrgente) {
  return ehUrgente ? 1.15 : 1;
}

function calcularMultiplicadorMaterial(usaMaterialCliente) {
  return usaMaterialCliente ? 0.9 : 1;
}

function calcularValorUnitario({
  totalPontos,
  quantidade,
  precisaCriarMatriz,
  ehUrgente,
  usaMaterialCliente
}, configuracoes) {
  const {
    custoCriacaoMatriz,
    custoPorMilPontos,
    valorMinimoPorPeca,
    valorMinimoAbsoluto
  } = normalizarConfiguracoes(configuracoes);

  const custoBasePontos = (Number(totalPontos) / 1000) * Number(custoPorMilPontos);
  const custoMatrizRateado = precisaCriarMatriz ? Number(custoCriacaoMatriz) / quantidade : 0;
  const multiplicadorUrgencia = calcularMultiplicadorUrgencia(ehUrgente);
  const multiplicadorMaterial = calcularMultiplicadorMaterial(usaMaterialCliente);
  const valorMinimoAplicado = quantidade === 1 ? Number(valorMinimoPorPeca) : Number(valorMinimoAbsoluto);

  const valorCalculado = (custoBasePontos + custoMatrizRateado) * multiplicadorUrgencia * multiplicadorMaterial;

  return arredondarMoeda(Math.max(valorCalculado, valorMinimoAplicado));
}

export function calcularTabelaValores(entrada, configuracoes, quantidadeMaxima = 8) {
  const tabela = [];

  for (let quantidade = 1; quantidade <= quantidadeMaxima; quantidade += 1) {
    tabela.push(
      calcularValorUnitario(
        {
          totalPontos: entrada.totalPontos,
          quantidade,
          precisaCriarMatriz: entrada.precisaCriarMatriz,
          ehUrgente: entrada.ehUrgente,
          usaMaterialCliente: entrada.usaMaterialCliente
        },
        configuracoes
      )
    );
  }

  return tabela;
}

export function calcularOrcamento(entrada, configuracoes, metadados = {}) {
  const valoresPorQuantidade = calcularTabelaValores(entrada, configuracoes);

  return {
    id: metadados.id ?? '',
    dataCriacao: metadados.dataCriacao ?? '',
    nomeProjeto: entrada.nomeProjeto,
    totalPontos: Number(entrada.totalPontos),
    precisaCriarMatriz: Boolean(entrada.precisaCriarMatriz),
    ehUrgente: Boolean(entrada.ehUrgente),
    usaMaterialCliente: Boolean(entrada.usaMaterialCliente),
    valoresPorQuantidade,
    valorUnitario: valoresPorQuantidade[0]
  };
}

export function calcularValorPrincipal(entrada, configuracoes) {
  return calcularTabelaValores(entrada, configuracoes)[0];
}
