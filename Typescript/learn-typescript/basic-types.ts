// 基础类型
const isDone: boolean = false;

const age: number = 123;

const binaryNumber: number = 0b1111; // 二进制

const firstName: string = "lsj";
firstName.//获取string的方法提示

const message: string = `hello,${firstName},age is ${age}`;

const u: undefined = undefined;
const n: null = null;

const num: number = undefined;


// any不确定变量类型的时候

let notSure: any = 4;
notSure = "maybe it is a string";
notSure = true;
notSure.myname;
notSure.getName();

let numberOrString: number | string =234
numberOrString= 'abc'



