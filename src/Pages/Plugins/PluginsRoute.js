import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../../Components/Header";
import Error404 from "../Error404";
import PluginsHome from "./PluginsHome";
import PluginPage from "./PluginPage";
import "./Plugins.css"
import NewPlugin from "./NewPlugin";

export default class PluginsRoute extends Component {
	render() {
		return (
			<>
				<Header />
				<div id="mainBody">
					<Routes>
						<Route exact path="/" element={<PluginsHome />} />
						<Route exact path="/new" element={<NewPlugin /> } />
						<Route exact path="/:id" element={<PluginPage /> } />
						<Route path="*" element={<Error404 />} />
					</Routes>
				</div>
			</>
		);
	}
}
