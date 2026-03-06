export function inicializarInterruptores(container){
    const estadoInterruptores = {};
    const botoesToggle = container.querySelectorAll('.interruptor');

    botoesToggle.forEach(toggle => {
        const key = toggle.dataset.key;
        estadoInterruptores[key] = false;

        toggle.classList.remove('interruptor--ativo');

        toggle.addEventListener('click', () =>{
            const taAtivo = toggle.classList.toggle('interruptor--ativo');
            estadoInterruptores[key] = taAtivo;
        })
    });

    return estadoInterruptores;
}
