import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./Views/Home";
import { getRootPath } from "../src/utils/getRootPath";
import { HandleRefresh } from "../src/Views/nav/HandleRefresh";
import { Header } from "./Views/Header";
import { Footer } from "./Views/Footer";
import { Contact } from "./Views/Contact";
import { About } from "./Views/About";

// const root = createRoot(window.bodyTag);
const bodyTag = document.getElementById("bodyTag");
const root = createRoot(bodyTag);
const rootPath = getRootPath();

root.render(
	<BrowserRouter>
		<HandleRefresh>
			<Header />
			<Routes>
				<Route
					path={`${rootPath}/`}
					element={<Home />}
				/>
				<Route
					path={`${rootPath}/contact`}
					element={<Contact />}
				/>
				<Route
					path={`${rootPath}/about`}
					element={<About/>}
				/>
			</Routes>
			<Footer />
		</HandleRefresh>
	</BrowserRouter>
);
