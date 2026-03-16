export default function calcularOrcamento(dadosNovoBordado, variaveisComQuantidadesPadrao) {

  //variaveis de calculo
  const quantidadesPadrao = variaveisComQuantidadesPadrao.quantidadesPadrao;
  const valorMinimoGeral = variaveisComQuantidadesPadrao.valorMinimoGeral;
  const valorminimoPraUm = variaveisComQuantidadesPadrao.valorminimoPraUm;
  const valorCriacaoMatriz = variaveisComQuantidadesPadrao.valorCriacaoMatriz;
  const valorPorMilPontos = variaveisComQuantidadesPadrao.valorPorMilPontos;

  // enviadas pelo cliente
  const quantidadeBordados = dadosNovoBordado.quantidade;
  const totalPontos = dadosNovoBordado.totalPontos;
  const precisaCriarMatriz = dadosNovoBordado.precisaCriarMatriz;
  const ehUrgente = dadosNovoBordado.ehUrgente;
  const usaMaterialCliente = dadosNovoBordado.usaMaterialCliente;

  //calculo do valor do bordado
  let calcularValorPraFazerUm = () => {
    if (totalPontos < 4000) {
      return valorminimoPraUm;
    };
    return (valorminimoPraUm + ((totalPontos - 4000) / 1000) * valorPorMilPontos);
  };

  function calcularValorPraQuantidadesX() {
    const valorPraFazerUm = calcularValorPraFazerUm();
    const multiplicadores = [1, 0.8, 0.7, 0.65, 0.6, 0.55, 0.45, 0.4];

    const custoPorQuantidade = multiplicadores.map(multiplicador => {
      let valorBase = valorPraFazerUm * multiplicador;

      if (valorBase < valorMinimoGeral) {
      valorBase = valorMinimoGeral;
      }

      if (precisaCriarMatriz) {
        valorBase += (valorCriacaoMatriz/quantidadeBordados);
      }

      if (usaMaterialCliente) {
        valorBase *= 1.3;
      }

      if (ehUrgente) {
        valorBase *= 1.3;
      }

      const valorArredondado = Math.ceil(valorBase);

      return valorArredondado;
    });

    return custoPorQuantidade;
 };

  const valorACobrarPorQuantidade = calcularValorPraQuantidadesX();

  let indiceBordadoEscolhido = 0;
  for (let i = 0; i < quantidadesPadrao.length; i++) {
    if (quantidadeBordados >= quantidadesPadrao[i]) {
      indiceBordadoEscolhido = i;
    } else {
      break;
    }
  };

  const valorDoBordado = valorACobrarPorQuantidade[indiceBordadoEscolhido];

  return {
    valorDoBordado: valorDoBordado,
    valoresEmCadaQuantidade: valorACobrarPorQuantidade,
  };

};