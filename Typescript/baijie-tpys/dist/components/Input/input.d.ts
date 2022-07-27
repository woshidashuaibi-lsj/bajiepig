import { FC, InputHTMLAttributes, ReactElement, ChangeEvent } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
declare type InputSize = "lg" | "sm";
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
    /**设置 Inputn 的禁用 */
    disabled?: boolean;
    /**设置 Input 的尺寸 */
    size?: InputSize;
    icon?: IconProp;
    prepend?: string | ReactElement;
    append?: string | ReactElement;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export declare const Input: FC<InputProps>;
export default Input;
