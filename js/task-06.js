
const inputEl = document.querySelector('#validation-input');





function onInputBlur(event) {
 
    if (event.currentTarget.value.length !== Number(inputEl.dataset.length)){
    inputEl.classList.add('invalid');
    inputEl.classList.remove("valid");
}
    else {
    inputEl.classList.remove("invalid");
    inputEl.classList.add('valid');
}
    
};
inputEl.addEventListener('blur', onInputBlur);