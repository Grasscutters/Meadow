import React from "react";

import { BsDownload, BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

import BasicButton from "@components/common/BasicButton";
import { router } from "@app/main";

import "@css/pages/Home.css";

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <div className="Home_Grasscutter">
                    <div className="Home_Grasscutter_Container">
                        <div className="Home_Grasscutter_Container_Text">
                            <h1>Grasscutter</h1>

                            <div className="Home_Grasscutter_Description">
                                <p>
                                    Grasscutter is an experimental game server that aims to emulate the experience of playing a certain <em>anime game.</em>
                                </p>
                                <p>
                                    Written in Java, Grasscutter is able to run virtually anywhere, including on your toaster (if you have one).
                                </p>
                            </div>

                            <div className="Home_Grasscutter_Buttons">
                                <BasicButton
                                    icon={<BsDownload />}
                                    text={"Download"}
                                    color={"#42a400"}
                                    onClick={async () => await router.navigate("/downloads")}
                                />

                                <BasicButton
                                    icon={<BsGithub />}
                                    text={"Source Code"}
                                    outline={true}
                                    onClick={() => window.open("https://github.com/Grasscutters/Grasscutter")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Home_Cultivation">
                    <div className="Home_Cultivation_Container">
                        <div className="Home_Cultivation_Container_Text">
                            <h1>Cultivation</h1>

                            <div className="Home_Cultivation_Description">
                                <p>
                                    Cultivation, the custom launcher for Grasscutter, designed to make it easier than ever to run Grasscutter with just a few clicks on some buttons. No programming knowledge required!
                                </p>
                                <p>
                                    Written using the Tauri library, Cultivation is able to run on Windows, macOS, and Linux.
                                </p>
                            </div>

                            <div className="Home_Cultivation_Buttons">
                                <BasicButton
                                    icon={<BsDownload />}
                                    text={"Download"}
                                    color={"#de9f17"}
                                    onClick={async () => await router.navigate("/downloads")}
                                />

                                <BasicButton
                                    icon={<BsGithub />}
                                    text={"Source Code"}
                                    outline={true}
                                    onClick={() => window.open("http://github.com/Grasscutters/Cultivation")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Home_ConfigGen">
                    <div className="Home_ConfigGen_Container">
                        <div className="Home_ConfigGen_Container_Text">
                            <h1>Config Generator</h1>
                            <p>
                                The Config Generator is a tool that makes it easy to generate a config file for Grasscutter even if you do not know what all the buzz words inside a config mean. Simply fill out the form, and the Config Generator will generate a config file for you to use.
                            </p>
                        </div>

                        <BasicButton
                            icon={<FiExternalLink />}
                            text={"Check It Out!"}
                            color={"#0060a4"}
                            onClick={async () => await router.navigate("/config")}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
