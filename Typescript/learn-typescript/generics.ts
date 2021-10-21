function echo<T>(arg: T): T {
	return arg;
}
// const str: string = string
const result: number = echo("str");

function swap<T, U>(tuple: [T, U]): [U, T] {
	return [tuple[1], tuple[0]];
}
const result2 = swap(["string", 123]);
// 泛行是指在定义函数接口或者类的时候，我们故意不先指定类型，而是在使用的时候在指定类型的一种特征

function echoWithArr<T>(arg: T[]): T[] {
	//约束泛型
	console.log(arg.length);
	return arg;
}
const arrs = echoWithArr([1, 2, 3]);

interface IWithLength {
	length: number;
}

function echowithLength<T extends IWithLength>(arg: T): T {
	console.log(arg.length);
	return arg;
}
const str = echowithLength("str");
const obj = echowithLength({ length: 10 });
const arr1 = echowithLength([1, 2, 3]);
