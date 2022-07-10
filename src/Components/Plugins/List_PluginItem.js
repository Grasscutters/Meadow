import React from "react";
//import DefaultIcon from "../../img/defaults/Unknown.png";
import { getThreeLetterMonth } from "../../data/dates";
import API from "../../data/api";


export default function PluginItem({plugin}) {

	const getPluginUpdatedDate = () => {
		let date = new Date(plugin.dateUpdated);
		let day = date.getDate();
		let month = getThreeLetterMonth(date.getMonth());
		let year = date.getFullYear();

		return `${day} ${month} ${year}`;
	}

	return (
        <a href={`/plugins/${plugin._id}`} className="plugin">
			<img crossOrigin="anonymous" src={`${API().getUri()}plugins/${plugin._id}/icon`} alt={plugin.name} />
			<div className="pluginInfo">
				<h3>{plugin.name}</h3>
				<div className="details">
					<p className="downloads">
						<span>??? Downloads</span>
					</p>
					<p className="updated">
						Updated <span>{getPluginUpdatedDate()}</span>
					</p>
					<p className="author">
						Author <span>{plugin.createdBy}</span>
					</p>
				</div>
				<p> {plugin.summary} </p>
			</div>
		</a>
	);
}
