
const text = document.getElementById('screen');
const btnOne = document.querySelector('.btnOne');
const btnTwo = document.querySelector('.btnTwo');
const btnThree = document.querySelector('.btnThree');
const btnPlus = document.querySelector('.btnPlus');
const btnFour = document.querySelector('.btnFour');
const btnFive = document.querySelector('.btnFive');
const btnSix = document.querySelector('.btnSix');
const btnMinus = document.querySelector('.btnMinus');
const btnSeven = document.querySelector('.btnSeven');
const btnEight = document.querySelector('.btnEight');
const btnNine = document.querySelector('.btnNine');
const btnMul = document.querySelector('.btnMul');
const btnReset = document.querySelector('.btnReset');
const btnZero = document.querySelector('.btnZero');
const btnEquals = document.querySelector('.btnEquals');
const btnDiv = document.querySelector('.btnDiv');
const btnModulo = document.querySelector('.btnModulo');
const btnDot = document.querySelector('.btnDot');
const btnPower = document.querySelector('.btnPower');
const btnMode = document.querySelector('.btnMode');
const btnRemove = document.querySelector('.btnRemove');
btnOne.addEventListener('click', () => { text.value += '1'; });
btnTwo.addEventListener('click', () => { text.value += '2'; });
btnThree.addEventListener('click', () => { text.value += '3'; });
btnPlus.addEventListener('click', () => { text.value += '+'; });
btnFour.addEventListener('click', () => { text.value += '4'; });
btnFive.addEventListener('click', () => { text.value += '5'; });
btnSix.addEventListener('click', () => { text.value += '6'; });
btnMinus.addEventListener('click', () => { text.value += '-'; });
btnSeven.addEventListener('click', () => { text.value += '7'; });
btnEight.addEventListener('click', () => { text.value += '8'; });
btnNine.addEventListener('click', () => { text.value += '9'; });
btnMul.addEventListener('click', () => { text.value += '*'; });
btnReset.addEventListener('click', () => { text.value = ''; });
btnZero.addEventListener('click', () => { text.value += '0'; });
btnEquals.addEventListener('click', resultfun);
btnDiv.addEventListener('click', () => { text.value += '/'; });
btnModulo.addEventListener('click', () => { text.value += '%'; });
btnDot.addEventListener('click', () => { text.value += '.'; });
btnPower.addEventListener('click', () => { text.value += '**'; });
btnMode.addEventListener('click', changeBg , {once:true});
btnRemove.addEventListener('click', cutLastChar);

function resultfun() {
  let expression = text.value;
  let result = eval(expression);
  if(result) {
    text.value = result;
  } else {
    text.value = null;
  }
}
function changeBg() {
  const container = document.querySelector('.bg');
  const btnContainer = document.querySelectorAll('.btns');
  container.classList.remove('bg');
  container.classList.add('changebg');
  btnContainer.forEach((btn) => btn.classList.add('changebg'));
  text.classList.add('changebg');
  text.style.color = 'black';
  text.style.paddingRight = '30px';
}

function cutLastChar() {
  let str = text.value.slice(0, text.value.length - 1);
  text.value = str;
}


