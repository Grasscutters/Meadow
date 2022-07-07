import "./Home.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import TeamMember from "../Components/Home/TeamMember";

import Logo from "../img/grasscutter-icon.png";

import MeledyPF from "../img/team/Meledy.webp";
import MagixPF from "../img/team/Magix.png";
import BenjPF from "../img/team/Benj.png";
import LunaticPF from "../img/team/Lunatic.webp";
import memetrollsXDPF from "../img/team/MemetrollsXD.webp";
import MlgmXyysdPF from "../img/team/MlgmXyysd.webp";
import SpikeHDPF from "../img/team/SpikeHD.webp";
import YazawaziPF from "../img/team/Yazawazi.webp";
import AlteriPF from "../img/team/Alteri.png";
import BirdulonPF from "../img/team/Birdulon.png";
import ShigetokiPF from "../img/team/Shigetoki.png";
import ExZorkPF from "../img/team/ExZork.png";
import NitroPF from "../img/team/Nitro.png";
import AyyLmaoPF from "../img/team/AyyLmao.png";
import Akka0PF from "../img/team/Akka0.jpg";
import XhaoYiranPF from "../img/team/xhaoyiran.png";
import TukanDevPF from "../img/team/TukanDev.png";
import GanyusLeftHornPF from "../img/team/GanyusLeftHorn.jpg";

import React from "react";
import DownloadButton from "../Components/Home/DownloadButton";

import "./Home.css"

class Home extends React.Component {
	componentDidMount() {
		document.title = "Grasscutters"
	}

	render() {
		return (
			<div className="Home">
				<div className="landing">
					<div className="background" />
					<div className="content">
						<img className="logo" src={Logo} alt="grasscutter logo" />
						<div className="text">
							<h1>Grasscutter</h1>
							<p>A private server software for a Certain Anime Game</p>
							<div className="links">
								<DownloadButton name="Download Grasscutter" githubPath="Grasscutters/Grasscutter" githubUseLatest={true} color="greenyellow" dropdown={ [
									{
										name: "Stable Releases",
										url: "https://github.com/Grasscutters/Grasscutter/releases"
									},
									{
										name: "Development Builds",
										url: "https://jenkins.4benj.com/job/Grasscutters/job/Grasscutter/"
									},
									{
										name: "Source Code",
										url: "https://github.com/Grasscutters/Grasscutter"
									}
								]} />
								<DownloadButton name="Download Cultivation" githubPath="Grasscutters/Cultivation" githubUseLatest={false} color="yellow" dropdown={ [
									{
										name: "Releases",
										url: "https://github.com/Grasscutters/Cultivation/releases"
									},
									{
										name: "Source Code",
										url: "https://github.com/Grasscutters/Cultivation"
									}
								]}  />
							</div>
						</div>
					</div>
					<div className="scroll" id="scroll-down">
						{/*
					<div className="arrow">
						<FontAwesomeIcon icon={faAngleDown} />
                	</div>
                	<p> SCROLL FOR MORE </p>
                	<div className="arrow">
						<FontAwesomeIcon icon={faAngleDown} />
					</div>
					*/}
						<p> MORE COMING SOON </p>
					</div>
				</div>
				<div className="team">
					<h1> Meet the Team </h1>
					<div className="grid">
						<TeamMember picture={MeledyPF} name="Meledy" links={true} github="Melledy" badge="CREATOR" badgeColor="#f9cb25" />
						<TeamMember picture={MagixPF} name="Magix" links={true} github="KingRainbow44" website="https://magix.lol" />
						<TeamMember picture={BenjPF} name="Benj" links={true} github="4Benj" website="https://4benj.com" />
						<TeamMember picture={LunaticPF} name="Lunatic" links={true} github="lunaticwhat" website="https://lunatic.moe" />
						<TeamMember picture={memetrollsXDPF} name="memetrollsXD" links={true} github="memetrollsXD" />
						<TeamMember picture={MlgmXyysdPF} name="MlgmXyysd" links={true} github="MlgmXyysd" />
						<TeamMember picture={SpikeHDPF} name="SpikeHD" links={true} github="SpikeHD" />
						<TeamMember picture={YazawaziPF} name="Yazawazi" links={true} github="Yazawazi" />
						<TeamMember picture={AlteriPF} name="Alteri" links={true} github="alt3ri" website="https://alt3ri.com" />
						<TeamMember picture={BirdulonPF} name="Birdulon" links={true} github="Birdulon" />
						<TeamMember picture={ExZorkPF} name="ExZork" links={true} github="exzork" />
						<TeamMember picture={AyyLmaoPF} name="Ayy Lmao" links={true} github="lilmayofuksu" />
						<TeamMember picture={TukanDevPF} name="TukanDev" links={true} github="TukanDev" website="https://tukandev.com" />
						<TeamMember picture={XhaoYiranPF} name="赵怡然(zhaoyiran)" links={true} github="zhaodice" />
						<TeamMember picture={Akka0PF} name="Akka0" links={true} github="Akka0" />
						<TeamMember picture={GanyusLeftHornPF} name="GanyusLeftHorn" links={true} github="GanyusLeftHorn" />
						<TeamMember picture={NitroPF} name="Nitro" links={true} github="nitrog0d" badge="MELON" badgeColor="#ff3b6a" />
						<TeamMember picture={ShigetokiPF} name="茂刻shigetoki" links={false} badge="ARTIST" badgeColor="#9b59b6" />
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
