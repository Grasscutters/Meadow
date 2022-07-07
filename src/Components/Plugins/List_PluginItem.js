import React from "react";

import WindbladePlaceholderImg from "../../img/placeholder/Windblade.png";
import GCPMPlaceholderImg from "../../img/placeholder/gcpm.png";
import GCGMPlaceholderImg from "../../img/placeholder/gcgm.png";

const placeHolderPluginList = [
    {
        name: "Windblade",
        description: "Remote code executation at its finest!",
        image: WindbladePlaceholderImg,
        details: {
            downloads: "69",
            updated: "Jun 16, 2022",
            author: "Magix"
        }
    },
    {
        name: "GCPM",
        description: "The Grasscutter Permission Manager",
        image: GCPMPlaceholderImg,
        details: {
            downloads: "69",
            updated: "Jun 22, 2022",
            author: "Benj"
        }
    },
    {
        name: "GCGM",
        description: "The Grasscutter Game Master Dashboard",
        image: GCGMPlaceholderImg,
        details: {
            downloads: "69",
            updated: "May 11, 2022",
            author: "Benj"
        }
    }
];

export default function PluginItem(props) {
    var pluginData = placeHolderPluginList[props.pluginId];

	return (
		<div className="plugin">
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
				<p> {pluginData.description} </p>
			</div>
		</div>
	);
}
