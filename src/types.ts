export type RunMode = "HYBRID" | "DISPATCH_ONLY" | "GAME_ONLY";
export type ServerDebugMode =
    | "ALL"
    | "MISSING"
    | "WHITELIST"
    | "BLACKLIST"
    | "NONE";
export type LogLevel =
    | "OFF"
    | "ERROR"
    | "WARN"
    | "INFO"
    | "DEBUG"
    | "TRACE"
    | "ALL";
export type MailItem = {
    itemId: number;
    itemCount: number;
    itemLevel: number;
};
export type Region = {
    Name: string;
    Title: string;
    Ip: string;
    Port: number;
};

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
        runMode: RunMode;
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
            logPackets: ServerDebugMode;
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
                    items: MailItem[];
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
            regions: Region[];
            defaultName: string;
            logRequests: ServerDebugMode;
        };
        debugMode: {
            serverLoggerLevel: LogLevel;
            servicesLoggersLevel: LogLevel;
            logPackets: ServerDebugMode;
            isShowPacketPayload: boolean;
            isShowLoopPackets: boolean;
            logRequests: ServerDebugMode;
        };
    };
};

export type DocsObject = {
    name: string;
    path: string;
    sha: string;
    size: number;
    url: string;
    html_url: string;
    git_url: string;
    download_url: string;
    type: string;
    _links: {
        self: string;
        git: string;
        html: string;
    };
};
