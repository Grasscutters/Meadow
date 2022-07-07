import WindbladePlaceholderImg from "../../img/placeholder/Windblade.png";
import GCPMPlaceholderImg from "../../img/placeholder/gcpm.png";
import GCGMPlaceholderImg from "../../img/placeholder/gcgm.png";

const placeHolderPluginList = [
	{
		name: "Windblade",
		short_description: "Remote code executation at its finest!",
		description: (
			<div class="file-view markup markdown">
				<h1 id="user-content-windblade">
					Windblade
				</h1>
				<p>
					An implementation of <code>WindSeedClientNotify</code> for Grasscutter.
				</p>
				<h2 id="user-content-developer-s-note">
					Developer's Note
				</h2>
				<p>
					pwease dwon't use windblade fwor malicious purpwoses.
					<br />
					its a gweat twoowl fwor cweating nyew cwontent, <br />
					and thats what it shwould remain as.
				</p>
				<h1 id="user-content-compatibility">
					Compatibility
				</h1>
				<p>
					Note: Grasscutter's version is the last <strong>GitHub commit</strong> Windblade works on.
					<br />
					This does not apply to the latest version of Windblade, where the Grasscutter version
					<br />
					is the first <strong>GitHub commit</strong> Windblade works on.
				</p>
				<table>
					<thead>
						<tr>
							<th>Grasscutter</th>
							<th>Windblade</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>2d4bfa7c314300bb9bcc105c502ecb2b9cd72c01</td>
							<td>1.0</td>
						</tr>
						<tr>
							<td>b3f11032927c288e83d728248dbc48ac4e7200e0</td>
							<td>1.1+</td>
						</tr>
					</tbody>
				</table>
				<h1 id="user-content-usage">
					Usage
				</h1>
				<p>
					Windblade doubles as both a <strong>plugin</strong> and an <strong>API</strong>.
				</p>
				<h2 id="user-content-using-as-a-plugin">
					Using as a Plugin
				</h2>
				<p>
					All you have to do is drop <code>Windblade.jar</code> into your <code>plugins</code> folder.
					<br />
					From here, add compiled Lua scripts to <code>plugins/Windblade/lua</code>.
				</p>
				<p>
					Now, players with the <code>windblade.windy</code> permission can use <code>/windy &lt;script&gt;</code> to run scripts.
				</p>
				<h2 id="user-content-using-as-an-api">
					Using as an API
				</h2>
				<p>Windblade can be either:</p>
				<ul>
					<li>
						<strong>Shaded</strong> into an existing plugin
						<ul>
							<li>
								Plugins will need to use a shading library to move <code>io.grasscutter.windblade</code> to a package of their choice.
							</li>
						</ul>
					</li>
					<li>
						<strong>Added</strong> as a server plugin
						<ul>
							<li>
								Other plugins can then reference <code>io.grasscutter.windblade</code>.
							</li>
						</ul>
					</li>
				</ul>
				<p>
					From here, developers can reference <code>(package).api</code> to access the API.
				</p>
				<h2 id="user-content-installing-into-maven-repository">
					Installing into Maven Repository
				</h2>
				<p>
					To better access the Windblade API, you can use <code>mvn install</code>
					<br />
					to add the plugin to your local Maven repository.
				</p>
			</div>
		),
		image: WindbladePlaceholderImg,
		details: {
			downloads: "69",
			updated: "Jun 16, 2022",
			author: "Magix",
		},
	},
	{
		name: "GCPM",
		short_description: "The Grasscutter Permission Manager",
		description: <></>,
		image: GCPMPlaceholderImg,
		details: {
			downloads: "69",
			updated: "Jun 22, 2022",
			author: "Benj",
		},
	},
	{
		name: "GCGM",
		short_description: "The Grasscutter Game Master Dashboard",
		description: <></>,
		image: GCGMPlaceholderImg,
		details: {
			downloads: "69",
			updated: "May 11, 2022",
			author: "Benj",
		},
	},
];

export default placeHolderPluginList;
