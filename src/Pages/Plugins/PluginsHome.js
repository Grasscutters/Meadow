import React, { Component } from "react";
import PluginItem from "../../Components/Plugins/List_PluginItem";
import API from "../../data/api";

export default class PluginsHome extends Component {
	constructor(props) {
		super(props);

		this.state = {
			plugins: [],
		}
	}

	componentDidMount() {
		API().get("/plugins").then((res) => {
			this.setState({
				plugins: res.data.plugins
			})
		});
	}

	render() {
		return (
			<div className="pluginNavigation">
				<h2> Plugins </h2>
				<div className="body">
					<div className="sidebar">
						<div className="panel">
							<div className="panelHeader">
								<p>Categories</p>
							</div>

							<div className="content">
								<ul>
									<li>Management</li>
									<li>Utility</li>
									<li>Fun</li>
									<li>Misc</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="content">
						<div className="pluginList">
							{
								this.state.plugins.map((plugin) => {
									console.log(plugin);
									return <PluginItem key={plugin._id} plugin={plugin} />
								})
							}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
