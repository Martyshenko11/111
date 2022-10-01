const idChanger = document.getElementById('first_changer');
const selectorChanger = document.querySelector('.second_changer');

function randomNum() {
  return Math.floor(Math.random() * 255);
}

function randomColor() {
  return 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
}

const changeColorsById = () => {
  idChanger.style.background = randomColor();
  idChanger.style.color = randomColor();
};

const changeColorsQuerySelector = () => {
  selectorChanger.style.background = randomColor();
  selectorChanger.style.color = randomColor();
};

const addPic = () => {
  const element = document.getElementById('additionalImg');
  if (!element) {
    const element = document.createElement('img');
    element.id = 'additionalImg';
    element.src = 'img/lviv1.png';
    element.style.width = '350px';
    element.style.height = '250px';
    bodyElem.appendChild(element);
  }
};

const increasePic = () => {
  const element = document.getElementById('additionalImg');
  if (element) {
    element.style.width = String(element.offsetWidth + 10) + 'px';
    element.style.height = String(element.offsetHeight + 10) + 'px';
  }
};

const reducePic = () => {
  const element = document.getElementById('additionalImg');
  if (element) {
    element.style.width = String(element.offsetWidth - 10) + 'px';
    element.style.height = String(element.offsetHeight - 10) + 'px';
  }
};

const removePic = () => {
  const element = document.getElementById('additionalImg');
  element && bodyElem.removeChild(element);
};

const bodyElem = document.querySelector('body');
const divButton = document.createElement('div');

const addButton = document.createElement('button');
addButton.innerHTML = 'Add';
addButton.onclick = addPic;

const increaseButton = document.createElement('button');
increaseButton.innerHTML = 'Increase';
increaseButton.onclick = increasePic;

const reduceButton = document.createElement('button');
reduceButton.innerHTML = 'Reduce';
reduceButton.onclick = reducePic;

const removeButton = document.createElement('button');
removeButton.innerHTML = 'Remove';

removeButton.onclick = removePic;
bodyElem.appendChild(divButton);
divButton.appendChild(addButton);
divButton.appendChild(increaseButton);
divButton.appendChild(reduceButton);
divButton.appendChild(removeButton);
