import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "../Icon/icon";

import Input from "./input";

const styles: React.CSSProperties = {
	textAlign: "center",
};
const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>;
const defaultInput = () => (
	<Input
		style={{ width: "300px" }}
		placeholder="input with icon"
		icon="search"
	/>
);
const ControlledInput = () => {
	const [value, setValue] = useState("");
	return (
		<Input
			style={{ width: "300px" }}
			// placeholder="这是小尺寸的input框"
			value={value}
			size="sm"
			onChange={(e) => {
				setValue(e.target.value);
			}}
		></Input>
	);
};
const InputnWithSize = () => (
	<>
		<ControlledInput></ControlledInput>
		<Input
			style={{ width: "300px" }}
			// value="这是大尺寸的input框"
			placeholder="这是大尺寸的input框
        "
			size="lg"
		></Input>
		<Input
			style={{ width: "300px" }}
			placeholder="这是小尺寸的input框"
			// value="这是小尺寸的input框"
			size="sm"
		></Input>
		<Input
			style={{ width: "300px" }}
			placeholder="这是禁止输入的input框"
			// value="这是禁止输入的input框"
			disabled
		></Input>
		<Input
			style={{ width: "300px" }}
			placeholder="这是带图标的input框"
			// value="这是带图标的input框"
			icon="search"
		></Input>
		<Input
			style={{ width: "300px" }}
			placeholder="这是带前缀的input框"
			// value="这是带前缀的input框"
			prepend="http://"
		></Input>
		<Input
			style={{ width: "300px" }}
			placeholder="这是带后缀的input框"
			// value="这是带后缀的input框"
			append="@qq.com"
		></Input>
	</>
);
storiesOf("Input Components", module)
	.addParameters({
		info: {
			text: `
            这是个很好的组件
            ## 支持markdown
            ~~~js
            const a ="123"
            ~~~`,
			inline: true,
		},
	})
	// .addDecorator(CenterDecorator)
	.add("input", defaultInput)
	.add("Input-size-type", InputnWithSize);
