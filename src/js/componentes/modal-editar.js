import { criarExibicaoValores } from './exibicao-valores.js';

function criarGrupoEntrada({ classe, idInput, rotulo, placeholder, valorAtual }) {
  const grupo = document.createElement('div');
  grupo.className = classe;

  const titulo = document.createElement('h6');
  titulo.textContent = rotulo;

  const input = document.createElement('input');
  input.type = 'number';
  input.id = idInput;
  input.placeholder = placeholder;
  input.value = valorAtual ?? '';
  input.required = true;

  grupo.append(titulo, input);
  return grupo;
}

export function criarModalEditarOrcamento(orcamento) {
  const formulario = document.createElement('form');
  formulario.method = 'dialog';

  const cabecalho = document.createElement('div');
  cabecalho.className = 'modal__cabecalho u-tema-escuro-padrao';

  const titulo = document.createElement('h4');
  titulo.textContent = 'Editar Orçamento';

  const btnFechar = document.createElement('button');
  btnFechar.className = 'modal__btn-fechar u-tema-escuro-padrao';
  btnFechar.setAttribute('data-modal', 'dialog-global');

  const iconeFechar = document.createElement('i');
  iconeFechar.className = 'fa-solid fa-xmark';

  btnFechar.appendChild(iconeFechar);
  cabecalho.append(titulo, btnFechar);

  const corpo = document.createElement('div');
  corpo.className = 'modal__corpo';

  const grupoNome = document.createElement('div');
  grupoNome.className = 'modal__nome-projeto u-tema-claro-padrao';

  const rotuloNome = document.createElement('h6');
  rotuloNome.textContent = 'Nome do Projeto';

  const inputNome = document.createElement('input');
  inputNome.type = 'text';
  inputNome.id = 'input-nome-projeto';
  inputNome.placeholder = 'Digite um nome';
  inputNome.value = orcamento.nomeProjeto ?? '';
  inputNome.required = true;

  grupoNome.append(rotuloNome, inputNome);

  const linhaDupla = document.createElement('div');
  linhaDupla.className = 'modal__linha-dupla';

  const grupoPontos = criarGrupoEntrada({
    classe: 'modal__quantidade-pontos',
    idInput: 'input-qtd-pontos',
    rotulo: 'Qtd. pontos',
    placeholder: 'Ex: 1468',
    valorAtual: orcamento.totalPontos
  });

  const grupoBordados = criarGrupoEntrada({
    classe: 'modal__quantidade-bordados',
    idInput: 'input-qtd-bordados',
    rotulo: 'Qtd. Bordados',
    placeholder: 'Ex: 4',
    valorAtual: orcamento.quantidade ?? 1
  });

  linhaDupla.append(grupoPontos, grupoBordados);

  const grupoInterruptores = document.createElement('div');
  grupoInterruptores.className = 'modal__interruptores-grupo';

  const opcoesInterruptores = [
    { classe: 'modal__interruptores-criar-matriz', etiqueta: 'Criar Matriz?', ativo: orcamento.precisaCriarMatriz },
    { classe: 'modal__interruptores-material-cliente', etiqueta: 'Material do Cliente?', ativo: orcamento.usaMaterialCliente },
    { classe: 'modal__interruptores-urgente', etiqueta: 'Urgente?', ativo: orcamento.ehUrgente }
  ];

  opcoesInterruptores.forEach((opcao) => {
    const itemOpcao = document.createElement('div');
    itemOpcao.className = opcao.classe;

    const rotuloOpcao = document.createElement('h6');
    rotuloOpcao.textContent = opcao.etiqueta;

    const interruptor = document.createElement('div');
    interruptor.className = 'interruptor u-tema-escuro-padrao';
    interruptor.dataset.key = opcao.classe;
    if (opcao.ativo) {
      interruptor.classList.add('interruptor--ativo');
    }

    itemOpcao.append(rotuloOpcao, interruptor);
    grupoInterruptores.append(itemOpcao);

    const divisor = document.createElement('hr');
    divisor.className = 'u-divisor-padrao';
    grupoInterruptores.append(divisor);
  });

  const btnCalcular = document.createElement('button');
  btnCalcular.className = 'modal__btn-calcular u-tema-medio-padrao';
  btnCalcular.id = 'btn-acao-calcular';
  btnCalcular.type = 'button';
  btnCalcular.textContent = 'Recalcular';

  const containerResultados = document.createElement('section');
  containerResultados.className = 'modal__resultado-calculo';
  if (orcamento.valoresPorQuantidade?.length) {
    containerResultados.appendChild(criarExibicaoValores(orcamento.valoresPorQuantidade));
  }

  const btnSalvar = document.createElement('button');
  btnSalvar.className = 'modal__btn-salvar';
  btnSalvar.id = 'btn-acao-salvar';
  btnSalvar.type = 'submit';
  btnSalvar.textContent = 'Salvar Alterações';
  btnSalvar.style.display = 'inline-flex';

  corpo.append(grupoNome, linhaDupla, grupoInterruptores, btnCalcular, containerResultados, btnSalvar);
  formulario.append(cabecalho, corpo);

  return formulario;
}

export function atualizarModalEditarOrcamento(formulario, valoresPorQuantidade) {
  const containerResultados = formulario.querySelector('.modal__resultado-calculo');
  if (containerResultados) {
    const exibicao = criarExibicaoValores(valoresPorQuantidade);
    containerResultados.replaceChildren(exibicao);
  }
}
