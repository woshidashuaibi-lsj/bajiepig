import React, { Component } from "react";
import {
	SortableContainer,
	SortableElement,
	sortableHandle,
	arrayMove,
} from "react-sortable-hoc";

const DragHandle = sortableHandle(() => (
	<span
		style={{
			cursor: "grab",
			color: "#999",
			backgroundColor: "black",
			width: "20px",
			height: "20px",
			position: "absolute",
			marginLeft: "50px",
		}}
	></span>
));
const SortableItem = SortableElement(({ value }) => (
	<li>
		<DragHandle />
		{value}
	</li>
));
console.log(SortableItem);
const SortableList = SortableContainer(({ items }) => {
	return (
		<ul>
			{items.map((value, index) => (
				<SortableItem
					key={`item-${value}`}
					index={index}
					value={value}
				/>
			))}
		</ul>
	);
});
class SortableComponent extends Component {
	state = {
		items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"],
	};
	componentDidMount() {}
	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState(({ items }) => ({
			items: arrayMove(items, oldIndex, newIndex),
		}));
	};
	render() {
		return (
			<SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
		);
	}
}
export default SortableComponent;
