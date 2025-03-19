import React, { useEffect, useState } from "react";
import "../../src/index.scss";

export function Home() {
	const [didMount, setDidMount] = useState(false);

	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate);
	useEffect(componentDidUnmount, []);

	return (
		<>
			<header id="homeHeader"></header>
			<main
				className="m-3"
				id="homeMain"
			></main>
		</>
	);

	function componentDidMount() {
		setDidMount(true);
		console.log("The Home component mounted.");

		const titleTag = document.getElementById("titleTag");
		titleTag.innerHTML = "Home";
	}

	function componentDidUpdate() {
		if (didMount) console.log("The About component updated.");
	}

	function componentDidUnmount() {
		return function displayMessage() {
			console.log("The About component unmounted.");
		};
	}
}
