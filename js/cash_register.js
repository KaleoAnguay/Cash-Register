var calculator = calculatorModule();

// Registers display

var display = document.getElementById('display');

var price = document.createElement('div');
  price.className = 'price';
  display.appendChild(price);

var operator;

//Button load

var buttonBox = document.getElementById('calculator');
var buttnum = 13;

for( var i = 1; i < buttnum; i++) {
  var button = document.createElement('button');
  button.id = i;
  button.innerHTML = i;
  button.addEventListener('click', function(event) {
    price.innerHTML += event.target.innerHTML;

  });
  display.appendChild(button);
}

var butt0 = document.getElementById('10');
  butt0.innerHTML = '0';

var butt00 = document.getElementById('11');
  butt00.innerHTML = '00';

var buttPeriod = document.getElementById('12');
  buttPeriod.innerHTML = '.';


//Calculator buttons!

var math = document.getElementById('math');
var mathButt = 5;

for(var i = 0; i< mathButt; i++) {
  var buttontwo = document.createElement('button');
  buttontwo.innerHTML = i -1;
  buttontwo.id = "math" + i;
  math.appendChild(buttontwo);
}

var add = document.getElementById('math0');
  add.innerHTML = '+';
  add.addEventListener('click', function() {
    calculator.load(Number(price.innerHTML));
    price.innerHTML = '';
    operator  = '+';

  });


var multiply = document.getElementById('math1');
  multiply.innerHTML = '*';
  multiply.addEventListener('click', function() {
    calculator.load(Number(price.innerHTML));
    price.innerHTML = '';
    operator = '*';
  });

var subtract = document.getElementById('math2');
  subtract.innerHTML = '-';
  subtract.addEventListener('click', function() {
    calculator.load(Number(price.innerHTML));
    price.innerHTML = '';
    operator = '-';
  });

var divide = document.getElementById('math3');
  divide.innerHTML = '/';
  divide.addEventListener('click', function() {
    calculator.load(Number(price.innerHTML));
    price.innerHTML = '';
    operator = '/';
  });

var equal = document.getElementById('math4');
  equal.innerHTML = '=';
  equal.addEventListener('click', function() {
    if(operator === '+') {
       price.innerHTML = calculator.add(Number(price.innerHTML));

    } else if(operator === '*') {
       price.innerHTML = calculator.multiply(Number(price.innerHTML));

    } else if (operator === '-') {
      price.innerHTML = calculator.subtract(Number(price.innerHTML));

    } else if (operator === '/')
      price.innerHTML = calculator.divide(Number(price.innerHTML));
  });



//Other properties

var whatDo = document.getElementById('whatDo');
var whatdoButt = 4;

for( var i = 0; i< whatdoButt; i++) {
  var buttonthree = document.createElement('button');
  buttonthree.innerHTML = i;
  buttonthree.id = 'other' + i;
  whatDo.appendChild(buttonthree);
}

var clear = document.getElementById('other0');
  clear.innerHTML = 'clear';
  clear.addEventListener('click', function() {
    price.innerHTML = '';
  });

var depositeCash = document.getElementById('other2');
  depositeCash.innerHTML = 'Deposite';
  depositeCash.addEventListener('click', function(event) {
    calculator.saveMemory(Number(price.innerHTML));
  });

var withDraw = document.getElementById('other3');
  withDraw.innerHTML = 'Withdraw';
  withDraw.addEventListener('click', function(event) {

  });

var getBalance = document.getElementById('other1');
  getBalance.innerHTML = 'Balance';
  getBalance.addEventListener('click', function(event) {
    calculator.recallMemory(Number(price.innerHTML));
  });
