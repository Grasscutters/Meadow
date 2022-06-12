import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from "./Error404";
import { CookiesProvider } from "react-cookie";
import Copyright from "./Copyright";

export default function App() {
	return (
		<CookiesProvider>
			<Router>
				<div className="App">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route element={<Error404/>} />
					</Routes>
					<Copyright />
				</div>
			</Router>
		</CookiesProvider>
	);
}
