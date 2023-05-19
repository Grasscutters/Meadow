import React from "react";

import { HiOutlineTrash } from "react-icons/hi";

import { MailItem, Region } from "@app/types";

interface IProps {
    type: "MailItem" | "Region";
    item: MailItem | Region;
    onDelete: () => void;
}

class ListItem extends React.Component<IProps, never> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div className={"ListItem"}>
                <div className={"ListItem_Info"}>
                    <h4 className={"ListItem_Name"}>
                        {this.props.type === "MailItem"
                            ? (this.props.item as MailItem).itemId
                            : (this.props.item as Region).Name}
                    </h4>
                </div>
                <HiOutlineTrash
                    className={"ListItem_Delete"}
                    onClick={this.props.onDelete}
                />
            </div>
        );
    }
}

export default ListItem;
