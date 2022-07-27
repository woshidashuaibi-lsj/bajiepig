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


// 数组
const arrOfNumbers: number[] = [1, 2, 3, 4] // 数组元素只能为number
arrOfNumbers.push(5)
function test() {
 // 定义了一个方法就会生成一个类数组（没有数组的方法例如L：forEach等，并且不能给他直接赋值数组）
    arguments.length
}


//元组（和数组类似）
let user: [string, number] = ['lsj', 23]
// user =['lsj',2,true]//会报错



// interface 接口  （定义对象类型）
// 对对象的形状（shape）进行描述
// 对类（class）进行抽象
// Duck Typing (鸭子类型)
interface Person {
    readonly id: number,
    name: string;
    age?: number   //加问号可选属性
}
let lsj: Person = {
    id:1234,
    name: 'lsj',

}
// lsj.id =1111  报错不能再次赋值


// 函数声明
function add(x: number, y: number, z: number=10): number {//添加默认参数的话中就会变为可选参数
    if (typeof z === "number") {
        return x + y + z
    } else {
        return x+y
    }
}
 let result = add(2,3)


 // 函数表达式
const add1 =(x: number, y: number, z: number = 10): number {//添加默认参数的话中就会变为可选参数
    if (typeof z === "number") {
        return x + y + z
    } else {
        return x+y
    }
}
let result1 = add(2, 3)
 
const add2: (x: number, y: number, z?: number) => number = add //类型推断

let str = 'str'
str = 123 //这路推断出str是string 所以会报错


// 类class 
// 类：定义了一切事物的抽象特点
// 对象（object）:类的实例
// 面向对象（OOP）三大特性： 封装，继承，多态
class Animal {
    name: string;
    constructor(name: string) {
        this.name =name
    }
    run() {
        return `${this.name} is running`
    }
}

const snake = new Animal('lily')

//继承
class Dog extends Animal {
    bark() {
        return `${this.name} is barking`
    }
}

const xiaobao = new Dog('xiaobao')


class Cat extends Animal {
    constructor(name) {
        super(name)
    }
    run() {
        return 'miao,'+ super.run()
    }
}

const LLL = new Cat('lsj')



// 修饰符（帮助我们对数据进行权限管理） public(公有的) private（私有的）protected(只有继承的子类能够访问)    readonly 只读的不能赋值   静态属性 static






