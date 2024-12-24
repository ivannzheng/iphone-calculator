
const display = document.querySelector('.display');

function updateToDisplay(input) {
  display.innerHTML += input;

}

function clearDisplay() {
  display.innerHTML = '';
}

function calculate() {

  let expression = display.innerHTML;

  expression = expression.replace(/x/g, '*').replace(/÷/g, '/').replace(/%/g, '*0.01'); 

  display.innerHTML = eval(expression)

}



