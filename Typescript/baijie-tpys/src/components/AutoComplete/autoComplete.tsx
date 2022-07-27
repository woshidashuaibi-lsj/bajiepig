import React, {
	FC,
	useState,
	ChangeEvent,
	ReactElement,
	useEffect,
	KeyboardEvent,
	useRef,
} from "react";
import useClickOutside from "../../hooks/useClickOutside";
import Input, { InputProps } from "../Input/input";
import classNames from "classnames";
import Icon from "../Icon/icon";
import useDebounce from "../../hooks/usedebounce";
import Transition from "../Transition/transition";

interface DataSourceObject {
	value: string;
	number: number;
}
export type DataSourceType<T = {}> = T & DataSourceObject;
export interface AutoCompleteProps extends Omit<InputProps, "onSelect"> {
	fetchSuggestions: (
		str: string
	) => DataSourceType[] | Promise<DataSourceType[]>;
	onSelect?: (item: DataSourceType) => void;
	renderOption?: (item: DataSourceType) => ReactElement;
}
export const AutoComplete: FC<AutoCompleteProps> = (props) => {
	const { fetchSuggestions, onSelect, value, renderOption, ...restProps } =
		props;
	const [inputValue, setInputValue] = useState(value as string);
	const [showDropdown, setShowDropdown] = useState(false);
	const triggerSearch = useRef(false);
	const [suggestions, setSugestions] = useState<DataSourceType[]>([]);
	const componentRef = useRef<HTMLDivElement>(null);
	useClickOutside(componentRef, () => {
		setSugestions([]);
	});
	const [loading, setLoading] = useState(false);
	const [highlightIndex, setHighlightIndex] = useState(-1);
	const debouncedValue = useDebounce(inputValue, 300);
	console.log(suggestions);
	useEffect(() => {
		if (debouncedValue && triggerSearch.current) {
			setSugestions([]);
			const results = fetchSuggestions(debouncedValue);
			if (results instanceof Promise) {
				setLoading(true);
				results.then((data) => {
					setLoading(false);
					setSugestions(data);
					if (data.length > 0) {
						setShowDropdown(true);
					}
				});
			} else {
				setSugestions(results);
				setShowDropdown(true);
				if (results.length > 0) {
					setShowDropdown(true);
				}
			}
		} else {
			setSugestions([]);
		}
		setHighlightIndex(-1);
	}, [debouncedValue]);
	const highlight = (index: number) => {
		if (index < 0) index = 0;
		if (index >= suggestions.length) {
			index = suggestions.length - 1;
		}
		setHighlightIndex(index);
	};
	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		console.log(e.key);
		console.log(e);

		switch (e.keyCode) {
			case 13:
				if (suggestions[highlightIndex]) {
					handleSelect(suggestions[highlightIndex]);
				}
				break;
			case 38:
				highlight(highlightIndex - 1);
				break;
			case 40:
				highlight(highlightIndex + 1);
				break;
			case 27:
				setShowDropdown(false);
				break;
			default:
				break;
		}
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.trim();
		setInputValue(value);
		triggerSearch.current = true;
	};
	const handleSelect = (item: DataSourceType) => {
		setInputValue(item.value);
		setShowDropdown(false);
		if (onSelect) {
			onSelect(item);
		}
		triggerSearch.current = false;
	};
	const renderTemplate = (item: DataSourceType) => {
		return renderOption ? renderOption(item) : item;
	};
	const generateDropdown = () => {
		return (
			<Transition
				in={showDropdown || loading}
				animation="zoom-in-top"
				timeout={300}
				// onExited={() => {
				// 	setSugestions([]);
				// }}
			>
				<ul className="viking-suggestion-list">
					{loading && (
						<div className="suggstions-loading-icon">
							<Icon icon="spinner" spin />
						</div>
					)}
					{suggestions.map((item, index) => {
						const cnames = classNames("suggestion-item", {
							"is-active": index === highlightIndex,
						});
						return (
							<li
								key={index}
								className={cnames}
								onClick={() => handleSelect(item)}
							>
								{renderTemplate(item)}
							</li>
						);
					})}
				</ul>
			</Transition>
		);
	};

	return (
		<div className="viking-auto-complete" ref={componentRef}>
			<Input
				value={inputValue}
				onKeyDown={handleKeyDown}
				{...restProps}
				onChange={handleChange}
			></Input>
			{loading && (
				<div className="suggstions-loading-icon">
					<Icon icon="spinner" spin />
					loading
				</div>
			)}
			{suggestions?.length > 0 && generateDropdown()}
		</div>
	);
};

export default AutoComplete;
