const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const divider = function(a, b) {
	return a / b;
};

const multiply = function(a, b) {
	return a * b;
};

let display = $('#display');
let display1 = $('#display1');
let numbers = $$('.numbers');
let clear = $('#clear');
let deleter = $('#delete');
let equal = $('#equal');
let operates = $$('.operation')

//returns + - * / or error depending on the operator
const operate = (operator, a, b) => {
	if(operator === multiple) {
		return multiply(a, b);
	} else if(operator === minus) {
		return subtract(a, b);
	} else if(operator === plus) {
		return add(a, b);
	} else if(operator === divide) {
		return divider(a, b);
	} else {
		return 'ERROR';
	}
}

let number1;
let number2;
let operation;

//if the operation variable is not active return number1 variable; 
numbers.forEach(number => {
	number.addEventListener('click', e => { 
		if(!operation) {
			number1 = display.textContent += e.target.id;
			return number1;
		}
	});
});

operates.forEach(operat => {
	operat.addEventListener('click', e => {
		display.textContent += operat.textContent;
		operation = $('#' + e.srcElement.id); //had to use this since e.target.id does not return the desired result;
		return number1 + operation;
	});
});

//if the operation variable is active return number2 variable;
numbers.forEach(number => {
	number.addEventListener('click', e => { 
		if(operation) {
			number2 = display1.textContent += e.target.id;
			return number2;
		}
	});
});

clear.addEventListener('click', e => {
	display.textContent = '';
	display1.textContent = '';
	number1 = '';
	number2 = '';
	operation = undefined;
})

equal.addEventListener('click', e => { 
	display1.textContent = '';
	display.textContent = operate(operation, Number(number1), Number(number2));
});