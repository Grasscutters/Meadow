import React from "react";

interface IProps {
    fieldName: string;
    description: string;
    children: React.ReactNode;
}

class ConfigField extends React.Component<IProps, never> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div className={"ConfigField"}>
                <div className={"ConfigField_Info"}>
                    <h4 className={"ConfigField_Name"}>
                        {this.props.fieldName}
                    </h4>
                    <p className={"ConfigField_Description"}>
                        {this.props.description}
                    </p>
                </div>
                <div className={"ConfigField_Input"}>{this.props.children}</div>
            </div>
        );
    }
}

export default ConfigField;
