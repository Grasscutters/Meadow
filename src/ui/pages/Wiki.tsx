import React from "react";
import { NavLink } from "react-router-dom";

import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

import Router from "@components/common/Router";

import { DocsObject } from "@app/types";
import { getDocsAsync, getDocsContentAsync, getReadmeAsync } from "@app/utils";

import "@css/pages/Wiki.css";

interface IProps {
    match: { params: { page: string; } };

}

interface IState {
    docs: DocsObject[];
    content: string;
}

class Wiki extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            docs: [],
            content: ""
        }
    }

    private setDocPages = async () => {
        const docs = await getDocsAsync();
        docs.sort((a, b) => {
            if (a.name === "Home.md") return -1;
            if (b.name === "Home.md") return 1;
            return 0;
        });

        this.setState({ docs });
    }

    private loadDocContent = async () => {
        if (this.props.match.params.page === "Home") {
            let content = await getReadmeAsync();
            content = content.replaceAll("(docs/", "(https://github.com/Grasscutters/Grasscutter/tree/development/docs/");
            this.setState({ content });
        } else {
            const doc = this.state.docs.find(doc => doc.name === `${this.props.match.params.page}.md`);
            if (doc) {
                const content = await getDocsContentAsync(doc.download_url);
                this.setState({ content });
            }
        }
    }

    toggleOpaqueHeader = (opaque: boolean) => {
        const header = document.getElementsByClassName("Header")[0] as HTMLElement;
        if (opaque) {
            header.style.background = "#1186ce";
        } else {
            header.style.background = "linear-gradient(0deg, transparent, rgba(0, 0, 0, 0.7))";
        }
    }

    openSidebar = () => {
        const sidebar = document.getElementsByClassName("Wiki_Sidebar")[0] as HTMLElement;
        sidebar.style.transform = "translateX(0)";
    }

    closeSidebar = () => {
        const sidebar = document.getElementsByClassName("Wiki_Sidebar")[0] as HTMLElement;
        sidebar.style.transform = "translateX(-100%)";
    }

    async componentDidMount() {
        this.toggleOpaqueHeader(true);

        await this.setDocPages();
        await this.loadDocContent();
    }

    async componentDidUpdate(prevProps: IProps) {
        if (prevProps.match.params.page !== this.props.match.params.page) {
            await this.loadDocContent();
        }
    }

    componentWillUnmount() {
        this.toggleOpaqueHeader(false);
    }

    render() {
        return (
            <div className={"Wiki"}>
                <div className={"Wiki_Sidebar_Open"} onClick={this.openSidebar}>
                    <BsChevronRight />
                </div>
                <div className={"Wiki_Sidebar"}>
                    <BsChevronLeft className={"Wiki_Sidebar_Close"} onClick={this.closeSidebar} />

                    {
                        this.state.docs.map((doc, index) => {
                            return (
                                <NavLink
                                    key={index}
                                    to={`/wiki/${doc.path.substring(0, doc.path.length - 3)}`}
                                >
                                    {({ isActive }) => {
                                        return (
                                            <>
                                                {isActive && (<div className={"Wiki_Sidebar_Item_Active"}/>)}
                                                {doc.name.substring(0, doc.name.length - 3)}
                                            </>
                                        );
                                    }}
                                </NavLink>
                            );
                        })
                    }
                </div>
                <div className={"Wiki_Content"}>
                    <ReactMarkdown className={"Wiki_Markdown"} rehypePlugins={[rehypeRaw]}>
                        {this.state.content}
                    </ReactMarkdown>
                </div>
            </div>
        );
    }
}

export default Router(Wiki);
