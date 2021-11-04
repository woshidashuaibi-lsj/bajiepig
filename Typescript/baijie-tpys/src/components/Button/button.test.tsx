import React from "react";
import { render } from '@testing-library/react'
import Button from "./button";

test("我的第一个测试用例", () => { 
    const wrapper = render(<Button>Nice</Button>)
    const element = wrapper.queryByText("Nice")
    expect(element).toBeTruthy()
})