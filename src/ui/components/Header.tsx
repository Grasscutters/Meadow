import React from "react";

import { FaGithub, FaDiscord } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

import { router } from "@app/main";

import "@css/components/Header.css";

interface IState {
    isOpaque: boolean;
    isMobile: boolean;
    isMenuOpen: boolean;
}

class Header extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            isOpaque: false,
            isMobile: window.innerWidth < 875,
            isMenuOpen: false,
        };
    }

    handleScroll = () => {
        const { isOpaque } = this.state;
        const header = document.getElementsByClassName(
            "Header"
        )[0] as HTMLElement;

        if (window.scrollY > 0 && !isOpaque) {
            this.setState({ isOpaque: true });
            header.style.background = "#1c1c1e";
        } else if (window.scrollY === 0 && isOpaque) {
            this.setState({ isOpaque: false });
            header.style.background =
                "linear-gradient(0deg, transparent, rgba(0, 0, 0, 0.7))";
        }
    };

    handleResize = () => {
        const { isMobile } = this.state;

        if (window.innerWidth < 875 && !isMobile) {
            this.setState({ isMobile: true });
        } else if (window.innerWidth >= 875 && isMobile) {
            this.setState({ isMobile: false });
        }
    };

    toggleMenu = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    };

    componentDidMount() {
        window.onscroll = this.handleScroll;
        window.onresize = this.handleResize;
    }

    render() {
        return (
            <>
                <div className="Header">
                    {!this.state.isMobile ? (
                        <div className="Header_Container">
                            <div className="Header_Pages">
                                <div
                                    className="Header_Page"
                                    onClick={async () =>
                                        await router.navigate("/")
                                    }
                                >
                                    <p>Home</p>
                                </div>
                                <div
                                    className="Header_Page"
                                    onClick={async () =>
                                        await router.navigate("/downloads")
                                    }
                                >
                                    <p>Downloads</p>
                                </div>
                                <div
                                    className="Header_Page"
                                    onClick={async () =>
                                        await router.navigate("/wiki")
                                    }
                                >
                                    <p>Wiki</p>
                                </div>
                                <div
                                    className="Header_Page"
                                    onClick={async () =>
                                        await router.navigate("/features")
                                    }
                                >
                                    <p>Features</p>
                                </div>
                            </div>

                            <div className="Header_Links">
                                <div
                                    className="Header_Link"
                                    onClick={() =>
                                        window.open(
                                            "https://github.com/Grasscutters"
                                        )
                                    }
                                >
                                    <FaGithub size={30} />
                                    <p>Github</p>
                                </div>
                                <div
                                    className="Header_Link"
                                    onClick={() =>
                                        window.open(
                                            "https://discord.gg/T5vZU6UyeG"
                                        )
                                    }
                                >
                                    <FaDiscord size={30} />
                                    <p>Discord</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <AiOutlineMenu
                                className={"Header_MenuBtn"}
                                size={30}
                                onClick={this.toggleMenu}
                            />
                            <div className="Header_LinksMobile">
                                <FaGithub
                                    size={30}
                                    onClick={() =>
                                        window.open(
                                            "https://github.com/Grasscutters"
                                        )
                                    }
                                />
                                <FaDiscord
                                    size={30}
                                    onClick={() =>
                                        window.open(
                                            "https://discord.gg/T5vZU6UyeG"
                                        )
                                    }
                                />
                            </div>
                        </>
                    )}
                </div>

                {this.state.isMobile && this.state.isMenuOpen ? (
                    <div className="Header_MobileMenu">
                        <div onClick={async () => await router.navigate("/")}>
                            Home
                        </div>
                        <div
                            onClick={async () =>
                                await router.navigate("/downloads")
                            }
                        >
                            Downloads
                        </div>
                        <div
                            onClick={async () => await router.navigate("/wiki")}
                        >
                            Wiki
                        </div>
                        <div
                            onClick={async () =>
                                await router.navigate("/features")
                            }
                        >
                            Features
                        </div>
                    </div>
                ) : null}
            </>
        );
    }
}

export default Header;
