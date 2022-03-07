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

console.log(operate(multiple, 2, 3));