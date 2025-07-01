export function alternarToggles(container){
    const estadoToggle = {};
    const botoesToggle = container.querySelectorAll('.toggle');

    botoesToggle.forEach(toggle => {
        const key = toggle.dataset.key;
        estadoToggle[key] = false;

        toggle.classList.remove('ativo');

        toggle.addEventListener('click', () =>{
            const taAtivo = toggle.classList.toggle('ativo'); // alterna entre ter a classe e não ter a cada clique, e retorna true ou false pra variavel
            estadoToggle[key] = taAtivo;
        })
    });

    return estadoToggle;
}