import React, { Component } from "react";
import MDEditor, { commands } from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import HelpButton from "../../Components/Common/HelpButton";
import "./NewPlugin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import ImageUploader from "../../Components/Plugins/ImageUploader";
import imagePreviewer from "../../plugins/markdown/imagePreviewer";
import DefaultIcon from "../../img/defaults/Unknown.png";
import LanguageSelector from "../../Components/Plugins/LanguageSelector";
import API from "../../data/api";

export default class NewPlugin extends Component {
	constructor(props) {
		super(props);
		this.imageIcon = React.createRef();

		this.state = {
			// Info
			name: "",
			summary: "",
			pluginIcon: undefined,
			// Description
			description: "",
			enableImageUploader: false,
			images: [],

			// Jar
			pluginJar: undefined,
			pluginVersion: "",
			pluginPreviewBuild: false,
			pluginChangeLog: "",
			pluginVerifiedVersions: "",
			pluginSupportedLanguages: ["en"],

			// Links
			links: [
				{
					name: "",
					url: "",
				},
			],
		};

		this.iconRef = React.createRef();
	}

	imageCommand = {
		name: "image",
		keyCommand: "image",
		buttonProps: { "aria-label": "Insert image" },
		icon: <FontAwesomeIcon icon={faImage} ref={this.imageIcon} />,
		execute: (editorState, onChange) => {
			this.setState({ enableImageUploader: !this.state.enableImageUploader });
		},
	};

	createLink() {
		let newLink = {
			name: "",
			url: "",
		};

		this.setState({ links: [...this.state.links, newLink] });
	}

	updateLink(index, e, type) {
		let links = this.state.links;

		if (type === "url") {
			links[index].url = e.target.value;
		} else {
			links[index].name = e.target.value;
		}

		this.setState({ links: links });
	}

	removeLink(index) {
		let links = this.state.links;
		links.splice(index, 1);
		this.setState({ links: links });
	}

	uploadPlugin() {
		let data = {
			name: this.state.name,
			description: this.state.description,
			summary: this.state.summary,
			version: this.state.pluginVersion,
			changeLog: this.state.pluginChangeLog,
			links: this.state.links,
			testedGCVersions: this.state.pluginVerifiedVersions.replace(" ", "").split(","),
			supportedLanguages: this.state.pluginSupportedLanguages,
			isPreviewBuild: this.state.pluginPreviewBuild,
		};

		let formData = new FormData();
		//formData.append("images", this.state.images.map(image => { return image } ));
		this.state.images.forEach(imageData => {
			formData.append(`attachment_${imageData.imageName}`, imageData.file);
		});
		formData.append("pluginIcon", this.state.pluginIcon);
		formData.append("pluginJar", this.state.pluginJar);
		formData.append("data", JSON.stringify(data));

		API().post("/plugins", formData, { headers: { Authorization: "Bearer GET-UR-OWN-TOKEN"} }).then((response) => {
			console.log(response);
		});
	}

	render() {
		return (
			<div className="pluginCreator">
				<h1> Upload a new Plugin </h1>

				<h2>Basic Information</h2>
				<div className="section basicInfo">
					<div className="field">
						<label htmlFor="name">Name*</label>
						<input type="text" id="name" placeholder="My Awesome Plugin" value={this.state.name} onChange={(e) => this.setState({name: e.target.value })} />
					</div>
					<div className="field">
						<label htmlFor="summary">
							Summary* <HelpButton> The short summary of the plugin that will be displayed alongside other plugins </HelpButton>{" "}
						</label>
						<input type="text" id="summary" placeholder="A plugin that does awesome things"  value={this.state.summary} onChange={(e) => this.setState({summary: e.target.value })} />
					</div>
					<div className="field iconUpload">
						<label htmlFor="icon">Plugin Icon*</label>
						<div onClick={(e) => this.iconRef.current.click()}>
							<img src={this.state.pluginIcon ? URL.createObjectURL(this.state.pluginIcon) : DefaultIcon} alt="" />
							{this.state.pluginIcon ? null : <p>Click here to change the icon</p>}
						</div>
						<input
							type="file"
							id="icon"
							ref={this.iconRef}
							accept="image/png, image/jpeg"
							onChange={(e) => {
								this.setState({ pluginIcon: e.target.files[0] });
							}}
						/>
					</div>
				</div>

				<h2>Description*</h2>
				<div className="section descriptionEditor">
					<MDEditor
						minHeight={300}
						height={300}
						value={this.state.description}
						commands={[commands.bold, commands.italic, commands.hr, commands.title, commands.divider, commands.link, commands.quote, commands.code, commands.codeBlock, this.imageCommand, commands.divider, commands.unorderedListCommand, commands.orderedListCommand, commands.checkedListCommand]}
						onChange={(value) => {
							this.setState({ description: value });
						}}
						previewOptions={{
							rehypePlugins: [[rehypeSanitize], [imagePreviewer, { images: this.state.images }]],
						}}
						
					/>
					{this.state.enableImageUploader ? <ImageUploader style={{ top: "35px", left: "80px" }} value={this.state.images} onChange={(newValue) => this.setState({ images: newValue })} /> : null}
				</div>
				<h2>Jar</h2>
				<div className="section upload">
					<div className="field">
						<label htmlFor="jar">Plugin Jar*</label>
						<input type="file" id="jar" accept=".jar" onChange={(e) => this.setState({pluginJar: e.target.files[0] })} />
					</div>
					<div className="field">
						<label htmlFor="version">Version*</label>
						<input type="text" id="version" placeholder="1.0.0" maxLength={"00.00.00a".length} value={this.state.pluginVersion} onChange={(e) => this.setState({pluginVersion: e.target.value })} />
					</div>
					<div className="field isPreview">
						<label htmlFor="isPreview">Is Preview Build? </label>
						<input type="checkbox" id="isPreview" value={this.state.pluginPreviewBuild} onChange={(e) => this.setState({pluginPreviewBuild: e.target.checked })} />
					</div>
					<div className="field">
						<label htmlFor="changeLog">Change Log*</label>
						<textarea id="changeLog" placeholder="What's new in this version?" value={this.state.pluginChangeLog} onChange={(e) => this.setState({pluginChangeLog: e.target.value})} />
					</div>
					<div className="field">
						<label htmlFor="verifiedGCVersions">
							Verified Grasscutter Versions* <HelpButton>Seperate each version with a comma (,)</HelpButton>
						</label>
						<input type="text" id="verifiedGCVersions" placeholder="1.2.0, 1.2.1-dev" value={this.state.pluginVerifiedVersions} onChange={(e) => this.setState({pluginVerifiedVersions: e.target.value })} />
					</div>
					<div className="field">
						<label htmlFor="supportedLanguage">Supported Languages*</label>
						<LanguageSelector
							multiple={true}
							value={this.state.pluginSupportedLanguages}
							onChange={(newValue) => {
								this.setState({ pluginSupportedLanguages: newValue });
							}}
						/>
					</div>
				</div>

				<h2>Links</h2>
				<div className="section links">
					<input type="button" value="Create Link" id="create" onClick={() => this.createLink()} />
					{this.state.links.map((link, index) => {
						return (
							<div key={index} className="field">
								<input
									type="text"
									id={`link${index}`}
									placeholder="Name"
									value={link.name}
									onChange={(e) => {
										this.updateLink(index, e, "name");
									}}
								/>
								<input
									type="text"
									className="url"
									id={`link${index}url`}
									placeholder="https://github.com/example/myawesomeplugin"
									value={link.url}
									onChange={(e) => {
										this.updateLink(index, e, "url");
									}}
								/>
								<input type="button" value="Remove" onClick={() => this.removeLink(index)} />
							</div>
						);
					})}
				</div>

				<div className="section submit">
					<input type="button" id="upload" value="Upload" onClick={() => this.uploadPlugin()} />
				</div>
			</div>
		);
	}
}
