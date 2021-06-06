'use strict'
/*
 1.1
 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
 видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name
 и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод
 make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод
 make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный
 объект-прототип (как объект transport в уроке).
 */

/*        es5        */
function ProductES5(name) {
	this.name = name;
}

ProductES5.prototype.make25PercentDiscount = function (){
	this.name = this.name - (this.name / 100 * 25);
};

let productES5 = new ProductES5(200);
productES5.make25PercentDiscount();
console.log(productES5);


/*        es6        */
class ProductES6 {
	constructor(name) {
		this.name = name;
	}

	make25PercentDiscount() {
		this.name = this.name - (this.name / 100 * 25);
	}
}

let productES6 = new ProductES6(200);
productES6.make25PercentDiscount();
console.log(productES6);

/*
 1.2
 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
 видео -> 3 примеры наследования -> механика наследования),
 а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
 типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
 б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
 помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
 свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
 Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
 highlighted значение true.
 */

/*---------------ES5---------------*/
function PostES5 (author, text, date) {
	this.author = author;
	this.text = text;
	this.date = date;
}

PostES5.prototype.edit = function (text) {
	this.text = text;
}

function AttachedPostES5 (author, text, date) {
	PostES5.call(this, author, text, date);
	this.highlighted = false;
}

AttachedPostES5.prototype.makeTextHighlighted = function () {
	this.highlighted = true;
}

AttachedPostES5.prototype = Object.create(PostES5.prototype);
AttachedPostES5.prototype.constructor = AttachedPostES5;

/*---------------ES6---------------*/
class PostES6 {
	constructor(author, text, date) {
		this.author = author;
		this.text = text;
		this.date = date;
	}

	edit(text) {
		this.text = text;
	}
}

class AttachedPostES6 extends PostES6{
	constructor(author, text, date) {
		super(author, text, date);
		this.highlighted = false;
	}

	makeTextHighlighted() {
		this.highlighted = true;
	}
}