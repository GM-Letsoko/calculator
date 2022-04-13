'use strict';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const display = $('#display');
let bottom_display = $('#bottom_display');
let numbers = $$('.numbers');
let clear = $('#clear');
let deleter = $('#delete');
let equal = $('#equal');
let operates = $$('.operation')
let home = $('#home');

const operate = (operator, a, b) => {
	if(operator === '*') return [a, b].reduce((a, b) => a * b); //array.reduce((a, b) => a * b);
	else if(operator === '-') return [a, b].reduce((a, b) => a - b);
	else if(operator === '+') return [a, b].reduce((a, b) => a + b, 0);
	else if(operator === '/') return [a, b].reduce((a, b) => a / b);
}

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
		bottom_display.textContent = '';
	});
});

//if the operation variable is active return number2 variable;
numbers.forEach(number => {
	number.addEventListener('click', e => { 
		if(e.target.id === '.' && display.textContent.includes('.')) return;
		if(operation) {
			display.textContent += e.target.id; 
			number2 += e.target.id;
			number2; 
			bottom_display.textContent = operate(operation, Number(number1), Number(number2));
		} 
	});
});

clear.addEventListener('click', e => {
	display.textContent = '';
	bottom_display.textContent = '';
	number1 = '';
	number2 = '';
	operation = undefined;
});

//needs fixing
deleter.addEventListener('click', e => {
	if(display.textContent) { 
		display.textContent = display.textContent.substr(0, display.textContent.length - 1);
		bottom_display.textContent = bottom_display.textContent.substr(0, bottom_display.textContent.length - 1);;
	} 
});

equal.addEventListener('click', e => { 
	display.textContent = bottom_display.textContent;
	number1 = display.textContent;
	number2 = '';
	bottom_display.textContent = '';
});