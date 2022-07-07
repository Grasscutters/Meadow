import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../../Components/Header";
import Error404 from "../Error404";
import "./Plugins.css"
import PluginsHome from "./PluginsHome";

export default class PluginsRoute extends Component {
	render() {
		return (
			<>
				<Header />
				<div id="mainBody">
					<Routes>
						<Route exact path="/" element={<PluginsHome />} />
						
						<Route path="*" element={<Error404 />} />
					</Routes>
				</div>
			</>
		);
	}
}
