/*let user = {
	name: "Did",
	age: 33
};

user.sayHi = function () {
	alert("Hi!");
};
user.sayHi();
*/

/*
let user = {
	name: "Джон",
	age: 30,

	sayHi() {
		alert(this.name);
	}
};
user.sayHi();
*/

/*
let user = {
	name: "Джон",
	go: function () { alert(this.name) }
};
(user.go)()
*/

let ladder = {
	step: 0,
	up() {
		this.step++;
		return this;
	},
	down() {
		this.step--;
		return this;
	},
	showStep() {
		alert(this.step);
		return this;
	}
}
ladder.up().up().down().up().down().showStep();