
const inputEl = document.querySelector('#validation-input');





function onInputBlur(event) {
    event.currentTarget.classList.add('valid');
    if (event.currentTarget.value.trim().length < event.currentTarget.dataset.length)
    {
        
        event.currentTarget.classList.add('invalid');
    }
    else {
        event.currentTarget.classList.remove('invalid');
    }
    
};
inputEl.addEventListener('blur', onInputBlur);