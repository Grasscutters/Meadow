import React from "react";

import StyledHeading from "@components/common/StyledHeading";
import ConfigSection from "@components/config/ConfigSection";
import ConfigField from "@components/config/ConfigField";

import "@css/pages/ConfigGen.css";
import BasicButton from "@components/common/BasicButton";

class ConfigGen extends React.Component {
    render() {
        return (
            <div className={"ConfigGen"}>
                <div className={"ConfigGen_Container"}>
                    <StyledHeading text={"Config Generator"} />
                    <h3>Generate a config file for your server.</h3>

                    <div className={"ConfigGen_Config"}>
                        <ConfigSection title={"Folder Structure"}>
                            <ConfigField
                                fieldName={"resources"}
                                description={
                                    "The path to your RESOURCES folder on your pc."
                                }
                            >
                                <input
                                    type={"text"}
                                    placeholder={"./resources/"}
                                />
                            </ConfigField>

                            <ConfigField
                                fieldName={"data"}
                                description={
                                    "The to your DATA folder on your pc."
                                }
                            >
                                <input type={"text"} placeholder={"./data/"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"packets"}
                                description={
                                    "The path to your PACKETS folder on your pc."
                                }
                            >
                                <input
                                    type={"text"}
                                    placeholder={"./packets/"}
                                />
                            </ConfigField>

                            <ConfigField
                                fieldName={"scripts"}
                                description={
                                    "The path to your SCRIPTS folder on your pc."
                                }
                            >
                                <input
                                    type={"text"}
                                    placeholder={"./scripts/"}
                                />
                            </ConfigField>

                            <ConfigField
                                fieldName={"plugins"}
                                description={
                                    "The path to your PLUGINS folder on your pc."
                                }
                            >
                                <input
                                    type={"text"}
                                    placeholder={"./plugins/"}
                                />
                            </ConfigField>
                        </ConfigSection>

                        <ConfigSection title={"Database Info"}>
                            <ConfigField
                                fieldName={"server.connectionUri"}
                                description={
                                    "The connection URI to your server database."
                                }
                            >
                                <input
                                    type={"text"}
                                    placeholder={"mongodb://localhost:27017/"}
                                />
                            </ConfigField>

                            <ConfigField
                                fieldName={"server.collection"}
                                description={
                                    "The name of the collection in your server database."
                                }
                            >
                                <input type={"text"} placeholder={"server"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"game.connectionUri"}
                                description={
                                    "The connection URI to your game database."
                                }
                            >
                                <input
                                    type={"text"}
                                    placeholder={"mongodb://localhost:27017/"}
                                />
                            </ConfigField>

                            <ConfigField
                                fieldName={"game.collection"}
                                description={
                                    "The name of the collection in your game database."
                                }
                            >
                                <input type={"text"} placeholder={"game"} />
                            </ConfigField>
                        </ConfigSection>

                        <ConfigSection title={"Language"}>
                            <ConfigField
                                fieldName={"language"}
                                description={
                                    "The language culture of your server."
                                }
                            >
                                <input type={"text"} placeholder={"en-US"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"fallback"}
                                description={
                                    "The fallback language culture of your server."
                                }
                            >
                                <input type={"text"} placeholder={"en-US"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"document"}
                                description={
                                    "The document name of your language files."
                                }
                            >
                                <input type={"text"} placeholder={"EN"} />
                            </ConfigField>
                        </ConfigSection>

                        <ConfigSection title={"Account"}>
                            <ConfigField
                                fieldName={"autoCreate"}
                                description={
                                    "Whether or not to automatically create an account for a user on game login."
                                }
                            >
                                <input type={"checkbox"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"EXPERIMENTAL_RealPassword"}
                                description={
                                    "Whether or not to use the real password for authentication."
                                }
                            >
                                <input type={"checkbox"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"defaultPermissions"}
                                description={
                                    "The default permissions to give to a user on account creation. Separate each permission with a comma."
                                }
                            >
                                <input type={"text"} placeholder={"user"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"maxPlayers"}
                                description={
                                    "The maximum amount of player accounts allowed on the server."
                                }
                            >
                                <input type={"number"} placeholder={"100"} />
                            </ConfigField>
                        </ConfigSection>

                        <ConfigSection title={"Server"}>
                            <ConfigField
                                fieldName={"debugWhitelist"}
                                description={
                                    "Set of packet opcodes and UnionCmd message IDs to whitelist for debugging."
                                }
                            >
                                <input
                                    type={"text"}
                                    placeholder={"0x0000, 0x0001"}
                                />
                            </ConfigField>

                            <ConfigField
                                fieldName={"debugBlacklist"}
                                description={
                                    "Set of packet opcodes and UnionCmd message IDs to blacklist for debugging."
                                }
                            >
                                <input
                                    type={"text"}
                                    placeholder={"0x0000, 0x0001"}
                                />
                            </ConfigField>

                            <ConfigField
                                fieldName={"runMode"}
                                description={
                                    "The run mode of the server. (HYBRID = Both dispatch and game server, DISPATCH_ONLY = Dispatch server, GAME_ONLY = Game server)"
                                }
                            >
                                <select>
                                    <option value={"HYBRID"}>HYBRID</option>
                                    <option value={"DISPATCH_ONLY"}>
                                        DISPATCH_ONLY
                                    </option>
                                    <option value={"GAME_ONLY"}>
                                        GAME_ONLY
                                    </option>
                                </select>
                            </ConfigField>

                            <ConfigField
                                fieldName={"logCommands"}
                                description={
                                    "Whether or not to log commands to the console."
                                }
                            >
                                <input type={"checkbox"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"http.bindAddress"}
                                description={
                                    "The address to bind the HTTP server to."
                                }
                            >
                                <input type={"text"} placeholder={"0.0.0.0"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"http.bindPort"}
                                description={
                                    "The port to bind the HTTP server to."
                                }
                            >
                                <input type={"number"} placeholder={"443"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"http.accessAddress"}
                                description={
                                    "The address to access the HTTP server from."
                                }
                            >
                                <input
                                    type={"text"}
                                    placeholder={"127.0.0.1"}
                                />
                            </ConfigField>

                            <ConfigField
                                fieldName={"http.accessPort"}
                                description={
                                    "The port to access the HTTP server from."
                                }
                            >
                                <input type={"number"} placeholder={"0"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"http.encryption.useEncryption"}
                                description={
                                    "Whether or not to use encryption for the HTTP server."
                                }
                            >
                                <input type={"checkbox"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"http.encryption.useInRouting"}
                                description={"Should HTTPS be used in routing?"}
                            >
                                <input type={"checkbox"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"http.encryption.keystore"}
                                description={"The path to the keystore file."}
                            >
                                <input
                                    type={"text"}
                                    placeholder={"./keystore.p12"}
                                />
                            </ConfigField>

                            <ConfigField
                                fieldName={"http.encryption.keystorePassword"}
                                description={
                                    "The password to the keystore file."
                                }
                            >
                                <input type={"text"} placeholder={"password"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"http.policies.cors.enabled"}
                                description={"Whether or not to enable CORS."}
                            >
                                <input type={"checkbox"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"http.policies.cors.allowedOrigins"}
                                description={
                                    "The allowed origins for CORS. Separate each origin with a comma."
                                }
                            >
                                <input type={"text"} placeholder={"*"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"http.files.indexFile"}
                                description={
                                    "The path index file for the HTTP server."
                                }
                            >
                                <input
                                    type={"text"}
                                    placeholder={"./index.html"}
                                />
                            </ConfigField>

                            <ConfigField
                                fieldName={"http.files.errorFile"}
                                description={
                                    "The path error file for the HTTP server."
                                }
                            >
                                <input
                                    type={"text"}
                                    placeholder={"./error.html"}
                                />
                            </ConfigField>

                            <ConfigField
                                fieldName={"game.bindAddress"}
                                description={
                                    "The address to bind the game server to."
                                }
                            >
                                <input type={"text"} placeholder={"0.0.0.0"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"game.bindPort"}
                                description={
                                    "The port to bind the game server to."
                                }
                            >
                                <input type={"number"} placeholder={"22102"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"game.accessAddress"}
                                description={
                                    "The address to access the game server from. Used in default region."
                                }
                            >
                                <input
                                    type={"text"}
                                    placeholder={"127.0.0.1"}
                                />
                            </ConfigField>

                            <ConfigField
                                fieldName={"game.accessPort"}
                                description={
                                    "The port to access the game server from. Used in default region."
                                }
                            >
                                <input type={"number"} placeholder={"0"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"game.loadEntitiesForPlayerRange"}
                                description={
                                    "The range to load entities for a player."
                                }
                            >
                                <input type={"number"} placeholder={"100"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"game.enableScriptInBigWorld"}
                                description={
                                    "Whether or not to enable scripts in the big world."
                                }
                            >
                                <input type={"checkbox"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"game.enableConsole"}
                                description={
                                    "Whether or not to enable the console."
                                }
                            >
                                <input type={"checkbox"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"game.kcpInterval"}
                                description={
                                    "Kcp internal work interval (milliseconds) "
                                }
                            >
                                <input type={"number"} placeholder={"20"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"game.logPackets"}
                                description={
                                    "The level of packets to log. (ALL, MISSING, WHITELIST, BLACKLIST, NONE)"
                                }
                            >
                                <select>
                                    <option value={"ALL"}>ALL</option>
                                    <option value={"MISSING"}>MISSING</option>
                                    <option value={"WHITELIST"}>
                                        WHITELIST
                                    </option>
                                    <option value={"BLACKLIST"}>
                                        BLACKLIST
                                    </option>
                                    <option value={"NONE"}>NONE</option>
                                </select>
                            </ConfigField>

                            <ConfigField
                                fieldName={"game.isShowPacketPayload"}
                                description={
                                    "Whether or not to show the packet payload."
                                }
                            >
                                <input type={"checkbox"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"game.isShowLoopPackets"}
                                description={
                                    "Whether or not to show the annoying loop packets."
                                }
                            >
                                <input type={"checkbox"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={
                                    "game.gameOptions.inventoryLimits.weapons"
                                }
                                description={
                                    "The maximum amount of weapons a player can hold."
                                }
                            >
                                <input type={"number"} placeholder={"2000"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={
                                    "game.gameOptions.inventoryLimits.relics"
                                }
                                description={
                                    "The maximum amount of artifacts a player can hold."
                                }
                            >
                                <input type={"number"} placeholder={"2000"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={
                                    "game.gameOptions.inventoryLimits.materials"
                                }
                                description={
                                    "The maximum amount of materials a player can hold."
                                }
                            >
                                <input type={"number"} placeholder={"2000"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={
                                    "game.gameOptions.inventoryLimits.all"
                                }
                                description={
                                    "The maximum amount of all items a player can hold."
                                }
                            >
                                <input type={"number"} placeholder={"30000"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={
                                    "game.gameOptions.avatarLimits.singlePlayerTeam"
                                }
                                description={
                                    "The maximum amount of players in a single player team."
                                }
                            >
                                <input type={"number"} placeholder={"4"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={
                                    "game.gameOptions.avatarLimits.multiplayerTeam"
                                }
                                description={
                                    "The maximum amount of players in a multiplayer team."
                                }
                            >
                                <input type={"number"} placeholder={"4"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"game.gameOptions.sceneEntityLimit"}
                                description={
                                    "The maximum amount of entities in a scene."
                                }
                            >
                                <input type={"number"} placeholder={"1000"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"game.gameOptions.watchGachaConfig"}
                                description={
                                    "Whether or not to watch the gacha config for changes and reload it."
                                }
                            >
                                <input type={"checkbox"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"game.gameOptions.enableShopItems"}
                                description={
                                    "Whether or not to enable shop items."
                                }
                            >
                                <input type={"checkbox"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"game.gameOptions.staminaUsage"}
                                description={
                                    "Whether or not to consume stamina."
                                }
                            >
                                <input type={"checkbox"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"game.gameOptions.energyUsage"}
                                description={
                                    "Whether or not to consume energy for character bursts."
                                }
                            >
                                <input type={"checkbox"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"game.gameOptions.fishhookTeleport"}
                                description={
                                    "Whether or not to teleport the player to the location of the fishhook when applied on the map."
                                }
                            >
                                <input type={"checkbox"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={
                                    "game.gameOptions.resinOptions.resinUsage"
                                }
                                description={"Whether or not to consume resin."}
                            >
                                <input type={"checkbox"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"game.gameOptions.resinOptions.cap"}
                                description={
                                    "The maximum amount of resin a player can hold."
                                }
                            >
                                <input type={"number"} placeholder={"160"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={
                                    "game.gameOptions.resinOptions.rechargeTime"
                                }
                                description={
                                    "The time it takes for resin to recharge."
                                }
                            >
                                <input type={"number"} placeholder={"480"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"game.joinOptions.welcomeEmotes"}
                                description={
                                    "Set of emote IDs to send to the player when they join the game. Separate with commas."
                                }
                            >
                                <input type={"text"} placeholder={"1,2,3"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"game.joinOptions.welcomeMessage"}
                                description={
                                    "The message to send to the player when they join the game."
                                }
                            >
                                <textarea
                                    placeholder={"Welcome to the server!"}
                                />
                            </ConfigField>

                            <ConfigField
                                fieldName={"game.joinOptions.welcomeMail"}
                                description={
                                    "The items to send to the player when they join the game."
                                }
                            >
                                <BasicButton text={"Add Item"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"game.serverAccount.avatarId"}
                                description={
                                    "The avatar ID of the server account."
                                }
                            >
                                <input
                                    type={"number"}
                                    placeholder={"10000001"}
                                />
                            </ConfigField>

                            <ConfigField
                                fieldName={"game.serverAccount.nameCardId"}
                                description={
                                    "The name card ID of the server account."
                                }
                            >
                                <input
                                    type={"number"}
                                    placeholder={"10000001"}
                                />
                            </ConfigField>

                            <ConfigField
                                fieldName={"game.serverAccount.adventureRank"}
                                description={
                                    "The adventure rank of the server account."
                                }
                            >
                                <input type={"number"} placeholder={"60"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"game.serverAccount.worldLevel"}
                                description={
                                    "The world level of the server account."
                                }
                            >
                                <input type={"number"} placeholder={"7"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"game.serverAccount.nickname"}
                                description={
                                    "The nickname of the server account."
                                }
                            >
                                <input type={"text"} placeholder={"Server"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"game.serverAccount.signature"}
                                description={
                                    "The signature of the server account."
                                }
                            >
                                <input
                                    type={"text"}
                                    placeholder={"Cutting grass..."}
                                />
                            </ConfigField>

                            <ConfigField
                                fieldName={"dispatch.regions"}
                                description={
                                    "The game server regions to dispatch the player to."
                                }
                            >
                                <BasicButton text={"Add Region"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"dispatch.defaultName"}
                                description={"The name of the default region."}
                            >
                                <input
                                    type={"text"}
                                    placeholder={"Grasscutter"}
                                />
                            </ConfigField>

                            <ConfigField
                                fieldName={"dispatch.logRequests"}
                                description={
                                    "The level of requests to log. (ALL, MISSING, WHITELIST, BLACKLIST, NONE)"
                                }
                            >
                                <select>
                                    <option value={"ALL"}>ALL</option>
                                    <option value={"MISSING"}>MISSING</option>
                                    <option value={"WHITELIST"}>
                                        WHITELIST
                                    </option>
                                    <option value={"BLACKLIST"}>
                                        BLACKLIST
                                    </option>
                                    <option value={"NONE"}>NONE</option>
                                </select>
                            </ConfigField>

                            <ConfigField
                                fieldName={"debugMode.serverLoggerLevel"}
                                description={
                                    "Log level of the main server code. (works only with -debug arg). (OFF, ERROR, WARN, INFO, DEBUG, TRACE, ALL)"
                                }
                            >
                                <select>
                                    <option value={"OFF"}>OFF</option>
                                    <option value={"ERROR"}>ERROR</option>
                                    <option value={"WARN"}>WARN</option>
                                    <option value={"INFO"}>INFO</option>
                                    <option value={"DEBUG"}>DEBUG</option>
                                    <option value={"TRACE"}>TRACE</option>
                                    <option value={"ALL"}>ALL</option>
                                </select>
                            </ConfigField>

                            <ConfigField
                                fieldName={"debugMode.servicesLoggerLevel"}
                                description={
                                    "Log level of third-party services. (works only with -debug arg). (OFF, ERROR, WARN, INFO, DEBUG, TRACE, ALL)"
                                }
                            >
                                <select>
                                    <option value={"OFF"}>OFF</option>
                                    <option value={"ERROR"}>ERROR</option>
                                    <option value={"WARN"}>WARN</option>
                                    <option value={"INFO"}>INFO</option>
                                    <option value={"DEBUG"}>DEBUG</option>
                                    <option value={"TRACE"}>TRACE</option>
                                    <option value={"ALL"}>ALL</option>
                                </select>
                            </ConfigField>

                            <ConfigField
                                fieldName={"debugMode.logPackets"}
                                description={
                                    "The level of packets to log. (ALL, MISSING, WHITELIST, BLACKLIST, NONE)"
                                }
                            >
                                <select>
                                    <option value={"ALL"}>ALL</option>
                                    <option value={"MISSING"}>MISSING</option>
                                    <option value={"WHITELIST"}>
                                        WHITELIST
                                    </option>
                                    <option value={"BLACKLIST"}>
                                        BLACKLIST
                                    </option>
                                    <option value={"NONE"}>NONE</option>
                                </select>
                            </ConfigField>

                            <ConfigField
                                fieldName={"debugMode.isShowPacketPayload"}
                                description={
                                    "Whether or not to show the packet payload."
                                }
                            >
                                <input type={"checkbox"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"debugMode.isShowLoopPackets"}
                                description={
                                    "Whether or not to show the loop packets."
                                }
                            >
                                <input type={"checkbox"} />
                            </ConfigField>

                            <ConfigField
                                fieldName={"debugMode.logRequests"}
                                description={
                                    "The level of requests to log. (ALL, MISSING, WHITELIST, BLACKLIST, NONE)"
                                }
                            >
                                <select>
                                    <option value={"ALL"}>ALL</option>
                                    <option value={"MISSING"}>MISSING</option>
                                    <option value={"WHITELIST"}>
                                        WHITELIST
                                    </option>
                                    <option value={"BLACKLIST"}>
                                        BLACKLIST
                                    </option>
                                    <option value={"NONE"}>NONE</option>
                                </select>
                            </ConfigField>
                        </ConfigSection>
                    </div>
                </div>
            </div>
        );
    }
}

export default ConfigGen;
