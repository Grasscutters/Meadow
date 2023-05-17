import React from "react";

interface IProps {
    title: string;
    description: string;
    downloadLink: string;
    downloadVersion: string;
    icon: string;
}

class DownloadCard extends React.Component<IProps, never> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div className={"DownloadCard"} onClick={() => window.open(this.props.downloadLink)}>
                <p className={"DownloadCard_Version"}>{this.props.downloadVersion}</p>
                <img className={"DownloadCard_Icon"} src={this.props.icon} alt={"Icon"} />
                <div className={"DownloadCard_Info"}>
                    <h4>{this.props.title}</h4>
                    <p>{this.props.description}</p>
                </div>
                <div className={"DownloadCard_Download"}>
                    <p>Download</p>
                </div>
            </div>
        );
    }
}

export default DownloadCard;
