import React, { useEffect, useState } from "react";
import placeHolder from "../../assets/images/tech_brain.jpg";
import "../../src/index.scss";


export function About() {
	const [didMount, setDidMount] = useState(false);

	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate);
	useEffect(componentDidUnmount, []);

	return (
		<main className="p-1">
			<div className="container">
				<div className="row">
					<div className="col-12 border">
						<h3
							id="aboutSite"
							className="emphasis newSection"
						>
							About this website
						</h3>
					</div>
					<div className="col-12 border">
						<p>Insert text here</p>
					</div>
					<div className="col-12 border">
						<h3 id="aboutMe">About me</h3>
					</div>
					<div className="col-3 border">
						<img
							src={placeHolder}
							alt="placeHolder"
							style={{ width: "100%" }}
							className="ms-1"
						/>
					</div>
					<div className="col-9 border">
						<p>Insert text here</p>
					</div>
				</div>
			</div>
		</main>
	);

	function componentDidMount() {
		setDidMount(true);
		console.log("The About component mounted.");

		const titleTag = document.getElementById("titleTag");
		titleTag.innerHTML = "About";
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
