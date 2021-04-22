/*
let range = {
	from: 1,
	to: 5
};
range[Symbol.iterator] = function () {

	return {
		current: this.from,
		last: this.to,

		next() {
			if (this.current <= this.last) {
				return { done: false, value: this.current++ };
			} else {
				return { done: true };
			}
		}
	};
};

for (let num of range) {
	alert(num);
}
*/

/*
let str = "Hello";
let iterator = str[Symbol.iterator]();
while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value);
}
*/

function slice(str, start, end) {
	return Array.from(str).slice(start, end).join('');
}
let str = '𝒳😂𩷶';
alert(slice(str, 1, 3)); // 😂𩷶
alert(str.slice(1, 3))