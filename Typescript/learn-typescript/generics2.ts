class Queue<T> {
	private data = [];
	push(item: T) {
		return this.data.push(item);
	}
	pop(): T {
		return this.data.pop();
	}
}

const queue = new Queue<number>();
queue.push(1);
// queue.push("str");
console.log(queue.pop().toFixed());
// console.log(queue.pop().toFixed()); // string没有toFixed方法

const queue2 = new Queue<string>();
queue2.push("123");
console.log(queue2.pop().length);

interface KeyPair<T, U> {
	key: T;
	value: U;
}

const kp1: KeyPair<number, string> = { key: 123, value: "str" };
const kp2: KeyPair<string, number> = { key: "test", value: 123 };

const arr: number[] = [1, 2, 3];
const arrTwo: Array<number> = [1, 2, 3];

interface IPlus<T> {
	(a: T, b: T): T;
}

function plus(a: number, b: number): number {
	return a + b;
}
function connect(a: string, b: string): string {
	return a + b;
}

const a: IPlus<number> = plus;
const b: TPlus<string> = connect;
