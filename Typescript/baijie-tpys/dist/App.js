import React, { useState } from "react";
// import './App.css';
import Button from "./components/Button/button";
import Menu from "./components/Menu/menu";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee, fas } from "@fortawesome/free-solid-svg-icons";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import SortableComponent from "./components/Drag/dragSortable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "./components/Icon/icon";
import Transition from "./components/Transition/transition";
import Input from "./components/Input/input";
library.add(fas);
function App() {
    var _a = useState(true), show = _a[0], setShow = _a[1];
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement(Input, { style: { width: "300px" }, placeholder: "input with icon", icon: "search" }),
            React.createElement(SortableComponent, null),
            React.createElement(Button, { disabled: true }, "hello"),
            React.createElement(Button, { autoFocus: true, size: "lg" }, "Large"),
            React.createElement(Icon, { icon: "coffee", theme: "primary", size: "10x" }),
            React.createElement(Icon, { icon: "arrow-down", theme: "danger", size: "10x" }),
            React.createElement(Input, { value: "这是个input" }),
            React.createElement(Button, { className: "custom", onClick: function () {
                    console.log(123);
                }, size: "sm" }, "Small"),
            React.createElement(Button, { target: "_blank", btnType: "danger", href: "http://www.baidu.com" }, "baidu link"),
            React.createElement(Button, { btnType: "default" }, "Danger"),
            React.createElement(Button, { btnType: "link" }, "Danger"),
            React.createElement(Button, { btnType: "primary" }, "Primary"),
            React.createElement(FontAwesomeIcon, { icon: faCoffee, size: "lg" }),
            React.createElement(Menu, { defaultIndex: "0", mode: "vertical", onSelect: function (index) {
                    alert(index);
                }, defaultOpenSubMenus: ["2"] },
                React.createElement(MenuItem, null, "cool link 0ZZZ"),
                React.createElement(MenuItem, { disabled: true }, "cool link 1ZZZ"),
                React.createElement(SubMenu, { title: "dropdow" },
                    React.createElement(MenuItem, null, "dropdow1"),
                    React.createElement(MenuItem, null, "dropdow2"),
                    React.createElement(MenuItem, null, "dropdow3")),
                React.createElement(MenuItem, null, "cool link 2ZZ")),
            React.createElement(Menu, { defaultIndex: "0", onSelect: function (index) {
                    alert(index);
                } },
                React.createElement(MenuItem, null, "cool link 0"),
                React.createElement(MenuItem, { disabled: true }, "cool link 1"),
                React.createElement(SubMenu, { title: "dropdow" },
                    React.createElement(MenuItem, null, "dropdow1"),
                    React.createElement(MenuItem, null, "dropdow2"),
                    React.createElement(MenuItem, null, "dropdow3")),
                React.createElement(MenuItem, null, "cool link 2")),
            React.createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"),
            React.createElement(Button, { onClick: function () {
                    setShow(!show);
                }, size: "sm" }, "toggle"),
            React.createElement(Transition, { in: show, timeout: 300, animation: "zoom-in-left" },
                React.createElement("div", null,
                    React.createElement("p", null, "\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8"),
                    React.createElement("p", null, "\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8"),
                    React.createElement("p", null, "\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8"),
                    React.createElement("p", null, "\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8"),
                    React.createElement("p", null, "\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8"),
                    React.createElement("p", null, "\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8"),
                    React.createElement("p", null, "\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8"),
                    React.createElement("p", null, "\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8"),
                    React.createElement("p", null, "\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8"),
                    React.createElement("p", null, "\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8"),
                    React.createElement("p", null, "\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8"),
                    React.createElement("p", null, "\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8"),
                    React.createElement("p", null, "\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8"),
                    React.createElement("p", null, "\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8"))))));
}
export default App;
