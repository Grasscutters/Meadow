import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import "./HelpButton.css";

export default class HelpButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			opened: false,
		};

		this.setOpen = this.setOpen.bind(this);
		this.setClosed = this.setClosed.bind(this);
	}

	setOpen() {
		this.setState({ opened: true });
	}

	setClosed() {
		this.setState({ opened: false });
	}

	render() {
		return (
			<div className="HelpSection">
				<div className="HelpButton" onMouseEnter={this.setOpen} onMouseLeave={this.setClosed}>
					<FontAwesomeIcon icon={faQuestionCircle} />
				</div>

				<div
					className="HelpContents"
					style={{
						display: this.state.opened ? "block" : "none",
					}}>
					{this.props.contents || this.props.children}
				</div>
			</div>
		);
	}
}
