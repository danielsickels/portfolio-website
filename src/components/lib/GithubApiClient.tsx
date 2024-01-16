class GitHubApiClient {
    async fetchRepoData(repoUrl: string) {
        const repoName = this.extractRepoName(repoUrl);
        const apiUrl = `https://api.github.com/repos/${repoName}`;
        const languagesUrl = `https://api.github.com/repos/${repoName}/languages`;

        try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (response.status !== 200) {
            throw new Error(`GitHub API responded with status: ${response.status}`);
        }

        // Fetching languages used in the repository
        const languagesResponse = await fetch(languagesUrl);
        const languagesData = await languagesResponse.json();

        if (languagesResponse.status !== 200) {
            throw new Error(
            `GitHub API responded with status: ${languagesResponse.status}`
            );
        }

        return {
            name: data.name,
            description: data.description,
            languages: Object.keys(languagesData), // Get all languages
            url: repoUrl,
            // other relevant data...
        };
        } catch (error) {
        console.error("Error fetching repository data:", error);
        return null;
        }
    }

    extractRepoName(url: string): string {
        const match = url.match(/github\.com\/(.+\/.+)/);
        return match ? match[1] : "";
    }
    }

    export default GitHubApiClient;