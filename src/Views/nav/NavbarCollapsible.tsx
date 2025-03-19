import React from "react";
import { NavLink } from "react-router";
import { getRootPath } from "../../utils/getRootPath";

export function NavbarCollapsible() {
	const rootPath = getRootPath();
	return (
		<>
			<nav className="navbar nav-tabs navbar-expand-sm bg-body-tertiary">
				<div className="container-fluid">
					<NavLink
						className="navbar-brand"
						to="#">
						Navigation
					</NavLink>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<NavLink
								className="nav-link"
								aria-current="page"
								to={`${rootPath}/home`}>
								Home
							</NavLink>
							<NavLink
								className="nav-link"
								to={`${rootPath}/contact`}>
								Contact
							</NavLink>
							<NavLink
								className="nav-link"
								to={`${rootPath}/about`}>
								About
							</NavLink>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
