import React from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";

type AnimationName =
	| "zoom-in-top"
	| "zoom-in-left"
	| "zoom-in-bottom"
	| "zoom-in-right";

interface TransitionProps extends CSSTransitionProps {
	animation?: AnimationName;
	wrapper?: boolean;
	classNames?: String;
	in?: boolean;
	timeout?: Number;
	unmountOnExit?: boolean;
	appear?: boolean;
}

const Transition: React.FC<TransitionProps> = (props) => {
	const { children, classNames, animation, wrapper, ...restProps } = props;
	console.log(props);

	return (
		<CSSTransition
			classNames={classNames ? classNames : animation}
			{...restProps}
		>
			{wrapper ? <div>{children}</div> : children}
		</CSSTransition>
	);
};
Transition.defaultProps = {
	unmountOnExit: true,
	appear: true,
};

export default Transition;
