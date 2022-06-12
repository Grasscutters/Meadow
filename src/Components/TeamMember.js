import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import ClickableFontAwesome from "./ClickableFontAwesome";

export default function TeamMember(props) {
	return (
		<div className="member">
			<div className="content">
				<img src={props.picture} alt={props.name} />
				<div className="info">
					<p className={!props.links ? "center" : null}>
						{props.name}
						{props.badge ? (
							<span className="team-badge" style={{ backgroundColor: props.badgeColor }}>
								{props.badge}
							</span>
						) : null}
					</p>
					{props.links ? (
						<div className="links">
							{props.website ? <ClickableFontAwesome icon={faGlobe} href={props.website} /> : null}
							{props.github ? <ClickableFontAwesome icon={faGithub} href={`https://github.com/${props.github}`} /> : null}
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
}
