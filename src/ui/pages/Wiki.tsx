import React from "react";
import { NavLink } from "react-router-dom";

import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

import Router from "@components/common/Router";
import { TableRenderer, HeadingRenderer } from "@components/wiki/Renderers";

import { getDocsTreeAsync, getDocContentAsync } from "@app/utils";

import "@css/pages/Wiki.css";

interface IProps {
    match: { params: { page: string } };
}

interface IState {
    docs: any[];
    content: string;
}

class Wiki extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            docs: [],
            content: ""
        };
    }

    private renderDocsTree = (item: any, level = 0) => {
        const paddingLeft = level * 20 + 20;

        if (item._type === "dir") {
            return (
                <>
                    {
                        item._main ?
                            <h3>{item.name}</h3> :
                            <p style={{ paddingLeft }}>
                                {item.name}
                            </p>
                    }
                    {item.children && item.children.map((child: any) => this.renderDocsTree(child, level + 1))}
                </>
            )
        } else if (item._type === "file") {
            return (
                <NavLink
                    to={`/wiki/${item.path.split("/").join("_").split(".")[0]}`}
                    style={
                        ({ isActive }) => ({
                            paddingLeft,
                            color: isActive ? "#1186ce" : "white"
                        })
                    }
                >
                    {({ isActive }) => {
                        return (
                            <>
                                {isActive && (<div className={"Wiki_Sidebar_Item_Active"}/>)}
                                {item.name}
                            </>
                        );
                    }}
                </NavLink>
            )
        } else {
            return null;
        }
    }

    private setDocsTree = async () => {
        this.setState({ docs: await getDocsTreeAsync() });
    };

    private loadDocContent = async () => {
        const doc = this.findPage(this.props.match.params.page.split("_").join("/") + ".md");
        if (doc !== null) {
            const content = await getDocContentAsync(doc.path);
            this.setState({ content });
        }
    };

    private findPage = (path: string, obj: any[] = this.state.docs) => {
        for (let i = 0; i < obj.length; i++) {
            if (obj[i].path === path) {
                return obj[i];
            } else if (obj[i].children && obj[i].children.length > 0) {
                const result: any = this.findPage(path, obj[i].children);
                if (result !== null) {
                    return result;
                }
            }
        }

        return null;
    }

    toggleOpaqueHeader = (opaque: boolean) => {
        const header = document.getElementsByClassName(
            "Header"
        )[0] as HTMLElement;
        if (opaque) {
            header.style.background = "#1186ce";
        } else {
            header.style.background =
                "linear-gradient(0deg, transparent, rgba(0, 0, 0, 0.7))";
        }
    };

    openSidebar = () => {
        const sidebar = document.getElementsByClassName(
            "Wiki_Sidebar"
        )[0] as HTMLElement;
        sidebar.style.transform = "translateX(0)";
    };

    closeSidebar = () => {
        const sidebar = document.getElementsByClassName(
            "Wiki_Sidebar"
        )[0] as HTMLElement;
        sidebar.style.transform = "translateX(-100%)";
    };

    async componentDidMount() {
        this.toggleOpaqueHeader(true);

        await this.setDocsTree();
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
                    <BsChevronLeft
                        className={"Wiki_Sidebar_Close"}
                        onClick={this.closeSidebar}
                    />

                    {
                        this.state.docs.map((child) => this.renderDocsTree(child))
                    }
                </div>
                <div className={"Wiki_Content"}>
                    <ReactMarkdown
                        className={"Wiki_Markdown"}
                        rehypePlugins={[rehypeRaw]}
                        remarkPlugins={[remarkGfm]}
                        components={{
                            table: TableRenderer,
                            h1: HeadingRenderer,
                            h2: HeadingRenderer
                        }}
                    >
                        {this.state.content}
                    </ReactMarkdown>
                </div>
            </div>
        );
    }
}

export default Router(Wiki);
