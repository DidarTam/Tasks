if ("0") {
	alert('Hi');
}

//
let value = prompt('Введите число', 0);

if (value > 0) {
	alert(1);
} else if (value < 0) {
	alert(-1);
} else {
	alert(0);
}

//
result = (a + b < 4) ? 'Мало' : 'Много';

//
let message = (login == 'Сотрудник') ? 'Привет' :
	(login == 'Директор') ? 'Здравствуйте' :
	(login == '') ? 'Нет логина' :
	'';

//Сравнение
5 > 4 → true
"ананас" > "яблоко" → false 
"2" > "12" → true
undefined == null →  true
undefined  === null → false 
null == "\n0\n" →  false
null === +"\n0\n" →  false