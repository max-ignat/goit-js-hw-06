// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }


// const input = document.querySelector('input');
// console.log(input);

// const createBtn = document.querySelector('#controls button[data-create]');
// console.log(createBtn);


// const destroyBtn = document.querySelector('#controls button[data-destroy]');
// console.log(destroyBtn);

// const div = document.querySelector('#boxes');
// console.log(div);
  


// const  createBoxes= () => {
//   let width = 20;
//   let height = 20;

//   for (let i = 0; i < input.value; i +=1) {
//     const newBox = document.createElement('div');

//     newBox.style.width = `${width += 10}px`;
//     newBox.style.height = `${height +=10}px`;
//     newBox.style.background = getRandomHexColor();

//     div.append(newBox);
//   }

  
  
// }
// const destroyBoxes = () => div.innerHTML = '';

// createBtn.addEventListener('click', createBoxes);
// destroyBtn.addEventListener('click', destroyBoxes);