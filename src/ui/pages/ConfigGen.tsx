import React from "react";

import { AiOutlinePlus } from "react-icons/ai";
import { BiCopy, BiDownload } from "react-icons/bi";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import json from "react-syntax-highlighter/dist/esm/languages/hljs/json";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

import StyledHeading from "@components/common/StyledHeading";
import ConfigSection from "@components/config/ConfigSection";
import ConfigField from "@components/config/ConfigField";
import BasicModal from "@components/common/BasicModal";
import BasicButton from "@components/common/BasicButton";
import ListItem from "@components/config/ListItem";

import {
    MailItem,
    Region,
    Config,
    RunMode,
    ServerDebugMode,
    LogLevel
} from "@app/types";
import { getDefaultConfig } from "@app/utils";

import "@css/pages/ConfigGen.css";

SyntaxHighlighter.registerLanguage("json", json);

interface IState {
    mailItems: MailItem[];
    regions: Region[];
    config: Config | null;
}

class ConfigGen extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            mailItems: [],
            regions: [],
            config: null
        };
    }

    private addListItem = (type: "MailItem" | "Region") => {
        if (type === "MailItem") {
            this.setState({
                mailItems: [
                    ...this.state.mailItems,
                    {
                        itemId: parseInt(
                            (
                                document.getElementById(
                                    "config-add-item-id"
                                ) as HTMLInputElement
                            )?.value || "0"
                        ),
                        itemCount: parseInt(
                            (
                                document.getElementById(
                                    "config-add-item-count"
                                ) as HTMLInputElement
                            )?.value || "0"
                        ),
                        itemLevel: parseInt(
                            (
                                document.getElementById(
                                    "config-add-item-level"
                                ) as HTMLInputElement
                            )?.value || "0"
                        )
                    }
                ]
            });
        } else {
            this.setState({
                regions: [
                    ...this.state.regions,
                    {
                        Name:
                            (
                                document.getElementById(
                                    "config-add-region-name"
                                ) as HTMLInputElement
                            )?.value || "",
                        Title:
                            (
                                document.getElementById(
                                    "config-add-region-title"
                                ) as HTMLInputElement
                            )?.value || "",
                        Port: parseInt(
                            (
                                document.getElementById(
                                    "config-add-region-port"
                                ) as HTMLInputElement
                            )?.value || "0"
                        ),
                        Ip:
                            (
                                document.getElementById(
                                    "config-add-region-ip"
                                ) as HTMLInputElement
                            )?.value || ""
                    }
                ]
            });
        }
    };

    private deleteListItem = (item: MailItem | Region) => {
        if (item.hasOwnProperty("itemId")) {
            this.setState({
                mailItems: this.state.mailItems.filter((i) => i !== item)
            });
        } else {
            this.setState({
                regions: this.state.regions.filter((i) => i !== item)
            });
        }
    };

    private prepareConfig = async (): Promise<Config> => {
        let config: Config = getDefaultConfig();

        config.folderStructure.resources =
            (document.getElementById("structure.resources") as HTMLInputElement)
                ?.value || config.folderStructure.resources;
        config.folderStructure.data =
            (document.getElementById("structure.data") as HTMLInputElement)
                ?.value || config.folderStructure.data;
        config.folderStructure.packets =
            (document.getElementById("structure.packets") as HTMLInputElement)
                ?.value || config.folderStructure.packets;
        config.folderStructure.scripts =
            (document.getElementById("structure.scripts") as HTMLInputElement)
                ?.value || config.folderStructure.scripts;
        config.folderStructure.plugins =
            (document.getElementById("structure.plugins") as HTMLInputElement)
                ?.value || config.folderStructure.plugins;

        config.databaseInfo.server.connectionUri =
            (
                document.getElementById(
                    "database.server.connectionUri"
                ) as HTMLInputElement
            )?.value || config.databaseInfo.server.connectionUri;
        config.databaseInfo.server.collection =
            (
                document.getElementById(
                    "database.server.collection"
                ) as HTMLInputElement
            )?.value || config.databaseInfo.server.collection;
        config.databaseInfo.game.connectionUri =
            (
                document.getElementById(
                    "database.game.connectionUri"
                ) as HTMLInputElement
            )?.value || config.databaseInfo.game.connectionUri;
        config.databaseInfo.game.collection =
            (
                document.getElementById(
                    "database.game.collection"
                ) as HTMLInputElement
            )?.value || config.databaseInfo.game.collection;

        config.language.language =
            (document.getElementById("language.language") as HTMLInputElement)
                ?.value || config.language.language;
        config.language.fallback =
            (document.getElementById("language.fallback") as HTMLInputElement)
                ?.value || config.language.fallback;
        config.language.document =
            (document.getElementById("language.document") as HTMLInputElement)
                ?.value || config.language.document;

        config.account.autoCreate =
            (document.getElementById("account.autoCreate") as HTMLInputElement)
                ?.checked || config.account.autoCreate;
        config.account.EXPERIMENTAL_RealPassword =
            (
                document.getElementById(
                    "account.EXPERIMENTAL_RealPassword"
                ) as HTMLInputElement
            )?.checked || config.account.EXPERIMENTAL_RealPassword;
        config.account.defaultPermissions = (
            document.getElementById(
                "account.defaultPermissions"
            ) as HTMLInputElement
        )?.value
            ? (
                  document.getElementById(
                      "account.defaultPermissions"
                  ) as HTMLInputElement
              ).value
                  .replaceAll(" ", "")
                  .split(",")
            : config.account.defaultPermissions;
        config.account.maxPlayers =
            parseInt(
                (
                    document.getElementById(
                        "account.maxPlayers"
                    ) as HTMLInputElement
                )?.value
            ) || config.account.maxPlayers;

        config.server.debugWhitelist = (
            document.getElementById("server.debugWhitelist") as HTMLInputElement
        )?.value
            ? (
                  document.getElementById(
                      "server.debugWhitelist"
                  ) as HTMLInputElement
              ).value
                  .replaceAll(" ", "")
                  .split(",")
                  .map(Number)
            : config.server.debugWhitelist;
        config.server.debugBlacklist = (
            document.getElementById("server.debugBlacklist") as HTMLInputElement
        )?.value
            ? (
                  document.getElementById(
                      "server.debugBlacklist"
                  ) as HTMLInputElement
              ).value
                  .replaceAll(" ", "")
                  .split(",")
                  .map(Number)
            : config.server.debugBlacklist;
        config.server.runMode =
            ((document.getElementById("server.runMode") as HTMLSelectElement)
                ?.options[
                (document.getElementById("server.runMode") as HTMLSelectElement)
                    ?.selectedIndex ?? 0
            ]?.value as RunMode) || config.server.runMode;
        config.server.logCommands =
            (document.getElementById("server.logCommands") as HTMLInputElement)
                ?.checked || config.server.logCommands;

        config.server.http.bindAddress =
            (
                document.getElementById(
                    "server.http.bindAddress"
                ) as HTMLInputElement
            )?.value || config.server.http.bindAddress;
        config.server.http.bindPort =
            parseInt(
                (
                    document.getElementById(
                        "server.http.bindPort"
                    ) as HTMLInputElement
                )?.value
            ) || config.server.http.bindPort;
        config.server.http.accessAddress =
            (
                document.getElementById(
                    "server.http.accessAddress"
                ) as HTMLInputElement
            )?.value || config.server.http.accessAddress;
        config.server.http.accessPort =
            parseInt(
                (
                    document.getElementById(
                        "server.http.accessPort"
                    ) as HTMLInputElement
                )?.value
            ) || config.server.http.accessPort;
        config.server.http.encryption.useEncryption =
            (
                document.getElementById(
                    "server.http.encryption.useEncryption"
                ) as HTMLInputElement
            )?.checked || config.server.http.encryption.useEncryption;
        config.server.http.encryption.useInRouting =
            (
                document.getElementById(
                    "server.http.encryption.useInRouting"
                ) as HTMLInputElement
            )?.checked || config.server.http.encryption.useInRouting;
        config.server.http.encryption.keystore =
            (
                document.getElementById(
                    "server.http.encryption.keystore"
                ) as HTMLInputElement
            )?.value || config.server.http.encryption.keystore;
        config.server.http.encryption.keystorePassword =
            (
                document.getElementById(
                    "server.http.encryption.keystorePassword"
                ) as HTMLInputElement
            )?.value || config.server.http.encryption.keystorePassword;
        config.server.http.policies.cors.enabled =
            (
                document.getElementById(
                    "server.http.policies.cors.enabled"
                ) as HTMLInputElement
            )?.checked || config.server.http.policies.cors.enabled;
        config.server.http.policies.cors.allowedOrigins = (
            document.getElementById(
                "server.http.policies.cors.allowedOrigins"
            ) as HTMLInputElement
        )?.value
            ? (
                  document.getElementById(
                      "server.http.policies.cors.allowedOrigins"
                  ) as HTMLInputElement
              ).value
                  .replaceAll(" ", "")
                  .split(",")
            : config.server.http.policies.cors.allowedOrigins;
        !config.server.http.policies.cors.allowedOrigins.includes("*")
            ? config.server.http.policies.cors.allowedOrigins.push("*")
            : null;
        config.server.http.files.indexFile =
            (
                document.getElementById(
                    "server.http.files.indexFile"
                ) as HTMLInputElement
            )?.value || config.server.http.files.indexFile;
        config.server.http.files.errorFile =
            (
                document.getElementById(
                    "server.http.files.errorFile"
                ) as HTMLInputElement
            )?.value || config.server.http.files.errorFile;

        config.server.game.bindAddress =
            (
                document.getElementById(
                    "server.game.bindAddress"
                ) as HTMLInputElement
            )?.value || config.server.game.bindAddress;
        config.server.game.bindPort =
            parseInt(
                (
                    document.getElementById(
                        "server.game.bindPort"
                    ) as HTMLInputElement
                )?.value
            ) || config.server.game.bindPort;
        config.server.game.accessAddress =
            (
                document.getElementById(
                    "server.game.accessAddress"
                ) as HTMLInputElement
            )?.value || config.server.game.accessAddress;
        config.server.game.accessPort =
            parseInt(
                (
                    document.getElementById(
                        "server.game.accessPort"
                    ) as HTMLInputElement
                )?.value
            ) || config.server.game.accessPort;
        config.server.game.loadEntitiesForPlayerRange =
            parseInt(
                (
                    document.getElementById(
                        "server.game.loadEntitiesForPlayerRange"
                    ) as HTMLInputElement
                )?.value
            ) || config.server.game.loadEntitiesForPlayerRange;
        config.server.game.enableScriptInBigWorld =
            (
                document.getElementById(
                    "server.game.enableScriptInBigWorld"
                ) as HTMLInputElement
            )?.checked || config.server.game.enableScriptInBigWorld;
        config.server.game.enableConsole =
            (
                document.getElementById(
                    "server.game.enableConsole"
                ) as HTMLInputElement
            )?.checked || config.server.game.enableConsole;
        config.server.game.kcpInterval =
            parseInt(
                (
                    document.getElementById(
                        "server.game.kcpInterval"
                    ) as HTMLInputElement
                )?.value
            ) || config.server.game.kcpInterval;
        config.server.game.logPackets =
            ((
                document.getElementById(
                    "server.game.logPackets"
                ) as HTMLSelectElement
            )?.options[
                (
                    document.getElementById(
                        "server.game.logPackets"
                    ) as HTMLSelectElement
                )?.selectedIndex ?? 0
            ]?.value as ServerDebugMode) || config.server.game.logPackets;
        config.server.game.isShowPacketPayload =
            (
                document.getElementById(
                    "server.game.isShowPacketPayload"
                ) as HTMLInputElement
            )?.checked || config.server.game.isShowPacketPayload;
        config.server.game.isShowLoopPackets =
            (
                document.getElementById(
                    "server.game.isShowLoopPackets"
                ) as HTMLInputElement
            )?.checked || config.server.game.isShowLoopPackets;
        config.server.game.gameOptions.inventoryLimits.weapons =
            parseInt(
                (
                    document.getElementById(
                        "server.game.gameOptions.inventoryLimits.weapons"
                    ) as HTMLInputElement
                )?.value
            ) || config.server.game.gameOptions.inventoryLimits.weapons;
        config.server.game.gameOptions.inventoryLimits.relics =
            parseInt(
                (
                    document.getElementById(
                        "server.game.gameOptions.inventoryLimits.relics"
                    ) as HTMLInputElement
                )?.value
            ) || config.server.game.gameOptions.inventoryLimits.relics;
        config.server.game.gameOptions.inventoryLimits.materials =
            parseInt(
                (
                    document.getElementById(
                        "server.game.gameOptions.inventoryLimits.materials"
                    ) as HTMLInputElement
                )?.value
            ) || config.server.game.gameOptions.inventoryLimits.materials;
        config.server.game.gameOptions.inventoryLimits.furniture =
            parseInt(
                (
                    document.getElementById(
                        "server.game.gameOptions.inventoryLimits.furniture"
                    ) as HTMLInputElement
                )?.value
            ) || config.server.game.gameOptions.inventoryLimits.furniture;
        config.server.game.gameOptions.inventoryLimits.all =
            parseInt(
                (
                    document.getElementById(
                        "server.game.gameOptions.inventoryLimits.all"
                    ) as HTMLInputElement
                )?.value
            ) || config.server.game.gameOptions.inventoryLimits.all;
        config.server.game.gameOptions.avatarLimits.singlePlayerTeam =
            parseInt(
                (
                    document.getElementById(
                        "server.game.gameOptions.avatarLimits.singlePlayerTeam"
                    ) as HTMLInputElement
                )?.value
            ) || config.server.game.gameOptions.avatarLimits.singlePlayerTeam;
        config.server.game.gameOptions.avatarLimits.multiPlayerTeam =
            parseInt(
                (
                    document.getElementById(
                        "server.game.gameOptions.avatarLimits.multiPlayerTeam"
                    ) as HTMLInputElement
                )?.value
            ) || config.server.game.gameOptions.avatarLimits.multiPlayerTeam;
        config.server.game.gameOptions.sceneEntityLimit =
            parseInt(
                (
                    document.getElementById(
                        "server.game.gameOptions.sceneEntityLimit"
                    ) as HTMLInputElement
                )?.value
            ) || config.server.game.gameOptions.sceneEntityLimit;
        config.server.game.gameOptions.watchGachaConfig =
            (
                document.getElementById(
                    "server.game.gameOptions.watchGachaConfig"
                ) as HTMLInputElement
            )?.checked || config.server.game.gameOptions.watchGachaConfig;
        config.server.game.gameOptions.enableShopItems =
            (
                document.getElementById(
                    "server.game.gameOptions.enableShopItems"
                ) as HTMLInputElement
            )?.checked || config.server.game.gameOptions.enableShopItems;
        config.server.game.gameOptions.staminaUsage =
            (
                document.getElementById(
                    "server.game.gameOptions.staminaUsage"
                ) as HTMLInputElement
            )?.checked || config.server.game.gameOptions.staminaUsage;
        config.server.game.gameOptions.energyUsage =
            (
                document.getElementById(
                    "server.game.gameOptions.energyUsage"
                ) as HTMLInputElement
            )?.checked || config.server.game.gameOptions.energyUsage;
        config.server.game.gameOptions.fishhookTeleport =
            (
                document.getElementById(
                    "server.game.gameOptions.fishhookTeleport"
                ) as HTMLInputElement
            )?.checked || config.server.game.gameOptions.fishhookTeleport;
        config.server.game.gameOptions.resinOptions.resinUsage =
            (
                document.getElementById(
                    "server.game.gameOptions.resinOptions.resinUsage"
                ) as HTMLInputElement
            )?.checked ||
            config.server.game.gameOptions.resinOptions.resinUsage;
        config.server.game.gameOptions.resinOptions.cap =
            parseInt(
                (
                    document.getElementById(
                        "server.game.gameOptions.resinOptions.cap"
                    ) as HTMLInputElement
                )?.value
            ) || config.server.game.gameOptions.resinOptions.cap;
        config.server.game.gameOptions.resinOptions.rechargeTime =
            parseInt(
                (
                    document.getElementById(
                        "server.game.gameOptions.resinOptions.rechargeTime"
                    ) as HTMLInputElement
                )?.value
            ) || config.server.game.gameOptions.resinOptions.rechargeTime;
        config.server.game.joinOptions.welcomeEmotes = (
            document.getElementById(
                "server.game.joinOptions.welcomeEmotes"
            ) as HTMLInputElement
        )?.value
            ? (
                  document.getElementById(
                      "server.game.joinOptions.welcomeEmotes"
                  ) as HTMLInputElement
              )?.value
                  .replaceAll(" ", "")
                  .split(",")
                  .map(Number)
            : config.server.game.joinOptions.welcomeEmotes;
        config.server.game.joinOptions.welcomeMessage =
            (
                document.getElementById(
                    "server.game.joinOptions.welcomeMessage"
                ) as HTMLInputElement
            )?.value || config.server.game.joinOptions.welcomeMessage;
        config.server.game.joinOptions.welcomeMail.title =
            (
                document.getElementById(
                    "server.game.joinOptions.welcomeMail.title"
                ) as HTMLInputElement
            )?.value || config.server.game.joinOptions.welcomeMail.title;
        config.server.game.joinOptions.welcomeMail.content =
            (
                document.getElementById(
                    "server.game.joinOptions.welcomeMail.content"
                ) as HTMLInputElement
            )?.value || config.server.game.joinOptions.welcomeMail.content;
        config.server.game.joinOptions.welcomeMail.sender =
            (
                document.getElementById(
                    "server.game.joinOptions.welcomeMail.sender"
                ) as HTMLInputElement
            )?.value || config.server.game.joinOptions.welcomeMail.sender;
        config.server.game.joinOptions.welcomeMail.items =
            this.state.mailItems ||
            config.server.game.joinOptions.welcomeMail.items;
        config.server.game.serverAccount.avatarId =
            parseInt(
                (
                    document.getElementById(
                        "server.game.serverAccount.avatarId"
                    ) as HTMLInputElement
                )?.value
            ) || config.server.game.serverAccount.avatarId;
        config.server.game.serverAccount.nameCardId =
            parseInt(
                (
                    document.getElementById(
                        "server.game.serverAccount.nameCardId"
                    ) as HTMLInputElement
                )?.value
            ) || config.server.game.serverAccount.nameCardId;
        config.server.game.serverAccount.adventureRank =
            parseInt(
                (
                    document.getElementById(
                        "server.game.serverAccount.adventureRank"
                    ) as HTMLInputElement
                )?.value
            ) || config.server.game.serverAccount.adventureRank;
        config.server.game.serverAccount.worldLevel =
            parseInt(
                (
                    document.getElementById(
                        "server.game.serverAccount.worldLevel"
                    ) as HTMLInputElement
                )?.value
            ) || config.server.game.serverAccount.worldLevel;
        config.server.game.serverAccount.nickname =
            (
                document.getElementById(
                    "server.game.serverAccount.nickname"
                ) as HTMLInputElement
            )?.value || config.server.game.serverAccount.nickname;
        config.server.game.serverAccount.signature =
            (
                document.getElementById(
                    "server.game.serverAccount.signature"
                ) as HTMLInputElement
            )?.value || config.server.game.serverAccount.signature;

        config.server.dispatch.regions =
            this.state.regions ?? config.server.dispatch.regions;
        config.server.dispatch.defaultName =
            (
                document.getElementById(
                    "server.dispatch.defaultName"
                ) as HTMLInputElement
            )?.value || config.server.dispatch.defaultName;
        config.server.dispatch.logRequests =
            ((
                document.getElementById(
                    "server.dispatch.logRequests"
                ) as HTMLSelectElement
            )?.options[
                (
                    document.getElementById(
                        "server.dispatch.logRequests"
                    ) as HTMLSelectElement
                )?.selectedIndex ?? 0
            ].value as ServerDebugMode) || config.server.dispatch.logRequests;

        config.server.debugMode.serverLoggerLevel =
            ((
                document.getElementById(
                    "server.debugMode.serverLoggerLevel"
                ) as HTMLSelectElement
            )?.options[
                (
                    document.getElementById(
                        "server.debugMode.serverLoggerLevel"
                    ) as HTMLSelectElement
                )?.selectedIndex ?? 0
            ].value as LogLevel) || config.server.debugMode.serverLoggerLevel;
        config.server.debugMode.servicesLoggersLevel =
            ((
                document.getElementById(
                    "server.debugMode.servicesLoggersLevel"
                ) as HTMLSelectElement
            )?.options[
                (
                    document.getElementById(
                        "server.debugMode.servicesLoggersLevel"
                    ) as HTMLSelectElement
                )?.selectedIndex ?? 0
            ].value as LogLevel) ||
            config.server.debugMode.servicesLoggersLevel;
        config.server.debugMode.logPackets =
            ((
                document.getElementById(
                    "server.debugMode.logPackets"
                ) as HTMLSelectElement
            )?.options[
                (
                    document.getElementById(
                        "server.debugMode.logPackets"
                    ) as HTMLSelectElement
                )?.selectedIndex ?? 0
            ].value as ServerDebugMode) || config.server.debugMode.logPackets;
        config.server.debugMode.isShowPacketPayload =
            (
                document.getElementById(
                    "server.debugMode.isShowPacketPayload"
                ) as HTMLInputElement
            )?.checked || config.server.debugMode.isShowPacketPayload;
        config.server.debugMode.isShowLoopPackets =
            (
                document.getElementById(
                    "server.debugMode.isShowLoopPackets"
                ) as HTMLInputElement
            )?.checked || config.server.debugMode.isShowLoopPackets;
        config.server.debugMode.logRequests =
            ((
                document.getElementById(
                    "server.debugMode.logRequests"
                ) as HTMLSelectElement
            )?.options[
                (
                    document.getElementById(
                        "server.debugMode.logRequests"
                    ) as HTMLSelectElement
                )?.selectedIndex ?? 0
            ].value as ServerDebugMode) || config.server.debugMode.logRequests;

        return config;
    };

    private generateConfig = () => {
        this.prepareConfig().then((config) => this.setState({ config }));
    };

    private copyConfig = () => {
        navigator.clipboard
            .writeText(JSON.stringify(this.state.config, null, 2))
            .then(() => alert("Config copied to clipboard!"));
    };

    private downloadConfig = () => {
        const element = document.createElement("a");
        const file = new Blob([JSON.stringify(this.state.config, null, 2)], {
            type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "config.json";
        document.body.appendChild(element);
        element.click();
    };

    render() {
        return (
            <>
                <div className={"ConfigGen"}>
                    <div className={"ConfigGen_Container"}>
                        <StyledHeading text={"Config Generator"} />
                        <h3>Generate a config file for your server.</h3>

                        <div className={"ConfigGen_Config"}>
                            <ConfigSection title={"Folder Structure"}>
                                <ConfigField
                                    fieldName={"resources"}
                                    description={
                                        "The path to your RESOURCES folder on your computer."
                                    }
                                >
                                    <input
                                        type={"text"}
                                        placeholder={"./resources/"}
                                        id={"structure.resources"}
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"data"}
                                    description={
                                        "The path to your DATA folder on your computer."
                                    }
                                >
                                    <input
                                        type={"text"}
                                        placeholder={"./data/"}
                                        id={"structure.data"}
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"packets"}
                                    description={
                                        "The path to your PACKETS folder on your computer. (optional)"
                                    }
                                >
                                    <input
                                        type={"text"}
                                        placeholder={"./packets/"}
                                        id={"structure.packets"}
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"scripts"}
                                    description={
                                        "The path to your SCRIPTS folder on your computer."
                                    }
                                >
                                    <input
                                        type={"text"}
                                        placeholder={"./scripts/"}
                                        id={"structure.scripts"}
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"plugins"}
                                    description={
                                        "The path to your PLUGINS folder on your computer."
                                    }
                                >
                                    <input
                                        type={"text"}
                                        placeholder={"./plugins/"}
                                        id={"structure.plugins"}
                                    />
                                </ConfigField>
                            </ConfigSection>

                            <ConfigSection title={"Database Info"}>
                                <ConfigField
                                    fieldName={"server.connectionUri"}
                                    description={
                                        "The MongoDB connection URI to your server database."
                                    }
                                >
                                    <input
                                        type={"text"}
                                        placeholder={
                                            "mongodb://localhost:27017/"
                                        }
                                        id={"database.server.connectionUri"}
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"server.collection"}
                                    description={
                                        "The name of the collection in your server database."
                                    }
                                >
                                    <input
                                        type={"text"}
                                        placeholder={"server"}
                                        id={"database.server.collection"}
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"game.connectionUri"}
                                    description={
                                        "The connection URI to your game database."
                                    }
                                >
                                    <input
                                        type={"text"}
                                        placeholder={
                                            "mongodb://localhost:27017/"
                                        }
                                        id={"database.game.connectionUri"}
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"game.collection"}
                                    description={
                                        "The name of the collection in your game database."
                                    }
                                >
                                    <input
                                        type={"text"}
                                        placeholder={"game"}
                                        id={"database.game.collection"}
                                    />
                                </ConfigField>
                            </ConfigSection>

                            <ConfigSection title={"Language"}>
                                <ConfigField
                                    fieldName={"language"}
                                    description={
                                        "The language locale of your server."
                                    }
                                >
                                    <input
                                        type={"text"}
                                        placeholder={"en-US"}
                                        id={"language.language"}
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"fallback"}
                                    description={
                                        "The fallback language locale of your server."
                                    }
                                >
                                    <input
                                        type={"text"}
                                        placeholder={"en-US"}
                                        id={"language.fallback"}
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"document"}
                                    description={
                                        "The short name of your server's language."
                                    }
                                >
                                    <input
                                        type={"text"}
                                        placeholder={"EN"}
                                        id={"language.document"}
                                    />
                                </ConfigField>
                            </ConfigSection>

                            <ConfigSection title={"Account"}>
                                <ConfigField
                                    fieldName={"autoCreate"}
                                    description={
                                        "Whether or not to automatically create an account for a user on game login."
                                    }
                                >
                                    <input
                                        type={"checkbox"}
                                        id={"account.autoCreate"}
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"EXPERIMENTAL_RealPassword"}
                                    description={
                                        "Whether or not to use the real password for authentication."
                                    }
                                >
                                    <input
                                        type={"checkbox"}
                                        id={"account.EXPERIMENTAL_RealPassword"}
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"defaultPermissions"}
                                    description={
                                        "The default permissions to give to a user on account creation. Separate each permission with a comma."
                                    }
                                >
                                    <input
                                        type={"text"}
                                        placeholder={"user"}
                                        id={"account.defaultPermissions"}
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"maxPlayers"}
                                    description={
                                        "The maximum amount of player accounts allowed on the server."
                                    }
                                >
                                    <input
                                        type={"number"}
                                        placeholder={"100"}
                                        id={"account.maxPlayers"}
                                    />
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
                                        placeholder={"1159, 1116"}
                                        id={"server.debugWhitelist"}
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
                                        placeholder={"1159, 1116"}
                                        id={"server.debugBlacklist"}
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"runMode"}
                                    description={
                                        "The run mode of the server. (HYBRID = Both dispatch and game server, DISPATCH_ONLY = Dispatch server, GAME_ONLY = Game server)"
                                    }
                                >
                                    <select
                                        id={"server.runMode"}
                                        defaultValue={"HYBRID"}
                                    >
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
                                    <input
                                        type={"checkbox"}
                                        id={"server.logCommands"}
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"http.bindAddress"}
                                    description={
                                        "The address to bind the HTTP server to."
                                    }
                                >
                                    <input
                                        type={"text"}
                                        placeholder={"0.0.0.0"}
                                        id={"server.http.bindAddress"}
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"http.bindPort"}
                                    description={
                                        "The port to bind the HTTP server to."
                                    }
                                >
                                    <input
                                        type={"number"}
                                        placeholder={"443"}
                                        id={"server.http.bindPort"}
                                    />
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
                                        id={"server.http.accessAddress"}
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"http.accessPort"}
                                    description={
                                        "The port to access the HTTP server from."
                                    }
                                >
                                    <input
                                        type={"number"}
                                        placeholder={"0"}
                                        id={"server.http.accessPort"}
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"http.encryption.useEncryption"}
                                    description={
                                        "Whether or not to use encryption for the HTTP server."
                                    }
                                >
                                    <input
                                        type={"checkbox"}
                                        defaultChecked={true}
                                        id={
                                            "server.http.encryption.useEncryption"
                                        }
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"http.encryption.useInRouting"}
                                    description={
                                        "Should HTTPS be used in routing?"
                                    }
                                >
                                    <input
                                        type={"checkbox"}
                                        defaultChecked={true}
                                        id={
                                            "server.http.encryption.useInRouting"
                                        }
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"http.encryption.keystore"}
                                    description={
                                        "The path to the keystore file."
                                    }
                                >
                                    <input
                                        type={"text"}
                                        placeholder={"./keystore.p12"}
                                        id={"server.http.encryption.keystore"}
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={
                                        "http.encryption.keystorePassword"
                                    }
                                    description={
                                        "The password to the keystore file."
                                    }
                                >
                                    <input
                                        type={"text"}
                                        placeholder={"password"}
                                        id={
                                            "server.http.encryption.keystorePassword"
                                        }
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"http.policies.cors.enabled"}
                                    description={
                                        "Whether or not to enable CORS."
                                    }
                                >
                                    <input
                                        type={"checkbox"}
                                        id={"server.http.policies.cors.enabled"}
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={
                                        "http.policies.cors.allowedOrigins"
                                    }
                                    description={
                                        "The allowed origins for CORS. Separate each origin with a comma."
                                    }
                                >
                                    <input
                                        type={"text"}
                                        placeholder={"*"}
                                        id={
                                            "server.http.policies.cors.allowedOrigins"
                                        }
                                    />
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
                                        id={"server.http.files.indexFile"}
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
                                        id={"server.http.files.errorFile"}
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"game.bindAddress"}
                                    description={
                                        "The address to bind the game server to."
                                    }
                                >
                                    <input
                                        type={"text"}
                                        placeholder={"0.0.0.0"}
                                        id={"server.game.bindAddress"}
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"game.bindPort"}
                                    description={
                                        "The port to bind the game server to."
                                    }
                                >
                                    <input
                                        type={"number"}
                                        placeholder={"22102"}
                                        id={"server.game.bindPort"}
                                    />
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
                                        id={"server.game.accessAddress"}
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"game.accessPort"}
                                    description={
                                        "The port to access the game server from. Used in default region."
                                    }
                                >
                                    <input
                                        type={"number"}
                                        placeholder={"0"}
                                        id={"server.game.accessPort"}
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={
                                        "game.loadEntitiesForPlayerRange"
                                    }
                                    description={
                                        "The range to load entities for a player."
                                    }
                                >
                                    <input
                                        type={"number"}
                                        placeholder={"100"}
                                        id={
                                            "server.game.loadEntitiesForPlayerRange"
                                        }
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"game.enableScriptInBigWorld"}
                                    description={
                                        "Whether or not to enable scripts in the big world."
                                    }
                                >
                                    <input
                                        type={"checkbox"}
                                        id={
                                            "server.game.enableScriptInBigWorld"
                                        }
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"game.enableConsole"}
                                    description={
                                        "Whether or not to enable the console."
                                    }
                                >
                                    <input
                                        type={"checkbox"}
                                        defaultChecked={true}
                                        id={"server.game.enableConsole"}
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"game.kcpInterval"}
                                    description={
                                        "Kcp internal work interval (milliseconds) "
                                    }
                                >
                                    <input
                                        type={"number"}
                                        placeholder={"20"}
                                        id={"server.game.kcpInterval"}
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"game.logPackets"}
                                    description={
                                        "The level of packets to log. (ALL, MISSING, WHITELIST, BLACKLIST, NONE)"
                                    }
                                >
                                    <select
                                        id={"server.game.logPackets"}
                                        defaultValue={"NONE"}
                                    >
                                        <option value={"ALL"}>ALL</option>
                                        <option value={"MISSING"}>
                                            MISSING
                                        </option>
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
                                    <input
                                        type={"checkbox"}
                                        id={"server.game.isShowPacketPayload"}
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"game.isShowLoopPackets"}
                                    description={
                                        "Whether or not to show the annoying loop packets."
                                    }
                                >
                                    <input
                                        type={"checkbox"}
                                        id={"server.game.isShowLoopPackets"}
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={
                                        "game.gameOptions.inventoryLimits.weapons"
                                    }
                                    description={
                                        "The maximum amount of weapons a player can hold."
                                    }
                                >
                                    <input
                                        type={"number"}
                                        placeholder={"2000"}
                                        id={
                                            "server.game.gameOptions.inventoryLimits.weapons"
                                        }
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={
                                        "game.gameOptions.inventoryLimits.relics"
                                    }
                                    description={
                                        "The maximum amount of artifacts a player can hold."
                                    }
                                >
                                    <input
                                        type={"number"}
                                        placeholder={"2000"}
                                        id={
                                            "server.game.gameOptions.inventoryLimits.relics"
                                        }
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={
                                        "game.gameOptions.inventoryLimits.materials"
                                    }
                                    description={
                                        "The maximum amount of materials a player can hold."
                                    }
                                >
                                    <input
                                        type={"number"}
                                        placeholder={"2000"}
                                        id={
                                            "server.game.gameOptions.inventoryLimits.materials"
                                        }
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={
                                        "game.gameOptions.inventoryLimits.all"
                                    }
                                    description={
                                        "The maximum amount of all items a player can hold."
                                    }
                                >
                                    <input
                                        type={"number"}
                                        placeholder={"30000"}
                                        id={
                                            "server.game.gameOptions.inventoryLimits.all"
                                        }
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={
                                        "game.gameOptions.avatarLimits.singlePlayerTeam"
                                    }
                                    description={
                                        "The maximum amount of players in a single player team."
                                    }
                                >
                                    <input
                                        type={"number"}
                                        placeholder={"4"}
                                        id={
                                            "server.game.gameOptions.avatarLimits.singlePlayerTeam"
                                        }
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={
                                        "game.gameOptions.avatarLimits.multiplayerTeam"
                                    }
                                    description={
                                        "The maximum amount of players in a multiplayer team."
                                    }
                                >
                                    <input
                                        type={"number"}
                                        placeholder={"4"}
                                        id={
                                            "server.game.gameOptions.avatarLimits.multiplayerTeam"
                                        }
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={
                                        "game.gameOptions.sceneEntityLimit"
                                    }
                                    description={
                                        "The maximum amount of entities in a scene."
                                    }
                                >
                                    <input
                                        type={"number"}
                                        placeholder={"1000"}
                                        id={
                                            "server.game.gameOptions.sceneEntityLimit"
                                        }
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={
                                        "game.gameOptions.watchGachaConfig"
                                    }
                                    description={
                                        "Whether or not to watch the gacha config for changes and reload it."
                                    }
                                >
                                    <input
                                        type={"checkbox"}
                                        id={
                                            "server.game.gameOptions.watchGachaConfig"
                                        }
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={
                                        "game.gameOptions.enableShopItems"
                                    }
                                    description={
                                        "Whether or not to enable shop items."
                                    }
                                >
                                    <input
                                        type={"checkbox"}
                                        defaultChecked={true}
                                        id={
                                            "server.game.gameOptions.enableShopItems"
                                        }
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"game.gameOptions.staminaUsage"}
                                    description={
                                        "Whether or not to consume stamina."
                                    }
                                >
                                    <input
                                        type={"checkbox"}
                                        defaultChecked={true}
                                        id={
                                            "server.game.gameOptions.staminaUsage"
                                        }
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"game.gameOptions.energyUsage"}
                                    description={
                                        "Whether or not to consume energy for character bursts."
                                    }
                                >
                                    <input
                                        type={"checkbox"}
                                        defaultChecked={true}
                                        id={
                                            "server.game.gameOptions.energyUsage"
                                        }
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={
                                        "game.gameOptions.fishhookTeleport"
                                    }
                                    description={
                                        "Whether or not to teleport the player to the location of the fishhook when applied on the map."
                                    }
                                >
                                    <input
                                        type={"checkbox"}
                                        defaultChecked={true}
                                        id={
                                            "server.game.gameOptions.fishhookTeleport"
                                        }
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={
                                        "game.gameOptions.resinOptions.resinUsage"
                                    }
                                    description={
                                        "Whether or not to consume resin."
                                    }
                                >
                                    <input
                                        type={"checkbox"}
                                        id={
                                            "server.game.gameOptions.resinOptions.resinUsage"
                                        }
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={
                                        "game.gameOptions.resinOptions.cap"
                                    }
                                    description={
                                        "The maximum amount of resin a player can hold."
                                    }
                                >
                                    <input
                                        type={"number"}
                                        placeholder={"160"}
                                        id={
                                            "server.game.gameOptions.resinOptions.cap"
                                        }
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={
                                        "game.gameOptions.resinOptions.rechargeTime"
                                    }
                                    description={
                                        "The time it takes for resin to recharge."
                                    }
                                >
                                    <input
                                        type={"number"}
                                        placeholder={"480"}
                                        id={
                                            "server.game.gameOptions.resinOptions.rechargeTime"
                                        }
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"game.joinOptions.welcomeEmotes"}
                                    description={
                                        "Set of emote IDs to send to the player when they join the game. Separate with commas."
                                    }
                                >
                                    <input
                                        type={"text"}
                                        placeholder={"1,2,3"}
                                        id={
                                            "server.game.joinOptions.welcomeEmotes"
                                        }
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={
                                        "game.joinOptions.welcomeMessage"
                                    }
                                    description={
                                        "The message to send to the player when they join the game."
                                    }
                                >
                                    <textarea
                                        placeholder={"Welcome to the server!"}
                                        id={
                                            "server.game.joinOptions.welcomeMessage"
                                        }
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"game.joinOptions.welcomeMail"}
                                    description={
                                        "The items to send to the player when they join the game."
                                    }
                                >
                                    <BasicButton
                                        text={"Add Item"}
                                        icon={
                                            <AiOutlinePlus
                                                size={20}
                                                id={"config-add-item"}
                                            />
                                        }
                                        onClick={() =>
                                            BasicModal.showModal(
                                                "config-add-item-modal"
                                            )
                                        }
                                    />

                                    {this.state.mailItems.length > 0 ? (
                                        <BasicButton
                                            text={`Mail Items: ${this.state.mailItems.length}`}
                                            color={"#d2592c"}
                                            onClick={() =>
                                                BasicModal.showModal(
                                                    "config-mail-list-modal"
                                                )
                                            }
                                        />
                                    ) : null}
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
                                        id={
                                            "server.game.serverAccount.avatarId"
                                        }
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
                                        id={
                                            "server.game.serverAccount.nameCardId"
                                        }
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={
                                        "game.serverAccount.adventureRank"
                                    }
                                    description={
                                        "The Adventure Rank of the server account."
                                    }
                                >
                                    <input
                                        type={"number"}
                                        placeholder={"60"}
                                        id={
                                            "server.game.serverAccount.adventureRank"
                                        }
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"game.serverAccount.worldLevel"}
                                    description={
                                        "The world level of the server account."
                                    }
                                >
                                    <input
                                        type={"number"}
                                        placeholder={"7"}
                                        id={
                                            "server.game.serverAccount.worldLevel"
                                        }
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"game.serverAccount.nickname"}
                                    description={
                                        "The nickname of the server account."
                                    }
                                >
                                    <input
                                        type={"text"}
                                        placeholder={"Server"}
                                        id={
                                            "server.game.serverAccount.nickname"
                                        }
                                    />
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
                                        "The different game servers a player can connect to."
                                    }
                                >
                                    <BasicButton
                                        text={"Add Region"}
                                        icon={<AiOutlinePlus size={20} />}
                                        id={"config-add-region"}
                                        onClick={() =>
                                            BasicModal.showModal(
                                                "config-add-region-modal"
                                            )
                                        }
                                    />

                                    {this.state.regions.length > 0 ? (
                                        <BasicButton
                                            text={`Regions: ${this.state.regions.length}`}
                                            color={"#d2592c"}
                                            onClick={() =>
                                                BasicModal.showModal(
                                                    "config-region-list-modal"
                                                )
                                            }
                                        />
                                    ) : null}
                                </ConfigField>

                                <ConfigField
                                    fieldName={"dispatch.defaultName"}
                                    description={
                                        "The name of the default region."
                                    }
                                >
                                    <input
                                        type={"text"}
                                        placeholder={"Grasscutter"}
                                        id={"server.dispatch.defaultName"}
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"dispatch.logRequests"}
                                    description={
                                        "The level of requests to log. (ALL, MISSING, WHITELIST, BLACKLIST, NONE)"
                                    }
                                >
                                    <select
                                        id={"server.dispatch.logRequests"}
                                        defaultValue={"NONE"}
                                    >
                                        <option value={"ALL"}>ALL</option>
                                        <option value={"MISSING"}>
                                            MISSING
                                        </option>
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
                                    <select
                                        id={
                                            "server.debugMode.serverLoggerLevel"
                                        }
                                        defaultValue={"DEBUG"}
                                    >
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
                                    <select
                                        id={
                                            "server.debugMode.servicesLoggerLevel"
                                        }
                                        defaultValue={"INFO"}
                                    >
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
                                    <select
                                        id={"server.debugMode.logPackets"}
                                        defaultValue={"ALL"}
                                    >
                                        <option value={"ALL"}>ALL</option>
                                        <option value={"MISSING"}>
                                            MISSING
                                        </option>
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
                                    <input
                                        type={"checkbox"}
                                        id={
                                            "server.debugMode.isShowPacketPayload"
                                        }
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"debugMode.isShowLoopPackets"}
                                    description={
                                        "Whether or not to show the loop packets."
                                    }
                                >
                                    <input
                                        type={"checkbox"}
                                        id={
                                            "server.debugMode.isShowLoopPackets"
                                        }
                                    />
                                </ConfigField>

                                <ConfigField
                                    fieldName={"debugMode.logRequests"}
                                    description={
                                        "The level of requests to log. (ALL, MISSING, WHITELIST, BLACKLIST, NONE)"
                                    }
                                >
                                    <select
                                        id={"server.debugMode.logRequests"}
                                        defaultValue={"ALL"}
                                    >
                                        <option value={"ALL"}>ALL</option>
                                        <option value={"MISSING"}>
                                            MISSING
                                        </option>
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

                        <BasicButton
                            text={"Generate"}
                            onClick={() => this.generateConfig()}
                            className={"ConfigGen_Container_GenerateButton"}
                            color={"#1969c9"}
                        />

                        <div className={"ConfigGen_Container_GeneratedConfig"}>
                            {this.state.config !== null ? (
                                <>
                                    <div
                                        className={
                                            "ConfigGen_Container_GeneratedConfig_Buttons"
                                        }
                                    >
                                        <BasicButton
                                            text={"Copy"}
                                            icon={<BiCopy />}
                                            onClick={this.copyConfig}
                                            color={"#c95719"}
                                        />
                                        <BasicButton
                                            text={"Download"}
                                            icon={<BiDownload />}
                                            onClick={this.downloadConfig}
                                            color={"#6ec919"}
                                        />
                                    </div>
                                    <SyntaxHighlighter
                                        language={"json"}
                                        style={darcula}
                                        wrapLines={true}
                                    >
                                        {JSON.stringify(
                                            this.state.config,
                                            null,
                                            2
                                        )}
                                    </SyntaxHighlighter>
                                </>
                            ) : null}
                        </div>
                    </div>
                </div>

                <BasicModal
                    id={"config-add-item-modal"}
                    onSubmit={() => this.addListItem("MailItem")}
                    buttonText={"Add"}
                >
                    <p>Item ID</p>
                    <input
                        type={"number"}
                        id={"config-add-item-id"}
                        placeholder={"10000001"}
                    />
                    <p>Item Count</p>
                    <input
                        type={"number"}
                        id={"config-add-item-count"}
                        placeholder={"1"}
                    />
                    <p>Item Level</p>
                    <input
                        type={"number"}
                        id={"config-add-item-level"}
                        placeholder={"1"}
                    />
                </BasicModal>

                <BasicModal
                    id={"config-add-region-modal"}
                    onSubmit={() => this.addListItem("Region")}
                    buttonText={"Add"}
                >
                    <p>Region Name</p>
                    <input
                        type={"text"}
                        id={"config-add-region-name"}
                        placeholder={"Grasscutter"}
                    />
                    <p>Region Title</p>
                    <input
                        type={"text"}
                        id={"config-add-region-title"}
                        placeholder={"Grasscutter"}
                    />
                    <p>Region IP Address</p>
                    <input
                        type={"text"}
                        id={"config-add-region-ip"}
                        placeholder={"127.0.0.1"}
                    />
                    <p>Region Port</p>
                    <input
                        type={"number"}
                        id={"config-add-region-port"}
                        placeholder={"9000"}
                    />
                </BasicModal>

                <BasicModal id={"config-mail-list-modal"}>
                    <div className={"config-mail-list"}>
                        {this.state.mailItems.map((item, index) => (
                            <ListItem
                                type={"MailItem"}
                                item={item}
                                onDelete={() => this.deleteListItem(item)}
                                key={index}
                            />
                        ))}
                    </div>
                </BasicModal>

                <BasicModal id={"config-region-list-modal"}>
                    <div className={"config-region-list"}>
                        {this.state.regions.map((region, index) => (
                            <ListItem
                                type={"Region"}
                                item={region}
                                onDelete={() => this.deleteListItem(region)}
                                key={index}
                            />
                        ))}
                    </div>
                </BasicModal>
            </>
        );
    }
}

export default ConfigGen;
