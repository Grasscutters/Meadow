const repo: string = "grasscutters/grasscutter";

/**
 * Get the number of stars, forks and watchers of the repo
 */
export async function getStatsAsync() {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
        headers: { Accept: "application/vnd.github.v3+json" }
    });

    const data = await res.json();

    return {
        stars: data.stargazers_count,
        forks: data.forks_count,
        watchers: data.subscribers_count
    }
}
