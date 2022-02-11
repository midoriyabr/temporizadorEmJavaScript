function simpleTimer() {
    function getSeconds(sec) {
        const data = new Date(sec * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');

    let seconds = 0;
    let time;

    function startTime() {
        time = setInterval(function () {
            seconds++;
            relogio.innerHTML = getSeconds(seconds);
        }, 1000);
    }

    document.addEventListener('click', function (evento) {
        const elemento = evento.target;

        if (elemento.classList.contains('iniciar')) {
            pausar.classList.remove('ativado');
            iniciar.classList.add('ativado');

            clearInterval(time);
            startTime();
        }

        if (elemento.classList.contains('pausar')) {
            iniciar.classList.remove('ativado');
            pausar.classList.add('ativado');

            clearInterval(time);
        }

        if (elemento.classList.contains('zerar')) {
            iniciar.classList.remove('ativado');
            pausar.classList.remove('ativado');

            clearInterval(time);
            seconds = 0;
            relogio.innerHTML = '00:00:00';
        }
    })
}

simpleTimer();