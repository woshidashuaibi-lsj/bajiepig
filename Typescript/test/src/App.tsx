import React from "react";
import { Button, Input, Menu, Icon, AutoComplete, Upload } from "baijie-tpys";
import logo from "./logo.svg";
import "./App.css";

function App() {
	const handleFetch = (query: string) => {
		return fetch(`https://api.github.com/search/users?q=${query}`)
			.then((res) => res.json())
			.then(({ items }) => {
				console.log(items);
				return items
					?.slice(0, 10)
					.map((item: any) => ({ value: item.login, ...item }));
			});
	};
	return (
		<div className="App">
			<Button btnType="primary">Primary</Button>
			<Input
				style={{ width: "300px" }}
				placeholder="input with icon"
				icon="search"
			/>
			<Icon icon="check-circle" theme="primary" size="8x"></Icon>
			{/* <AutoComplete fetchSuggestions={handleFetch}></AutoComplete> */}
			{/* <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
				<Button size="lg">upload</Button>
			</Upload> */}

			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
