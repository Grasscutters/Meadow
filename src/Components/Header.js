import React from "react";
import "./Header.css";

export default function Header() {
    function navigate(e, url) {
        e.preventDefault();
        window.location.href = url;
    }

	return (
		<div className="header">
			<h2 onClick={(e) => navigate(e, "/")}>Grasscutters</h2>
			<ul>
				<li onClick={(e) => navigate(e, "/")}>Home</li>
				<li onClick={(e) => navigate(e, "/plugins")}>Plugins</li>
			</ul>
		</div>
	);
}
