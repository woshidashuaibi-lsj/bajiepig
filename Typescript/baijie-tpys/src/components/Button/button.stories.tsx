import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

import Button, { ButtonType, ButtonSize } from "./button";

const styles: React.CSSProperties = {
	textAlign: "center",
};
const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>;
const defaultButton = () => (
	<Button onClick={action("clicked")}>default button</Button>
);
const buttonWithSize = () => (
	<>
		<Button size={ButtonSize.Large}>Large button</Button>
		<Button size={ButtonSize.Small}>Small button</Button>
		<Button btnType={ButtonType.Danger}>Danger button</Button>
		<Button btnType={ButtonType.Default}>Default button</Button>
		<Button btnType={ButtonType.Primary}>Primary button</Button>
		<Button btnType={ButtonType.Link} href="https://google.com">
			Link button
		</Button>
	</>
);
storiesOf("Button Components", module)
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
	.add("默认 Button", defaultButton)
	.add("Button-size-type", buttonWithSize);
