import React, { MouseEvent } from "react";

interface IProps {
    outline?: boolean;
    icon?: React.ReactNode;
    onClick?: (event: MouseEvent) => void;
    text?: string;
    color?: string;
    style?: React.CSSProperties;
    id?: string;
    className?: string;
    customChildren?: boolean;
    children?: React.ReactNode;
}

class BasicButton extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <button
                className={`${this.props.className} BasicButton`}
                id={this.props.id}
                style={{
                    ...this.props.style,
                    backgroundColor: !this.props.outline ? this.props.color : "transparent",
                    border: this.props.outline ? `1px solid ${this.props.color}` : "none",
                }}
                onClick={this.props.onClick}
            >
                {this.props.customChildren ? (
                    this.props.children
                ) : (
                    <>
                        {this.props.icon ? this.props.icon : null}
                        {this.props.text ? this.props.text : null}
                    </>
                )}
            </button>
        );
    }
}

export default BasicButton;
