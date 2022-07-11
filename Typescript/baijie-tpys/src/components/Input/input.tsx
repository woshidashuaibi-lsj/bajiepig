import React, {
	FC,
	InputHTMLAttributes,
	ReactElement,
	ChangeEvent,
} from "react";
import classNames from "classnames";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Icon from "../Icon/icon";

type InputSize = "lg" | "sm";

export interface InputProps
	extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
	/**设置 Inputn 的禁用 */
	disabled?: boolean;
	/**设置 Input 的尺寸 */
	size?: InputSize;
	icon?: IconProp;
	prepend?: string | ReactElement;
	append?: string | ReactElement;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = (props) => {
	// 	取出各种属性
	const { disabled, size, icon, prepend, append, style, ...restProps } =
		props;

	//根据属性计算不同的ClassName
	const cnames = classNames("viking-input-wrapper", {
		[`input-size-${size}`]: size,
		"is-disabled": disabled,
		"input-group": prepend || append,
		"input-group-append": !!append,
		"input-group-prepend": !!prepend,
	});
	const fixControlledValue = (value: any) => {
		if (typeof value === "undefined" || value === null) {
			return "";
		}
		return value;
	};
	if ("value" in props) {
		delete restProps.defaultValue;
		restProps.value = fixControlledValue(props.value);
	}

	//根据属性判断是否要添加特定的节点
	return (
		<div className={cnames} style={style}>
			{prepend && (
				<div className="viking-input-group-prepend">{prepend}</div>
			)}
			{icon && (
				<div className="icon-wrapper">
					<Icon icon={icon} title={`title-${icon}`} />
				</div>
			)}
			<input
				className="viking-input-inner"
				disabled={disabled}
				{...restProps}
			/>
			{append && (
				<div className="viking-input-group-append">{append}</div>
			)}
		</div>
	);
};

// Input.defaultProps = {
// 	disabled: false,
// };

export default Input;
