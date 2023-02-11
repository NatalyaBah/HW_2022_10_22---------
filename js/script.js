// Задание 1
// Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, 
// необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
// 1. Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// 2. Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо 
// увеличивать количество в существующей покупке, а не добавлять новую.
// 3. Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

//Создание массива
let arrayList = [
	{
		name: "milk",
		amount: 3,
		buy: false
	},
	{
		name: "bread",
		amount: 1,
		buy: true
	},
	{
		name: "aggs",
		amount: 2,
		buy: false
	},
	{
		name: "pork",
		amount: 1,
		buy: true
	}
]

// Сортировка - сначала не купленные, затем купленные
function showAndSortArray(a, b) {
	return a.buy - b.buy;
}

//Добавление покупки в список
let addList = (name = '', amount = 0, arr = []) => {
	let res = [...arr];
	if (res.find(item => item.name === name)) {
		 for (let i = 0; i < res.length; i++) 
			  if (name === res[i].name) {
					res[i].amount += amount;
			  }
	} else {
		 res.push({
					name,
					amount,
					buy: false,
		 }) 
	}
	return res;
}

let newList = [...arrayList];
console.log(addList("pease", 5, newList));

//покупка продукта
let addBuyingProduct = (arr = [], name = '') => {
	let res = [...arr];
	for (let i = 0; i < res.length; i++) {
		 if (name === res[i].name) {
			  res[i].isBought = true;
		 }
	}
	return res;
}
console.log(addBuyingProduct(arrayList, 'milk'));
const addPurchasedProduct = (arr = [], name = '') => {
	let res = [...arr];

	res.forEach(product => {
		 if (name === product.name) {
			  product.isBought = true;
		 }        
	});
	return res;
}
console.log(addBuyingProduct(arrayList, 'milk'));

// Задание 2
// Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции.
// 1. Распечатка чека на экран.
// 2. Подсчет общей суммы покупки.
// 3. Получение самой дорогой покупки в чеке.
// 4. Подсчет средней стоимости одного товара в чеке.

const receipt = [
	{
		 name: 'bread',
		 count: 2,
		 price: 8,
	},
	{
		 name: 'butter',
		 count: 1,
		 price: 30,
	},
	{
		 name: 'milk',
		 count: 3,
		 price: 23,
	},
	{
		 name: 'egg',
		 count: 6,
		 price: 2,
	},
	{
		 name: 'tomato',
		 count: 8,
		 price: 26,
	},
	{
		 name: 'sauce',
		 count: 1,
		 price: 18,
	},
];

// Распечатка чека на экран; Подсчет общей суммы покупки;
const showReceipt = (arr = []) => {
	let res = [...arr];

	res.forEach(product => {
	let sum = product.count * product.price;
	console.log(`${product.count} x ${product.price}\n ${product.name}.....Sum: ${sum}`);
	
	});

	let total = res.map((product) => product.count * product.price )  
						 .reduce((sum, current) => sum + current, 0);

	console.log(`Total: ${total}`);

	return res;
}

showReceipt(receipt); 

// Получение самой дорогой покупки в чеке;
const mostExpensivePurchase = (arr = []) => {
	let res = [...arr];
	let maxCost = 0;
	for (const product of res) {
		 let cost = product.price * product.count
		 if ( cost > maxCost) {
			  maxCost = cost;
		 }
	}
	return maxCost;
}

console.log(mostExpensivePurchase(receipt));


// Подсчет средней стоимости одного товара в чеке.
const averageCost = (arr = []) => {
	
	let res = [...arr];
	let sum = 0;

	for (const product of res) {
		 sum += product.price * product.count;
	}

	return (sum / res.length).toFixed(2);
}

console.log(averageCost(receipt));

// Задание 3
// Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий 
//из двух свойств: название стиля и значение стиля.
// Написать функцию, которая принимает массив стилей и
// текст, и выводит этот текст с помощью document.write() в тегах
// <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

const classRoom = [
	{ 
		 name: "105", 
		 places: "24", 
		 faculty: "Software" 
	},
	{ 
		 name: "112", 
		 places: "12", 
		 faculty: "Cybernetics" 
	},
	{ 
		 name: "113", 
		 places: "20", 
		 faculty: "Techical Cybernetics" 
	},
	{ 
		 name: "118", 
		 places: "14", 
		 faculty: "Engineering" 
	},
	{ 
		 name: "117", 
		 places: "25", 
		 faculty: "Economic cybernetics" 
	},
	{ 
		 name: "115", 
		 places: "20", 
		 faculty: "Software" 
	},
	{ 
		 name: "100", 
		 places: "15", 
		 faculty: "Languages" 
	},
	{ 
		 name: "110", 
		 places: "10", 
		 faculty: "Techical Cybernetics" 
	},
	{ 
		 name: "120", 
		 places: "28", 
		 faculty: "Software" },
];

const group = {
	name: "SW-2019",
	count: "25",
	faculty: "Software",
	};

// Вывод на экран всех аудиторий;

const showClassRoom = (arr = []) => {
	let classRooms = [];
	for (let i of arr) {
		 classRooms.push(i.name);
	}
	return `All rooms: ${classRooms.join('; ')}.`;
}

console.log(showClassRoom(classRoom));

// 3.2 Вывод на экран аудиторий для указанного факультета;

const showFacultyRooms = (arr = [], faculty = '') => {
	let facultyRooms = [];

	for (const i of arr) {
		 if (i.faculty.toLowerCase() === faculty.toLowerCase()) {
			  facultyRooms.push(i.name);
		 }
	}
	return `All rooms for "${faculty}" faculty: ${facultyRooms.join('; ')}.`;
}

console.log(showFacultyRooms(classRoom, 'Software')); 

const showGroupRooms = (arr = [], group = {}) => {
	let groupRooms = [];

	for (const i of arr) {
		 if (i.places >= group.count) {
			  groupRooms.push(i.name);
		 }
	}
	return `All rooms for "${group.name}": ${groupRooms.join('; ')}`;  
}

console.log(showGroupRooms(classRoom, group)); 

// Функция сортировки аудиторий по количеству мест;
const arrSortPlace = (arr = []) => {
	let arr1 = [...arr];
	arr1.sort((a, b) => a.places - b.places);
	return arr1;
};

// Функция сортировки аудиторий по названию (по алфавиту).
const arrSortName = (arr = []) => {
	let arr2 = [...arr];
	arr2.sort( (a, b) => a.name - b.name );
	return arr2;
};
							
console.log(arrSortName(classRoom));    
console.log(arrSortPlace(classRoom));   

// Задание 4
// Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и
// названия факультета, для которого она предназначена. Написать несколько функций для работы с ним.
// 1. Вывод на экран всех аудиторий.
// 2. Вывод на экран аудиторий для указанного факультета.
// 3. Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия,
// количества студентов и названия факультета.
// 4. Функция сортировки аудиторий по количеству мест.
// 5. Функция сортировки аудиторий по названию (по алфавиту).

const styles = [
	{ 
		 name: "text-align", 
		 value: "center" 
	},
	{
		 name: "text-transform", 
		 value: "capitalize" 
	},
	{ 
		 name: "text-overflow", 
		 value: "ellipsis" 
	},
	{ 
		 name: "font-size", 
		 value: "1rem" 
	},
	{ 
		 name: "color", 
		 value: "#555555" 
	},
	{ 
		 name: "letter-spacing", 
		 value: "2px" 
	},
	{ 
		 name: "font-weight", 
		 value: "300" 
	},
	{ 
		 name: "border", 
		 value: "1px solid red" 
	},
	{ 
		 name: "font-style", 
		 value: "oblique" 
	},
	{ 
		 name: "font-stretch", 
		 value: "extra-expanded" 
	}
];
 
 const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
	Reprehenderit, rem sit eaque temporibus sint explicabo. 
	Quod placeat quos inventore quas magni architecto, cupiditate assumenda enim, 
	eum exercitationem ex sunt iste?`;
 
	let styleText = (arr = [], text = '') => {
		 document.write('<p style = "');

		 for (let i of arr) {
			  document.write(`${i.name}: ${i.value}; `);
		 }

		 document.write('">' + text + "</p>");
	};
 
styleText(styles, text);