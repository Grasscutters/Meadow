import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import withRouter from "../../Components/WithRouter";
import API from "../../data/api";
import { getThreeLetterMonth } from "../../data/dates";
import imageRenderer from "../../plugins/markdown/imageRenderer";
import Error404 from "../Error404";

class PluginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			plugin: null
		};
	}

	getPluginUpdatedDate() {
		let date = new Date(this.state.plugin.dateUpdated);
		let day = date.getDate();
		let month = getThreeLetterMonth(date.getMonth());
		let year = date.getFullYear();

		return `${day} ${month} ${year}`;
	}

	componentDidMount() {
		API().get(`/plugins/${this.props.router.params.id}`).then((res) => {
			this.setState({
				plugin: res.data.plugin
			});
		});
	}

	render() {
		if(this.state.plugin) {
		return (
			<div className="plugin">
				<div className="pluginHeader">
					<img crossOrigin="anonymous" src={`${API().getUri()}plugins/${this.props.router.params.id}/icon`} alt={this.state.plugin.name} />
					<h2>{this.state.plugin.name}</h2>
					<div className="details">
						<p className="downloads">
							<span>?? Downloads</span>
						</p>
						<p className="updated">
							Updated <span>{this.getPluginUpdatedDate()}</span>
						</p>
						<p className="author">
							Author <span>{this.state.plugin.createdBy.username}</span>
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
				<div className="pluginDescription"><ReactMarkdown children={this.state.plugin.description} rehypePlugins={[[imageRenderer, {pluginId: this.props.router.params.id}]]} /></div>
			</div>
		);
		} else {
			<Error404 />
		}
	}
}

export default withRouter(PluginPage);

/*export default function PluginPage() {
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
*/
