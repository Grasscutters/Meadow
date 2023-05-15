import React from "react";

import { FaGithub, FaDiscord } from "react-icons/fa";

import { router } from "@app/main";

import "@css/components/Header.css";

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <div className="Header_Container">
                    <div className="Header_Pages">
                        <div className="Header_Page" onClick={async () => await router.navigate("/")}>
                            <p>Home</p>
                        </div>
                        <div className="Header_Page" onClick={async () => await router.navigate("/downloads")}>
                            <p>Downloads</p>
                        </div>
                        <div className="Header_Page" onClick={async () => await router.navigate("/wiki")}>
                            <p>Wiki</p>
                        </div>
                        <div className="Header_Page" onClick={async () => await router.navigate("/features")}>
                            <p>Features</p>
                        </div>
                    </div>

                    <div className="Header_Links">
                        <div className="Header_Link" onClick={() => window.open("https://github.com/Grasscutters")}>
                            <FaGithub size={30} />
                            <p>Github</p>
                        </div>
                        <div className="Header_Link" onClick={() => window.open("https://discord.gg/T5vZU6UyeG")}>
                            <FaDiscord size={30} />
                            <p>Discord</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
