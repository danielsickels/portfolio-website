class GitHubApiClient {
  private getHeaders() {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "Portfolio-Website",
    };

    // Add authentication if token is available
    const token =
      process.env.NEXT_PUBLIC_GITHUB_TOKEN || process.env.GITHUB_TOKEN;
    if (token) {
      headers["Authorization"] = `token ${token}`;
    }

    return headers;
  }

  async fetchRepoData(repoUrl: string) {
    const repoName = this.extractRepoName(repoUrl);
    const apiUrl = `https://api.github.com/repos/${repoName}`;
    const languagesUrl = `https://api.github.com/repos/${repoName}/languages`;

    try {
      const headers = this.getHeaders();

      const response = await fetch(apiUrl, { headers });

      if (response.status === 403) {
        const rateLimitRemaining = response.headers.get(
          "X-RateLimit-Remaining"
        );
        const rateLimitReset = response.headers.get("X-RateLimit-Reset");
        console.warn(
          `GitHub API rate limit exceeded. Remaining: ${rateLimitRemaining}, Reset: ${rateLimitReset}`
        );
        return null;
      }

      if (response.status !== 200) {
        console.error(
          `GitHub API responded with status: ${response.status} for ${repoName}`
        );
        return null;
      }

      const data = await response.json();

      // Fetching languages used in the repository
      const languagesResponse = await fetch(languagesUrl, { headers });

      if (languagesResponse.status !== 200) {
        console.warn(
          `Could not fetch languages for ${repoName}, using empty array`
        );
        return {
          name: data.name,
          description: data.description,
          languages: [], // Fallback to empty array if languages can't be fetched
          url: repoUrl,
        };
      }

      const languagesData = await languagesResponse.json();

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
