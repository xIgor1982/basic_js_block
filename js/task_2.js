'use strict'
/*
 1 Объясните почему код даёт именно такие результаты?
 */
let a = 1, b = 1, c, d;

//пример 1
c = ++a;
//alert(c);
// ответ: 2
// Потому что инкремент перед переменной сначала увеличивает значение на единицу, а потом совершает действие.

//пример 2
d = b++;
//alert(d);
//ответ: 1
//Здесь наоборот инкремент после переменной увеличивает значение после действия над ней

//пример 3
c = 2 + ++a;
//alert(c);
//ответ: 5
//а - увеличивается по 1 примеру (а = 2 - потом ++, становится 3), а дальше математика.

//пример 4
d = 2 + b++;
//alert(d); //ответ: 4 -- здесь по 2 примеру b увеличивается после присвоения
//alert(a); //3 -- а = 1 > 1 / потом а увеличивается 2 раза -- и в итоге = 3
//alert(b); //3 -- также как и в прошлом выводе а

/*
 2 Чему будут равны переменные x и a в примере ниже? Написать почему так произошло
 */

// (описать последовательность действий).
let a2 = 2;
let x = 1 + (a2 *= 2);
//Приоритет операция – сначала скобки, потом прибавление. Ответ 5.  x = 1 + (2 * 2);

/*
 3 Объявить две переменные a и b и задать им целочисленные произвольные начальные значения.
 */

/**
 * Функция обработки целочисленных значений
 * @param num1 принимает первое число
 * @param num2 принимает второе число
 * @returns {string|number|*} Возвращает число. Если переданы некорректные данные возвращает строку с предупреждением.
 */
function positiveNum(num1, num2) {
	if(num1 >= 0 && num2 >= 0) {
		return num1 - num2;
	} else if(num1 <= 0 && num2 <= 0) {
		return num1 * num2;
	} else if((num1 <= 0 && num2 >= 0) || (num1 >= 0 && num2 <= 0)) {
		return num1 + num2;
	} else {
		return 'Введены некорректные данные';
	}
}
console.log('positiveNum(-1, -2) = ' + positiveNum(-1, -2));
console.log('positiveNum(1, 1) = ' + positiveNum(1, 1));
console.log('positiveNum(-5, 1) = ' + positiveNum(-5, 1));
console.log('positiveNum(5, -1) = ' + positiveNum(5, -1));
console.log('positiveNum(\'qqq\', -1) = ' + positiveNum('qqq', -1));

/*
 4 Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
 параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
 и возвращать результат.
 */

/**
 *
 * @param num1
 * @param num2
 * @returns {number}
 */
function sum(num1, num2) {
	return Number(num1 + num2);
}

/**
 *
 * @param num1
 * @param num2
 * @returns {number}
 */
let subtraction = (num1, num2) => num1 - num2;

/**
 *
 * @param num1
 * @param num2
 * @returns {number}
 */
let division = (num1, num2) => num1 / num2;

/**
 *
 * @param num1
 * @param num2
 * @returns {number}
 */
let multiply = (num1, num2) => num1 * num2;


/*
 5.Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
 где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
 переданного значения операции (использовать switch) выполнить одну из арифметических
 операций (использовать функции из задания 4) и вернуть полученное значение.
 */

function mathOperation(arg1, arg2, operation) {
	switch (operation) {
		case '+':
			return sum(arg1, arg2);
			break
		case '-':
			return subtraction(arg1, arg2);
			break
		case '/':
			return division(arg1, arg2);
			break
		case '*':
			return multiply(arg1, arg2);
			break
		default:
			return 'Введены некорректные данные!'
	}
}

console.log('+ : ' + mathOperation(1, 1, '+'));
console.log('- : ' + mathOperation(5, 2, '-'));
console.log('/ : ' + mathOperation(21, 7, '/'));
console.log('* : ' + mathOperation(5, 5, '*'));
console.log('NaN : ' + mathOperation(1, 1, 'NaN'));