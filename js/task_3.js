'use strict'
//pull request
/*
 1 С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль, с помощью console.log) от 0 до 10
 включительно, чтобы результат выглядел так:
 */

/**
 * Проверяет на четность числа и возвращает строку
 * @param number передаваемое число
 * @returns {string} строка четное или нечетное число.
 */
function eventNumber(number) {
	let txt = '';
	if(number === 0) {
		txt = 'это ноль';
	} else {
		txt = number % 2 === 0 ? 'четное число' : 'нечетное число';
	}
	return txt;
}

console.log('-----------------1 задание-----------------');
for (let i = 0; i <= 10; i++) {
	console.log(`${i} - ${eventNumber(i)}`);
}
console.log('');

/*
 2 Выведите в консоль значения, указанные рядом с комментариями:
 */

console.log('-----------------2 задание-----------------');
const post = {
	author: "John", //вывести этот текст
	postId: 23,
	comments: [
		{
			userId: 10,
			userName: "Alex",
			text: "lorem ipsum",
			rating: {
				likes: 10,
				dislikes: 2 //вывести это число
			}
		},
		{
			userId: 5, //вывести это число
			userName: "Jane",
			text: "lorem ipsum 2", //вывести этот текст
			rating: {
				likes: 3,
				dislikes: 1
			}
		},
	]
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);
console.log('');

/*
 3 Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку 15%,
 можете использовать метод forEach https://mzl.la/1AOMMWX :
 */

console.log('-----------------3 задание-----------------');
const products = [
	{
		id: 3,
		price: 200,
	},
	{
		id: 4,
		price: 900,
	},
	{
		id: 1,
		price: 1000,
	},
];


let sale = 15;
const products2 = [];
products.forEach(product => products2.push({
	id: product.id,
	price: product.price,
	sale: sale
	}));


products2.forEach(product => console.log(`id: ${product.id}, price: ${product.price}, sale: ${product.sale}%`));

console.log('');

/*
 4 Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
 1 Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
 2 Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
 https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0 или в
 дополнительных видео в материалах урока.
 */
console.log('-----------------4 задание-----------------');
const productsLesson4 = [
	{
		id: 3,
		price: 127,
		photos: [
			"1.jpg",
			"2.jpg",
		]
	},
	{
		id: 5,
		price: 499,
		photos: []
	},
	{
		id: 10,
		price: 26,
		photos: [
			"3.jpg"
		]
	},
	{
		id: 8,
		price: 78,
	},
];
console.log('4 задание - filter');
const productsLesson4Result = productsLesson4.filter(function (product) {
	if(product.hasOwnProperty('photos') && product.photos.length > 0) {
		return product.photos;
}
});
console.log(productsLesson4Result);

console.log('4 задание - sort');
const productsLesson4Sort = productsLesson4.sort(function (a, b) {
	if(a.price > b.price) {
		return 1;
	}
	if(a.price < b.price) {
		return -1
	}
	return 0;
});

console.log(productsLesson4Sort);

console.log('-----------------5 задание-----------------');
for (let i = 0; i < 10; console.log(i), i++){}

console.log('-----------------6 задание-----------------');
for (let i = 0; i < 20; i++) {
	let txt = '';
	for (let j = 0; j <= i; j++) {
		txt += 'x';
	}
	console.log(txt)
}