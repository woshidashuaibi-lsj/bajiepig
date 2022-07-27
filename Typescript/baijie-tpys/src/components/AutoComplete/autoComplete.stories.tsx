import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "../Icon/icon";

import { AutoComplete, DataSourceType } from "./autoComplete";

interface LakerPlayerProps {
	value: string;
	number: number;
}

const styles: React.CSSProperties = {
	textAlign: "center",
};
// const renderOption = (item: DataSourceType<LakerPlayerProps>) => {
// 	return (
// 		<h2>
// 			Name: {item.value} numbere: {item.number}
// 		</h2>
// 	);
// };
// const SimpleComplete = () => {
// 	const lakers = [
// 		"bradley",
// 		"pope",
// 		"caruso",
// 		"cook",
// 		"cousins",
// 		"james",
// 		"AD",
// 		"green",
// 		"howard",
// 		"kuzma",
// 		"McGee",
// 		"rando",
// 	];
// 	const lakersWithNumber = [
// 		{ value: "bradley", number: 11 },
// 		{ value: "pope", number: 1 },
// 		{ value: "caruso", number: 4 },
// 		{ value: "cook", number: 2 },
// 		{ value: "cousins", number: 15 },
// 		{ value: "james", number: 23 },
// 		{ value: "AD", number: 3 },
// 		{ value: "green", number: 14 },
// 		{ value: "howard", number: 39 },
// 		{ value: "kuzma", number: 0 },
// 	];
// 	const handleFetch = (query: string) => {
// 		return lakers.filter((index) => index.includes(query));
// 	};
// 	return (
// 		<AutoComplete
// 			fetchSuggestions={handleFetch}
// 			placeholder="input with icon"
// 			onSelect={action("selected")}
// 			renderOption={renderOption}
// 		/>
// 	);
// };
const ObjectComplete = () => {
	const lakersWithNumber = [
		{ value: "bradley", number: 11 },
		{ value: "pope", number: 1 },
		{ value: "caruso", number: 4 },
		{ value: "cook", number: 2 },
		{ value: "cousins", number: 15 },
		{ value: "james", number: 23 },
		{ value: "AD", number: 3 },
		{ value: "green", number: 14 },
		{ value: "howard", number: 39 },
		{ value: "kuzma", number: 0 },
	];
	const renderOption = (item: DataSourceType<LakerPlayerProps>) => {
		return (
			<h2>
				Name: {item.value} numbere: {item.number}
			</h2>
		);
	};
	// const handleFetch = (query: string) => {
	// 	return lakersWithNumber.filter((index) => index.value.includes(query));
	// };
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
		<AutoComplete
			fetchSuggestions={handleFetch}
			placeholder="input with icon"
			onSelect={action("selected")}
			renderOption={renderOption}
		/>
	);
};
const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>;

storiesOf("AutoComplete Components", module)
	.addParameters({
		info: {
			text: `
            这是个很好的组件
            ## 支持markdown
            ~~~js
            const a ="123"
            ~~~`,
			inline: true,
		},
	})
	// .addDecorator(CenterDecorator)
	.add("AutoComplete", ObjectComplete);
