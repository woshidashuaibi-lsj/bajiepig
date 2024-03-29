import React, { useContext, useState, FunctionComponentElement } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { MenuItemProps } from "./menuItem";
import Icon from "../Icon/icon";
import Transition from "../Transition/transition";

export interface SubMenuProps {
	index?: string;
	title: string;
	className?: string;
}

const SubMenu: React.FC<SubMenuProps> = ({
	index,
	title,
	children,
	className,
}) => {
	const context = useContext(MenuContext);
	const openedSubMenus = context.defaultOpenSubMenus as Array<string>;
	const isOpend =
		index && context.mode === "vertical"
			? openedSubMenus.includes(index)
			: false;

	const [menuOpen, setOpen] = useState(isOpend);

	const classes = classNames("menu-item submenu-item", className, {
		"is-active": context.index === index,
		"is-opened": menuOpen,
		"is-vertical": (context.mode = "vertical"),
	});
	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		setOpen(!menuOpen);
	};
	let timer: any;
	const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
		clearTimeout(timer);
		e.preventDefault();
		timer = setTimeout(() => {
			setOpen(toggle);
		}, 300);
	};
	const clickEvents =
		context.mode === "vertical"
			? {
					onClick: handleClick,
			  }
			: {};
	const hoverEvents =
		context.mode !== "vertical"
			? {
					onMouseEnter: (e: React.MouseEvent) => {
						handleMouse(e, true);
					},
					onMouseLeave: (e: React.MouseEvent) => {
						handleMouse(e, false);
					},
			  }
			: {};
	const renderChildren = () => {
		const subMenuClasses = classNames("viking-submenu", {
			"menu-opened": menuOpen,
		});

		const childrenComponent = React.Children.map(children, (child, i) => {
			const childElement =
				child as FunctionComponentElement<MenuItemProps>;

			if (childElement.type.displayName === "MenuItem") {
				return React.cloneElement(childElement, {
					index: `${index}-${i}`,
				});
			} else {
				console.error(
					"error: submenu has a child which is not a menuItem component"
				);
			}
		});
		return (
			<Transition animation="zoom-in-left" in={menuOpen} timeout={300}>
				<ul className={subMenuClasses}>{childrenComponent}</ul>
			</Transition>
		);
	};
	return (
		<li
			key={index}
			className={classes}
			onClick={handleClick}
			{...hoverEvents}
		>
			<div className="submenu-title" {...clickEvents}>
				{title}
				<Icon icon="angle-down" className="arrow-icon"></Icon>
			</div>
			{renderChildren()}
		</li>
	);
};
SubMenu.displayName = "SubMenu";

export default SubMenu;
