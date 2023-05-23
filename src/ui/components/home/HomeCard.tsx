import React from "react";

interface IProps {
    count: string;
    text: string;
    link?: string;
}

class HomeCard extends React.Component<IProps, never> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div
                className="HomeCard"
                onClick={() => {
                    window.open(this.props.link ?? "", "_blank");
                }}
            >
                <h1 className="HomeCard_Count">{this.props.count}</h1>
                <h2 className="HomeCard_Text">{this.props.text.toUpperCase()}</h2>
            </div>
        );
    }
}

export default HomeCard;
