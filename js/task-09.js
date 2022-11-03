function getRandomHexColor() {

  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");


const body = document.body;


const span = document.querySelector('.color');

button.addEventListener('click', bcgChange);

function bcgChange(event) {
  
  body.style.backgroundColor = getRandomHexColor();
  span.textContent =  body.style.backgroundColor;
}
