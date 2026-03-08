export function criarModalNovoOrcamento(){
    const formulario = document.createElement('form');
    formulario.method = 'dialog';

    const cabecalho = document.createElement('div');
    cabecalho.className = 'modal__cabecalho u-tema-escuro-padrao';

    const titulo = document.createElement('h4');
    titulo.textContent = 'Novo Orçamento';

    const btnFechar = document.createElement('button');
    btnFechar.className = 'modal__btn-fechar u-tema-escuro-padrao';
    btnFechar.setAttribute('data-modal', 'dialog-global');

    const iconeFechar = document.createElement('i');
    iconeFechar.className = 'fa-solid fa-xmark';

    btnFechar.appendChild(iconeFechar);
    cabecalho.append(titulo, btnFechar);

    const corpo = document.createElement('div');
    corpo.className ='modal__corpo';

    const grupoNome = document.createElement('div');
    grupoNome.className = 'modal__nome-projeto u-tema-claro-padrao';

    const rotuloNome = document.createElement('h6');
    rotuloNome.textContent = 'Nome do Projeto';

    const inputNome = document.createElement('input');
    inputNome.type = 'text';
    inputNome.id = 'input-nome-projeto';
    inputNome.placeholder = 'Digite um nome';
    inputNome.required = true;

    grupoNome.append(rotuloNome, inputNome);

    const linhaDupla = document.createElement('div');
    linhaDupla.className = 'modal__linha-dupla';

    const grupoPontos = document.createElement('div');
    grupoPontos.className = 'modal__quantidade-pontos';

    const rotuloPontos = document.createElement('h6');
    rotuloPontos.textContent = 'Qtd. pontos';

    const inputPontos = document.createElement('input');
    inputPontos.type = 'number';
    inputPontos.id = 'input-qtd-pontos';
    inputPontos.placeholder = 'Ex: 1468';
    inputPontos.required = true;

    grupoPontos.append(rotuloPontos, inputPontos);

    const grupoBordados = document.createElement('div');
    grupoBordados.className = 'modal__quantidade-bordados';

    const rotuloBordados = document.createElement('h6');
    rotuloBordados.textContent = 'Qtd. Bordados';

    const inputBordados = document.createElement('input');
    inputBordados.type = 'number';
    inputBordados.id = 'input-qtd-bordados';
    inputBordados.placeholder = 'Ex: 4';
    inputBordados.required = true;

    grupoBordados.append(rotuloBordados, inputBordados);

    linhaDupla.append(grupoPontos, grupoBordados);

    const grupoInterruptores = document.createElement('div');
    grupoInterruptores.className = 'modal__interruptores-grupo';

    const opcoesInterruptores = [
        {classe: 'modal__interruptores-criar-matriz', etiqueta: 'Criar Matriz?'},
        {classe: 'modal__interruptores-material-cliente', etiqueta: 'Material do Cliente?'},
        {classe: 'modal__interruptores-urgente', etiqueta: 'Urgente?'}
    ]
    
    opcoesInterruptores.forEach((opcao) => {
        const itemOpcao = document.createElement('div');
        itemOpcao.className = opcao.classe;

        const rotuloOpcao = document.createElement('h6');
        rotuloOpcao.textContent = opcao.etiqueta;

        const interruptor = document.createElement('div');
        interruptor.className = 'interruptor u-tema-escuro-padrao';
        interruptor.dataset.key = opcao.classe;

        itemOpcao.append(rotuloOpcao, interruptor);
        grupoInterruptores.append(itemOpcao);

        const divisor = document.createElement('hr');
        divisor.className = 'u-divisor-padrao';

        grupoInterruptores.append(divisor);
    });

    const btnCalcular = document.createElement('button');
    btnCalcular.className = 'modal__btn-calcular u-tema-medio-padrao';
    btnCalcular.id = 'btn-acao-calcular';
    btnCalcular.textContent = 'Calcular valores';

    const btnSalvar = document.createElement('button');
    btnSalvar.className = 'modal__btn-salvar';
    btnSalvar.id = 'btn-acao-salvar';
    btnSalvar.type = 'submit';
    btnSalvar.textContent = 'Salvar Orçamento';

    corpo.append(grupoNome, linhaDupla, grupoInterruptores, btnCalcular, btnSalvar);
    formulario.append(cabecalho, corpo);

    return formulario;
}
