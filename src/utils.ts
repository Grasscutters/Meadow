const grasscutter: string = "grasscutters/grasscutter";
const cultivation: string = "grasscutters/cultivation";

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
    }
}

/**
 * Fetch the latest release of the repos
 */
export async function getLatestReleaseAsync() {
    const resGC = await fetch(`https://api.github.com/repos/${grasscutter}/releases/latest`, {
        headers: { Accept: "application/vnd.github.v3+json" }
    });

    const dataGC = await resGC.json();

    const resC = await fetch(`https://api.github.com/repos/${cultivation}/releases/latest`, {
        headers: { Accept: "application/vnd.github.v3+json" }
    });

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
    }
}
