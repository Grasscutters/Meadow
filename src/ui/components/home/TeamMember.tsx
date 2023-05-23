import React from "react";

interface IProps {
    image: string;
    name: string;
    githubUrl: string;
    badge?: "CREATOR" | "MELON";
}

class TeamMember extends React.Component<IProps, never> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div className="TeamMember">
                <img
                    className="TeamMember_Image"
                    src={this.props.image}
                    alt={this.props.name}
                    onClick={() => window.open(this.props.githubUrl, "_blank")}
                />
                <h4 className="TeamMember_Name">{this.props.name}</h4>
                {this.props.badge && (
                    <div
                        className="TeamMember_Badge"
                        style={{
                            backgroundColor:
                                this.props.badge === "CREATOR"
                                    ? "#ffe35a"
                                    : "#f67d69"
                        }}
                    >
                        {this.props.badge}
                    </div>
                )}
            </div>
        );
    }
}

export default TeamMember;
