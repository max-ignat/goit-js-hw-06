
const inputEl = document.querySelector('#validation-input');
// console.log(inputEl.placeholder.length)

// const placeholderEl = document.querySelector('inputEl.placeholder')




function onInputBlur(event) {
    event.currentTarget.classList.remove('invalid');
    if (event.currentTarget.value.trim().length < event.currentTarget.dataset.length) {
        event.currentTarget.classList.add('invalid');
    }
    event.currentTarget.classList.add('valid');
};
inputEl.addEventListener('blur', onInputBlur);