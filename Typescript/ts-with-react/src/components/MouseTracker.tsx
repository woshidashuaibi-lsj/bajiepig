import React, { useState, useEffect } from "react";

const MouseTracker: React.FC = () => {
	const [positions, setPositions] = useState({ x: 0, y: 0 });
	useEffect(() => {
		const updateMouse = (e: MouseEvent) => {
			console.log("inner");
			setPositions({ x: e.clientX, y: e.clientX });
		};
		document.addEventListener("click", updateMouse);
		return () => {
			console.log("remove effect", positions.x);

			document.removeEventListener("click", updateMouse); // 卸载
		};
	}, []);
	console.log("before render", positions.x);

	return (
		<p>
			X:{positions.x},Y:{positions.y}
		</p>
	);
};

export default MouseTracker;
