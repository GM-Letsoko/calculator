'use strict';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const display = $('#display');
let display2 = $('#display2');
let numbers = $$('.numbers');
let clear = $('#clear');
let deleter = $('#delete');
let equal = $('#equal');
let operates = $$('.operation')
let home = $('#home');

//returns + - * / or error depending on the operator
const operate = (operator, a, b) => {
	if(operator === '*') {
		return multiplier([a, b]);
	} else if(operator === '-') {
		return subtractor([a, b]);
	} else if(operator === '+') {
		return sum([a, b]);
	} else if(operator === '/') {
		return divider([a, b]);
	} 
}

const subtractor = function(array) {
	let subtract = (a, b) => a - b;
	return array.reduce(subtract);
};

const sum = function(array) {
	let add = (a, b) => a + b;
	return array.reduce(add);
};

const multiplier = function(array) {
	let times = (a, b) => a * b;
	return array.reduce(times);
};

const divider = function(array) {
	let divider = (a, b) => a / b;
	return array.reduce(divider);
};

let number1;
let number2;
let operation;

//if the operation variable is not active return number1 variable; 
numbers.forEach(number => {
	number.addEventListener('click', e => { 
		if(e.target.id === '.' && display.textContent.includes('.')) return;
		if(!operation) {
			number1 = display.textContent += e.target.id;
			return number1;
		}
	});
});

operates.forEach(operat => {
	operat.addEventListener('click', e => {
		if(number2) { 
			number1 = bottom_display.textContent;
			operation = undefined;
		} 
		if(e.target.classList.value === 'operation' && display.textContent.includes(operation)) return;
		display.textContent += operat.textContent;
		operation = e.target.id;
		number2 = '';
		display2.textContent = '';
	});
});

//if the operation variable is active return number2 variable;
numbers.forEach(number => {
	number.addEventListener('click', e => { 
		if(e.target.id === '.' && display1.textContent.includes('.')) return;
		if(operation) {
			display.textContent += e.target.id; 
			number2 += e.target.id;
			number2; 
			display2.textContent = operate(operation, Number(number1), Number(number2));
		} 
	});
});

clear.addEventListener('click', e => {
	display.textContent = '';
	display2.textContent = '';
	number1 = '';
	number2 = '';
	operation = undefined;
});

deleter.addEventListener('click', e => {
	if(display.textContent) { 
		display.textContent = display.textContent.substr(0, display.textContent.length - 1);
		display2.textContent = display2.textContent.substr(0, display2.textContent.length - 1);;
	} 
});

equal.addEventListener('click', e => { 
	display2.textContent = '';
	display.textContent = operate(operation, Number(number1), Number(number2));
	number1 = display.textContent;
});