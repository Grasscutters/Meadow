import React from "react";

interface IProps {
    title: string;
    children: React.ReactNode;
}

class ConfigSection extends React.Component<IProps, never> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div className={"ConfigSection"}>
                <h3 className={"ConfigSection_Title"}>{this.props.title}</h3>
                <div className={"ConfigSection_Content"}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default ConfigSection;
