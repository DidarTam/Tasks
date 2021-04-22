/*let i = 3;

while (i) {
	alert(i--);
}
*/  // 3, 2, 1


//for (let i = 0; i < 5; i++) alert(i); // 0-4
//for (let i = 0; i < 5; ++i) alert( i ); // 0-4


/*for (let i = 2; i <= 10; i++) {
	if (i % 2 == 0) {
		alert(i);
	}
}
*/ // результат 2,4,6,8,10

/*let i = 0;
while (i < 3) {
	alert(`number ${i}!`);
	i++;
} 
*/ // number 0, 1, 2

/*let num;
do {
  num = prompt("Введите число, большее 100?", 0);
} while (num <= 100 && num);
*/

let n = 10;
nextPrime:
for (let i = 2; i <= n; i++){
	for (let j = 2; j < i; j++) { 
		if (i % j == 0) continue nextPrime; 
	}
	alert(i);
}