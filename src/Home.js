import "./Home.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import TeamMember from "./Components/TeamMember";

import Logo from "./img/grasscutter-icon.png";

import MeledyPF from "./img/team/Meledy.webp";
import MagixPF from "./img/team/Magix.png";
import BenjPF from "./img/team/Benj.png";
import LunaticPF from "./img/team/Lunatic.webp";
import memetrollsXDPF from "./img/team/MemetrollsXD.webp";
import MlgmXyysdPF from "./img/team/MlgmXyysd.webp";
import SpikeHDPF from "./img/team/SpikeHD.webp";
import YazawaziPF from "./img/team/Yazawazi.webp";
import AlteriPF from "./img/team/Alteri.png";
import BirdulonPF from "./img/team/Birdulon.png";
import ShigetokiPF from "./img/team/Shigetoki.png";
import ExZorkPF from "./img/team/ExZork.png";
import NitroPF from "./img/team/Nitro.png";
import AyyLmaoPF from "./img/team/AyyLmao.png";


function Home() {
	return (
		<div className="Home">
			<div className="landing">
				<div className="background" />
				<div className="content">
					<img className="logo" src={Logo} alt="grasscutter logo" />
					<div className="text">
						<h1>Grasscutter</h1>
						<p>A private server software for a Certain Anime Game&trade;</p>
						<div className="links">
							<button id="dlatest"> Download Latest Build </button>
							<button id="ddevelopment"> Download Development Build </button>
							<button id="dgrassclipper"> Download Cultivation </button>
						</div>
						<div className="links">
							<button id="dsource"> Download Source </button>
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
					<TeamMember picture={AlteriPF} name="Alteri" links={true} github="alt3ri" website="alt3ri.com" />
					<TeamMember picture={BirdulonPF} name="Birdulon" links={true} github="Birdulon" />
					<TeamMember picture={ExZorkPF} name="ExZork" links={true} github="exzork" />
					<TeamMember picture={AyyLmaoPF} name="Ayy Lmao" links={true} github="lilmayofuksu" />
					<TeamMember picture={NitroPF} name="Nitro" links={true} github="nitrog0d" badge="MELON" badgeColor="#ff3b6a" />
					<TeamMember picture={ShigetokiPF} name="茂刻shigetoki" badge="ARTIST" badgeColor="#9b59b6" />

				</div>
			</div>
		</div>
	);
}

export default Home;
