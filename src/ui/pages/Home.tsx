import React from "react";

import { BsDownload, BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

import BasicButton from "@components/common/BasicButton";
import HomeCard from "@components/common/HomeCard";

import { router } from "@app/main";
import { getStatsAsync } from "@app/utils";

import "@css/pages/Home.css";

interface IState {
    stars: number;
    forks: number;
    watchers: number;
}

class Home extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            stars: 0,
            forks: 0,
            watchers: 0
        };
    }

    formatNumber = (num: number): string => {
        if (num >= 1000) {
            return `${(num / 1000).toFixed(1)}k+`;
        } else {
            return num.toString();
        }
    }

    setStats = async () => {
        const stats = await getStatsAsync();

        this.setState({
            stars: stats.stars,
            forks: stats.forks,
            watchers: stats.watchers
        });
    }

    async componentDidMount() {
        await this.setStats();
    }

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

                <div className={"Home_About"}>
                    <div className={"Home_About_Container"}>
                        <h1>About the Project</h1>

                        <div className={"Home_About_Container_Text"}>
                            <p>
                                Written from scratch in Java, Grasscutter began its development in early 2022 with a single developer, Melledy, and was made publicly available in April 2022.
                                The goal of Grasscutter is to provide a free, open-source alternative to the official game server, with added features and customizability.
                            </p>

                            <p>
                                The project is being actively developed and maintained by a small team of developers, and contributors.
                                Grasscutter welcomes contributions from anyone.
                            </p>

                            <p>
                                Grasscutter's plugin system allows developers to create plugins that can be loaded into the server at runtime.
                                And with a bunch of already-made plugins by the community, you can customize and enhance your server to your liking.
                            </p>

                            <p>
                                <em>This project is not affiliated with the Hoyoverse or miHoYo in any way and is licensed under the GNU Affero General Public License v3.0.</em>
                            </p>
                        </div>
                    </div>

                    <div className={"Home_About_Cards"}>
                        <HomeCard count={this.formatNumber(this.state.stars)} text={"STARS ON GITHUB"} />
                        <HomeCard count={this.formatNumber(this.state.forks)} text={"REPOSITORY FORKS"} />
                        <HomeCard count={this.formatNumber(this.state.watchers)} text={"REPOSITORY WATCHERS"} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
