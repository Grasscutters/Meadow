import React from "react";

import StyledHeading from "@components/common/StyledHeading";
import DownloadCard from "@components/downloads/DownloadCard";
import BasicButton from "@components/common/BasicButton";

import { getLatestReleaseAsync } from "@app/utils";

import "@css/pages/Downloads.css";

interface IState {
    grasscutterVersion: string;
    grasscutterDownloadLink: string;
    cultivationVersion: string;
    cultivationDownloadLink: string;
}

class Downloads extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            grasscutterVersion: "",
            grasscutterDownloadLink: "",
            cultivationVersion: "",
            cultivationDownloadLink: ""
        };
    }

    setDownloads = async () => {
        const data = await getLatestReleaseAsync();

        this.setState({
            grasscutterVersion: data.grasscutter.version,
            grasscutterDownloadLink: data.grasscutter.url,
            cultivationVersion: data.cultivation.version,
            cultivationDownloadLink: data.cultivation.url
        });
    }

    async componentDidMount() {
        await this.setDownloads();
    }

    render() {
        return (
            <div className={"Downloads"}>
                <div className={"Downloads_Container"}>
                    <StyledHeading text={"Latest Downloads"} />
                    <h3>We recommend using Cultivation to launch your server<br /> if you do not know what a JAR file is.</h3>

                    <div className={"Downloads_Cards"}>
                        <DownloadCard
                            title={"Grasscutter"}
                            description={"Server JAR File"}
                            icon={"java.png"}
                            downloadLink={this.state.grasscutterDownloadLink}
                            downloadVersion={this.state.grasscutterVersion}
                        />

                        <DownloadCard
                            title={"Cultivation"}
                            description={"For Windows"}
                            icon={"windows.png"}
                            downloadLink={this.state.cultivationDownloadLink}
                            downloadVersion={this.state.cultivationVersion}
                        />
                    </div>

                    <div className={"Downloads_More"}>
                        <h4>Looking for more builds?</h4>

                        <div className={"Downloads_More_Grasscutter"}>
                            <h5>Grasscutter: </h5>
                            <BasicButton
                                text={"Latest Unstable"}
                                color={"#0095ff"}
                                onClick={() => window.open("https://nightly.link/Grasscutters/Grasscutter/workflows/build/unstable/Grasscutter.zip")}
                            />

                            <BasicButton
                                text={"Older Builds"}
                                color={"#121928"}
                                onClick={() => window.open("https://github.com/Grasscutters/Grasscutter/releases")}
                            />
                        </div>

                        <div className={"Downloads_More_Cultivation"}>
                            <h5>Cultivation: </h5>
                            <BasicButton
                                text={"Latest Commit"}
                                color={"#0095ff"}
                                onClick={() => window.open("https://nightly.link/Grasscutters/Cultivation/workflows/build/main/CultivationWin.zip")}
                            />

                            <BasicButton
                                text={"Older Builds"}
                                color={"#121928"}
                                onClick={() => window.open("https://github.com/Grasscutters/Cultivation/releases")}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Downloads;
