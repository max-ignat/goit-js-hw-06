const button = document.querySelector(".change-color");
console.log(button);

const body = document.querySelector('body');
console.log(body);

const span = document.querySelector('.color');

button.addEventListener('click', bcgChange);

function bcgChange(event) {
  span.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
  // button.style.backgroundColor = getRandomHexColor();
}
function getRandomHexColor() {

  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
