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
let operation;

numbers.forEach(number => {
	number.addEventListener('click', e => { 
		number1 = display.textContent += e.target.id;
		return number1;
	});
});

operates.forEach(operat => {
	operat.addEventListener('click', e => {
		display.textContent += operat.textContent;
		operation = $('#' + e.srcElement.id);
		return number1 + operation;
	});
});

number2 = 2;

equal.addEventListener('click', e => { 
	display.textContent = operate(operation, Number(number1), Number(number2));
});