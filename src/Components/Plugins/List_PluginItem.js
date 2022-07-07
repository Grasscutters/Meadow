import React from "react";
import placeHolderPluginList from "../../Pages/Plugins/Plugins";

export default function PluginItem(props) {
    var pluginData = placeHolderPluginList[props.pluginId];

	return (
        <a href={`/plugins/${props.pluginId}`} className="plugin">
			<img src={pluginData.image} alt={pluginData.name} />
			<div className="pluginInfo">
				<h3>{pluginData.name}</h3>
				<div className="details">
					<p className="downloads">
						<span>{pluginData.details.downloads} Downloads</span>
					</p>
					<p className="updated">
						Updated <span>{pluginData.details.updated}</span>
					</p>
					<p className="author">
						Author <span>{pluginData.details.author}</span>
					</p>
				</div>
				<p> {pluginData.short_description} </p>
			</div>
		</a>
	);
}
