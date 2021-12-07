import React, { useContext} from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";

export interface SubMenuProps { 
    index: number;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

const SubMenu: React.FC<SubMenuProps> = (props) => { 
    return (
        // <li className={classes} style={style} onClick={handleClick}>{children}</li>
        <div>123</div>
    )
}


export default SubMenu