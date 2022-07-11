import React, { useState } from "react";
// import './App.css';
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
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
	const [show, setShow] = useState(true);
	return (
		<div className="App">
			<header className="App-header">
				<Input
					style={{ width: "300px" }}
					placeholder="input with icon"
					icon="search"
				/>
				<SortableComponent></SortableComponent>
				<Button disabled>hello</Button>
				<Button autoFocus size={ButtonSize.Large}>
					Large
				</Button>
				<Icon icon="coffee" theme="primary" size="10x"></Icon>
				<Icon icon="arrow-down" theme="danger" size="10x"></Icon>
				<Input value={"这是个input"} />
				<Button
					className="custom"
					onClick={() => {
						console.log(123);
					}}
					size={ButtonSize.Small}
				>
					Small
				</Button>
				<Button
					target="_blank"
					btnType={ButtonType.Link}
					href="http://www.baidu.com"
				>
					baidu link
				</Button>
				<Button btnType={ButtonType.Danger}>Danger</Button>
				<Button btnType={ButtonType.Default}>Danger</Button>
				<Button btnType={ButtonType.Primary}>Primary</Button>
				<FontAwesomeIcon icon={faCoffee} size="lg"></FontAwesomeIcon>
				<Menu
					defaultIndex={"0"}
					mode="vertical"
					onSelect={(index) => {
						alert(index);
					}}
					defaultOpenSubMenus={["2"]}
				>
					<MenuItem>cool link 0ZZZ</MenuItem>
					<MenuItem disabled>cool link 1ZZZ</MenuItem>
					<SubMenu title="dropdow">
						<MenuItem>dropdow1</MenuItem>
						<MenuItem>dropdow2</MenuItem>
						<MenuItem>dropdow3</MenuItem>
					</SubMenu>
					<MenuItem>cool link 2ZZ</MenuItem>
				</Menu>

				<Menu
					defaultIndex={"0"}
					onSelect={(index) => {
						alert(index);
					}}
				>
					<MenuItem>cool link 0</MenuItem>
					<MenuItem disabled>cool link 1</MenuItem>
					<SubMenu title="dropdow">
						<MenuItem>dropdow1</MenuItem>
						<MenuItem>dropdow2</MenuItem>
						<MenuItem>dropdow3</MenuItem>
					</SubMenu>
					<MenuItem>cool link 2</MenuItem>
				</Menu>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<Button
					onClick={() => {
						setShow(!show);
					}}
					size={ButtonSize.Small}
				>
					toggle
				</Button>
				<Transition in={show} timeout={300} animation="zoom-in-left">
					<div>
						<p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
						<p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
						<p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
						<p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
						<p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
						<p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
						<p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
						<p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
						<p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
						<p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
						<p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
						<p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
						<p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
						<p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
					</div>
				</Transition>
			</header>
		</div>
	);
}

export default App;
