import React from "react";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";
declare type AnimationName = "zoom-in-top" | "zoom-in-left" | "zoom-in-bottom" | "zoom-in-right";
interface TransitionProps extends CSSTransitionProps {
    animation?: AnimationName;
    wrapper?: boolean;
    classNames?: String;
    in?: boolean;
    timeout?: Number;
    unmountOnExit?: boolean;
    appear?: boolean;
}
declare const Transition: React.FC<TransitionProps>;
export default Transition;
