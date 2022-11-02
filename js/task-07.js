const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');


const fontChange = (event) => {

    span.style.fontSize = input.value + 'px';

}

input.addEventListener('input', fontChange);