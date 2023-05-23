const grasscutter: string = "grasscutters/grasscutter";
const cultivation: string = "grasscutters/cultivation";
const gc_docs: string = "grasscutters/grasscutter-docs";

/**
 * Get the number of stars, forks and watchers of the repo
 */
export async function getStatsAsync() {
    const res = await fetch(`https://api.github.com/repos/${grasscutter}`, {
        headers: { Accept: "application/vnd.github.v3+json" }
    });

    const data = await res.json();

    return {
        stars: data.stargazers_count,
        forks: data.forks_count,
        watchers: data.subscribers_count
    };
}

/**
 * Fetch the latest release of the repos
 */
export async function getLatestReleaseAsync() {
    const resGC = await fetch(
        `https://api.github.com/repos/${grasscutter}/releases/latest`,
        {
            headers: { Accept: "application/vnd.github.v3+json" }
        }
    );

    const dataGC = await resGC.json();

    const resC = await fetch(
        `https://api.github.com/repos/${cultivation}/releases/latest`,
        {
            headers: { Accept: "application/vnd.github.v3+json" }
        }
    );

    const dataC = await resC.json();

    for (const asset of dataC.assets) {
        if (asset.browser_download_url.endsWith(".msi")) {
            dataC.assets[0] = asset;
            break;
        }
    }

    return {
        grasscutter: {
            version: dataGC.tag_name,
            url: dataGC.assets[0].browser_download_url
        },
        cultivation: {
            version: dataC.tag_name,
            url: dataC.assets[0].browser_download_url
        }
    };
}

import { Config } from "@app/types";

/**
 * Returns the default config
 */
export function getDefaultConfig(): Config {
    return {
        folderStructure: {
            resources: "./resources/",
            data: "./data/",
            packets: "./packets/",
            scripts: "resources:Scripts/",
            plugins: "./plugins/"
        },
        databaseInfo: {
            server: {
                connectionUri: "mongodb://localhost:27017",
                collection: "grasscutter"
            },
            game: {
                connectionUri: "mongodb://localhost:27017",
                collection: "grasscutter"
            }
        },
        language: {
            language: "en_US",
            fallback: "en_US",
            document: "EN"
        },
        account: {
            autoCreate: false,
            EXPERIMENTAL_RealPassword: false,
            defaultPermissions: [],
            maxPlayers: -1
        },
        server: {
            debugWhitelist: [],
            debugBlacklist: [],
            runMode: "HYBRID",
            logCommands: false,
            http: {
                bindAddress: "0.0.0.0",
                bindPort: 443,
                accessAddress: "127.0.0.1",
                accessPort: 0,
                encryption: {
                    useEncryption: true,
                    useInRouting: true,
                    keystore: "./keystore.p12",
                    keystorePassword: "123456"
                },
                policies: {
                    cors: {
                        enabled: false,
                        allowedOrigins: ["*"]
                    }
                },
                files: {
                    indexFile: "./index.html",
                    errorFile: "./error.html"
                }
            },
            game: {
                bindAddress: "0.0.0.0",
                bindPort: 22102,
                accessAddress: "127.0.0.1",
                accessPort: 0,
                loadEntitiesForPlayerRange: 100,
                enableScriptInBigWorld: false,
                enableConsole: true,
                kcpInterval: 20,
                logPackets: "NONE",
                isShowPacketPayload: false,
                isShowLoopPackets: false,
                gameOptions: {
                    inventoryLimits: {
                        weapons: 2000,
                        relics: 2000,
                        materials: 2000,
                        furniture: 2000,
                        all: 30000
                    },
                    avatarLimits: {
                        singlePlayerTeam: 4,
                        multiPlayerTeam: 4
                    },
                    sceneEntityLimit: 1000,
                    watchGachaConfig: false,
                    enableShopItems: true,
                    staminaUsage: true,
                    energyUsage: true,
                    fishhookTeleport: true,
                    resinOptions: {
                        resinUsage: false,
                        cap: 160,
                        rechargeTime: 480
                    }
                },
                serverAccount: {
                    avatarId: 10000007,
                    nameCardId: 210001,
                    adventureRank: 1,
                    worldLevel: 0,
                    nickname: "Server",
                    signature: "Welcome to Grasscutter!"
                },
                joinOptions: {
                    welcomeEmotes: [2007, 1002, 4010],
                    welcomeMessage: "Welcome to a Grasscutter server!",
                    welcomeMail: {
                        title: "Welcome to Grasscutter!",
                        content:
                            'Hi there!\\r\nFirst of all, welcome to Grasscutter. If you have any issues, please let us know so that Lawnmower can help you! \\r\n\\r\nCheck out our:\\r\n<type="browser" text="Discord" href="https://discord.gg/T5vZU6UyeG"/>',
                        sender: "Lawnmower",
                        items: [
                            {
                                itemId: 13509,
                                itemCount: 1,
                                itemLevel: 1
                            },
                            {
                                itemId: 201,
                                itemCount: 99999,
                                itemLevel: 1
                            }
                        ]
                    }
                }
            },
            dispatch: {
                regions: [],
                defaultName: "Grasscutter",
                logRequests: "NONE"
            },
            debugMode: {
                serverLoggerLevel: "DEBUG",
                servicesLoggersLevel: "INFO",
                logPackets: "ALL",
                isShowPacketPayload: false,
                isShowLoopPackets: false,
                logRequests: "ALL"
            }
        }
    };
}

import { DocsObject } from "@app/types";

/**
 * Fetches all the files in the docs repository
 */
export async function getDocsAsync(): Promise<DocsObject[]> {
    const res = await fetch(
        `https://api.github.com/repos/${gc_docs}/contents/`,
        {
            headers: { Accept: "application/vnd.github.v3+json" }
        }
    );

    return await res.json();
}

/**
 * Fetches the content of the docs file
 * @param download_url The download url of the file
 */
export async function getDocsContentAsync(
    download_url: string
): Promise<string> {
    const res = await fetch(download_url);

    return await res.text();
}

/**
 * Fetches the README.md file from grasscutter
 */
export async function getReadmeAsync(): Promise<string> {
    const res = await fetch(
        "https://raw.githubusercontent.com/Grasscutters/Grasscutter/development/README.md"
    );

    console.log(res);

    return await res.text();
}
