const form = document.querySelector('.login-form');

form.addEventListener('submit', onForm);

function onForm(event) {

    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;
    


    if (mail === "" || password === "") {
    alert("Все поля должны быть заполнены");
    }
    else {
    const formData = {
    mail,
    password,
    };

    console.log(formData);
    form.reset();
    }
}
// console.log(formData);


