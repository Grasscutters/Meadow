import React from "react";

interface IProps {
    count: string;
    text: string;
}

class HomeCard extends React.Component<IProps, never> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="HomeCard">
                <h1 className="HomeCard_Count">{this.props.count}</h1>
                <h2 className="HomeCard_Text">{this.props.text}</h2>
            </div>
        );
    }
}

export default HomeCard;
