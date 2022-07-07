import React from "react";
import { useParams } from "react-router-dom";
import placeHolderPluginList from "./Plugins";

export default function PluginPage() {
	let params = useParams();
	let pluginData = placeHolderPluginList[parseInt(params.id)];

	return (
		<div className="plugin">
			<div className="pluginHeader">
				<img src={pluginData.image} alt={pluginData.name} />
				<h2>{pluginData.name}</h2>
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
				<div className="navigation">
					<ul>
						<li className="selected">
							<div className="inner">Description</div>
						</li>
						<li>
							<div className="inner">Downloads</div>
						</li>
					</ul>
				</div>
			</div>
			<div className="pluginDescription">{pluginData.description}</div>
		</div>
	);
}
