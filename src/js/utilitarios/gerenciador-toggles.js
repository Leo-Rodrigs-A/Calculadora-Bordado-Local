export function inicializarInterruptores(container){
    const estadoInterruptores = {};
    const botoesToggle = container.querySelectorAll('.interruptor');

    botoesToggle.forEach(toggle => {
        const chaveInterruptor = toggle.dataset.key;
        estadoInterruptores[chaveInterruptor] = false;

        toggle.classList.remove('interruptor--ativo');

        toggle.addEventListener('click', () =>{
            const estaAtivo = toggle.classList.toggle('interruptor--ativo');
            estadoInterruptores[chaveInterruptor] = estaAtivo;
        })
    });

    return estadoInterruptores;
}
