export type Config = {
    folderStructure: {
        resources: string;
        data: string;
        packets: string;
        scripts: string;
        plugins: string;
    };
    databaseInfo: {
        server: {
            connectionUri: string;
            collection: string;
        };
        game: {
            connectionUri: string;
            collection: string;
        };
    };
    language: {
        language: string;
        fallback: string;
        document: string;
    };
    account: {
        autoCreate: boolean;
        EXPERIMENTAL_RealPassword: boolean;
        defaultPermissions: string[];
        maxPlayers: number;
    };
    server: {
        debugWhitelist: number[];
        debugBlacklist: number[];
        runMode: "HYBRID" | "DISPATCH_ONLY" | "GAME_ONLY";
        logCommands: boolean;
        http: {
            bindAddress: string;
            bindPort: number;
            accessAddress: string;
            accessPort: number;
            encryption: {
                useEncryption: boolean;
                useInRouting: boolean;
                keystore: string;
                keystorePassword: string;
            };
            policies: {
                cors: {
                    enabled: boolean;
                    allowedOrigins: string[];
                };
            };
            files: {
                indexFile: string;
                errorFile: string;
            };
        };
        game: {
            bindAddress: string;
            bindPort: number;
            accessAddress: string;
            accessPort: number;
            loadEntitiesForPlayerRange: number;
            enableScriptInBigWorld: boolean;
            enableConsole: boolean;
            kcpInterval: number;
            logPackets: "ALL" | "MISSING" | "WHITELIST" | "BLACKLIST" | "NONE";
            isShowPacketPayload: boolean;
            isShowLoopPackets: boolean;
            gameOptions: {
                inventoryLimits: {
                    weapons: number;
                    relics: number;
                    materials: number;
                    furniture: number;
                    all: number;
                };
                avatarLimits: {
                    singlePlayerTeam: number;
                    multiPlayerTeam: number;
                };
                sceneEntityLimit: number;
                watchGachaConfig: boolean;
                enableShopItems: boolean;
                staminaUsage: boolean;
                energyUsage: boolean;
                fishhookTeleport: boolean;
                resinOptions: {
                    resinUsage: boolean;
                    cap: number;
                    rechargeTime: number;
                };
            };
            joinOptions: {
                welcomeEmotes: number[];
                welcomeMessage: string;
                welcomeMail: {
                    title: string;
                    content: string;
                    sender: string;
                    items: {
                        itemId: number;
                        itemCount: number;
                        itemLevel: number;
                    };
                };
            };
            serverAccount: {
                avatarId: number;
                nameCardId: number;
                adventureRank: number;
                worldLevel: number;
                nickname: string;
                signature: string;
            };
        };
        dispatch: {
            regions: {
                Name: string;
                Title: string;
                Ip: string;
                Port: number;
            };
            defaultName: string;
            logRequests: "ALL" | "MISSING" | "WHITELIST" | "BLACKLIST" | "NONE";
        };
        debugMode: {
            serverLoggerLevel: "OFF" | "ERROR" | "WARN" | "INFO" | "DEBUG" | "TRACE" | "ALL";
            servicesLoggersLevel: "OFF" | "ERROR" | "WARN" | "INFO" | "DEBUG" | "TRACE" | "ALL";
            logPackets: "ALL" | "MISSING" | "WHITELIST" | "BLACKLIST" | "NONE";
            isShowPacketPayload: boolean;
            isShowLoopPackets: boolean;
            logRequests: "ALL" | "MISSING" | "WHITELIST" | "BLACKLIST" | "NONE";
        };
    };
};
