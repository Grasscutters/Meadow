import React from "react";

interface IProps {
    text: string;
    topColor?: string;
    bottomColor?: string;

    className?: string;
}

class StyledHeading extends React.Component<IProps, never> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div className={"StyledHeading"}>
                <div
                    className={"StyledHeading_Top"}
                    style={{ background: this.props.topColor }}
                />
                <h1 className={"StyledHeading_Text"}>{this.props.text}</h1>
                <div
                    className={"StyledHeading_Bottom"}
                    style={{ background: this.props.bottomColor }}
                />
            </div>
        );
    }
}

export default StyledHeading;
