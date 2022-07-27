let Direction;
(function (Direction) {
	Direction[(Direction["Up"] = 10)] = "Up";
	Direction[(Direction["Down"] = 11)] = "Down";
	Direction[(Direction["Left"] = 12)] = "Left";
	Direction[(Direction["Right"] = 13)] = "Right";
})(Direction || (Direction = {})); // 不会别改变的值常量值
// 自动梯增
