const btn1 = document.getElementById('btn1');
const titulo1 = document.getElementById('pregunta1');
const flecha1 = document.getElementById('flecha1');
const parrafo1 = document.getElementById('parrafo1');

const btn2 = document.getElementById('btn2');
const titulo2 = document.getElementById('pregunta2');
const flecha2 = document.getElementById('flecha2');
const parrafo2 = document.getElementById('parrafo2');

const btn3 = document.getElementById('btn3');
const parrafo3 = document.getElementById('parrafo3');
const flecha3 = document.getElementById('flecha3');
const titulo3 = document.getElementById('pregunta3');

const btn4 = document.getElementById('btn4');
const parrafo4 = document.getElementById('parrafo4');
const flecha4 = document.getElementById('flecha4');
const titulo4 = document.getElementById('pregunta4');

const btn5 = document.getElementById('btn5');
const parrafo5 = document.getElementById('parrafo5');
const flecha5 = document.getElementById('flecha5');
const titulo5 = document.getElementById('pregunta5');

btn1.addEventListener('click', ()=>{
    activarParrafo(titulo1, flecha1, parrafo1);

    flecha2.classList.remove('flecha-img-rotada');
    titulo2.classList.remove('titulo-pregunta-activo');
    parrafo2.classList.remove('parrafo-activo');

    flecha3.classList.remove('flecha-img-rotada');
    titulo3.classList.remove('titulo-pregunta-activo');
    parrafo3.classList.remove('parrafo-activo');

    flecha4.classList.remove('flecha-img-rotada');
    titulo4.classList.remove('titulo-pregunta-activo');
    parrafo4.classList.remove('parrafo-activo');

    flecha5.classList.remove('flecha-img-rotada');
    titulo5.classList.remove('titulo-pregunta-activo');
    parrafo5.classList.remove('parrafo-activo');
})
btn2.addEventListener('click', ()=>{
    activarParrafo(titulo2, flecha2, parrafo2);

    flecha1.classList.remove('flecha-img-rotada');
    titulo1.classList.remove('titulo-pregunta-activo');
    parrafo1.classList.remove('parrafo-activo');

    flecha3.classList.remove('flecha-img-rotada');
    titulo3.classList.remove('titulo-pregunta-activo');
    parrafo3.classList.remove('parrafo-activo');

    flecha4.classList.remove('flecha-img-rotada');
    titulo4.classList.remove('titulo-pregunta-activo');
    parrafo4.classList.remove('parrafo-activo');

    flecha5.classList.remove('flecha-img-rotada');
    titulo5.classList.remove('titulo-pregunta-activo');
    parrafo5.classList.remove('parrafo-activo');
})
btn3.addEventListener('click', ()=>{
    activarParrafo(titulo3, flecha3, parrafo3);

    flecha2.classList.remove('flecha-img-rotada');
    titulo2.classList.remove('titulo-pregunta-activo');
    parrafo2.classList.remove('parrafo-activo');

    flecha1.classList.remove('flecha-img-rotada');
    titulo1.classList.remove('titulo-pregunta-activo');
    parrafo1.classList.remove('parrafo-activo');

    flecha4.classList.remove('flecha-img-rotada');
    titulo4.classList.remove('titulo-pregunta-activo');
    parrafo4.classList.remove('parrafo-activo');

    flecha5.classList.remove('flecha-img-rotada');
    titulo5.classList.remove('titulo-pregunta-activo');
    parrafo5.classList.remove('parrafo-activo');
})
btn4.addEventListener('click', ()=>{
    activarParrafo(titulo4, flecha4, parrafo4);

    flecha2.classList.remove('flecha-img-rotada');
    titulo2.classList.remove('titulo-pregunta-activo');
    parrafo2.classList.remove('parrafo-activo');

    flecha3.classList.remove('flecha-img-rotada');
    titulo3.classList.remove('titulo-pregunta-activo');
    parrafo3.classList.remove('parrafo-activo');

    flecha1.classList.remove('flecha-img-rotada');
    titulo1.classList.remove('titulo-pregunta-activo');
    parrafo1.classList.remove('parrafo-activo');

    flecha5.classList.remove('flecha-img-rotada');
    titulo5.classList.remove('titulo-pregunta-activo');
    parrafo5.classList.remove('parrafo-activo');
})
btn5.addEventListener('click', ()=>{
    activarParrafo(titulo5, flecha5, parrafo5);

    flecha2.classList.remove('flecha-img-rotada');
    titulo2.classList.remove('titulo-pregunta-activo');
    parrafo2.classList.remove('parrafo-activo');

    flecha3.classList.remove('flecha-img-rotada');
    titulo3.classList.remove('titulo-pregunta-activo');
    parrafo3.classList.remove('parrafo-activo');

    flecha4.classList.remove('flecha-img-rotada');
    titulo4.classList.remove('titulo-pregunta-activo');
    parrafo4.classList.remove('parrafo-activo');

    flecha1.classList.remove('flecha-img-rotada');
    titulo1.classList.remove('titulo-pregunta-activo');
    parrafo1.classList.remove('parrafo-activo');
})

const activarParrafo = (btn, arrw, prf)=>{
    arrw.classList.toggle('flecha-img-rotada');
    btn.classList.toggle('titulo-pregunta-activo');
    prf.classList.toggle('parrafo-activo');
}