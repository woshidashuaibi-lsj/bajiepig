import { useEffect, useState } from "react";

const useDebounce = (value: string, delay = 300) => {
	const [debvalue, setdebvalue] = useState(value);

	useEffect(() => {
		let timer = setTimeout(() => {
			setdebvalue(value);
		}, delay);
		return () => {
			clearTimeout(timer);
		};
	}, [value, delay]);
	return debvalue;
};
export default useDebounce;
