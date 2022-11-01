const inputEl = document.querySelector('#name-input');


const outputEl = document.querySelector('#name-output');
// console.log(outputEl);



const spanChange = (event) => {
    if (event.currentTarget.value.trim() !== " ") {
        outputEl.textContent = event.currentTarget.value;
    }
    else {
        outputEl.textContent = 'Anonymous'
    }
}

inputEl.addEventListener('input', spanChange);