import React from "react";
import PluginItem from "../../Components/Plugins/List_PluginItem";

export default function PluginsHome() {
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
                        <PluginItem pluginId={0} />
                        <PluginItem pluginId={1} />
                        <PluginItem pluginId={2} />
                    </div>
				</div>
			</div>
		</div>
	);
}
