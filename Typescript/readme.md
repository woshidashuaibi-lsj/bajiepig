编程语言的类型

1. 动态类型语言（Dynamically Typed language） js rube 变量数据类型可以多变 (代码运行的时候才知道代码有没有错：eslint 来解决)

2. 静态类型语言（Statically Typed Language）数据类型检查发生在编译阶段，需要声明变量的数据类型

TS

1. js that scales
2. 静态类型风格的类型系统
3. 从 es6 到 es10 甚至是 esnext 的语法支持
4. 兼容各种浏览器，各种系统，各种服务器，完全开源

为什么用 Typescript
解决的问题：
函数或者方法输入输出的参数类型，外部条件等
动态语言的约束：需要手动调试等过程

其他优点：
在不同的代码快和定义中进行跳转
代码自动补全
丰富的接口提示
编译期间能发现大部分的错误
杜绝一些比较常见的错误（变量名称打错，数字 0 当成 boolen 值判断）
完全兼容 js

一点小缺点

1.  增加了一些学习成本
2.  短期内增加了一些开发成本（需要给变量写类型）

全局安装 TS npm install -g typescript (课程@3.7.2)

运行 TS 文件
tsc xxx.ts ==> 生成一个 xxx.js 文件

js 8 种数据类型
number boolean string undefind null bigint symbol
和 object

(其中 underfind 是所有类型中的子类型)

undefined 和 null 的区别
undefined 和 null 在 if 语句中，都会被自动转为 false，相等运算符甚至直接报告两者相等。

```js
if (!undefined) console.log("undefined is false");
// undefined is false
if (!null) console.log("null is false");
// null is false
undefined == null;
// true
```

诞生的历史原因
最开始 js 是只有 null ,表示一个‘无’，被当成一个对象，但是作者认为最好不要把无表示为一个对象，然后 js 最开始没有错误处理机制，发生数据类型不匹配时，会自动转换类型或者默默失败，如果 null 转换为 0 不容易被发现，于是又创造了 undefind,
最初区分他们：null 转换为数值时 0 undefind 转换为数值时 NaN
当前两者的表示：
undefind 表示没有当前存在这个值但是还没有给这个值赋值（应该有值还没有定义）
（1）变量被声明但是还没有赋值
（2) 调用函数时，应该提供的参数没有提供，该参数等于 undefined
（3）对象没有赋值的属性，该属性的值为 undefined
（4）函数没有返回值时，默认返回 undefined

null 表示当前这个值就不应该存在
（1） 作为函数的参数，表示该函数的参数不是对象。
（2） 作为对象原型链的终点。

安装 storybook npx -p @storybook/cli sb init
