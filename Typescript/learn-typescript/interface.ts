interface Person {
	readonly id: number;
	name: string;
	age?: number;
}
let bajie: Person = {
	id: 1234,
	name: "bajie",
};

// 对类的方法进行抽象
interface Radio {
	switchRadio(trigger: boolean): void; //定义方法 void 什么都不返回
}
interface Battery {
	checkRadio();
}
interface radioWithBattery extends Radio {
	switchRadio();
}

class Car implements Radio {
	switchRadio() {}
}
class Cellphone implements Radio, Battery {
	switchRadio() {}
	checkRadio() {}
}
