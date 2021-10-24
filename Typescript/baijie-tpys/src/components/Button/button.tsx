import React from "react";
import classNames from 'classnames'

//定义按钮尺寸
export enum ButtonSize {
   Large = 'lg',
   Small = "sm"
}
//定义按钮的类型
export enum ButtonType {
    Primary = "primary",
    Default = 'default',
    Danger = 'danger',
    Link = 'link' 
}
// 按钮传值接口
interface BaseButtonProps {
    className?: string;
    disabled ?: boolean;
    size?:ButtonSize;
    btnType?:ButtonType;
    children: React.ReactNode;
    href?:string
}


// button 和  a的方法 如果一个一个写的方式传入porps那太麻烦了，他上面包含的属性太多
type NativeButtonProps =BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement> // 联合类型 button
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>// a标签
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>  //所有属性可选
// 定义组件及其 props 类型
const Button: React.FC<ButtonProps> = (props) =>{
    const {
        className,
        btnType,
        disabled,
        size,
        children,
        href,
        ...restProps
    }=props
    // 类名定义 这里应用了classnames库来帮助我们修改库  生成的结果就类似 className="btn btn-lg btn-danger" 
    // btn ,btn-lg, btn-primary
    const classes = classNames('btn',className,{
        [`btn-${btnType}`]:  btnType,
        [`btn-${size}`]:  size,
        'disabled':(btnType===ButtonType.Link)&& disabled
    })

    // 这里需要判断一下类名
    if(btnType === ButtonType.Link && href){

        return (
            <a 
            className={classes}
            href={href}
            {...restProps}
            >{children}</a>
        )
    }else {
        return (
            <button 
            className={classes}
            disabled={disabled}
            >{children}</button>
        )
    }
}
Button.defaultProps={
    disabled:false,
    btnType:ButtonType.Default
}
export default Button