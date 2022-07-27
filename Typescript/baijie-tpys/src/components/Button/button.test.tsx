import React from "react";
import { render } from "@testing-library/react";
import Button from "./button";
const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
	// x,X,y,Y x不能小于0不能大于X ,y不能小于0 不能大于Y落地
	// 通过指令操作以后x不能小于0 不能大于X,y不能小于0 不能大于X
	expect(sum(1, 2, 1, 2)).toBe(1);
});

// test("我的第一个测试用例", () => {
//     const wrapper = render(<Button>Nice</Button>)
//     const element = wrapper.queryByText("Nice")
//     expect(element).toBeTruthy()

// })
