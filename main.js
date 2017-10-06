// SET VARIABLES

let buttons = document.getElementsByClassName('button');
let clear = document.querySelector('#clearbtn');
let decimal= false;
let display = document.querySelector('#show_value');
let val = '';
let equals = document.getElementById('equals');
let operation = document.getElementsByClassName('operation');
// *******************BUTTONS FUNCTION************



for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function makeCalcWork() {
      let buttonValue = this.innerHTML;
        display.innerHTML += buttonValue;
      }
    }

    clear.onclick = function clear() {
        display.innerHTML = "";
        val = "";
    }


// *******************EQUALS FUNCTION**************


    equals.onclick = function() {
      val += display.innerHTML;
      display.innerHTML = eval(val);
      val = "";
    }


// ************PERATIONS FUNC****************


    for (var i = 0; i < operation.length; i++) {
      operation[i].onclick = function operators() {
        val += display.innerHTML;
        val += this.innerHTML;
        display.innerHTML = "";
        console.log(val);
      }
    }
