export interface GitHubRelease {
    tag_name: string;
    name: string;
    body: string;
    html_url: string;
    prerelease: boolean;
}

export interface WeaveIndex {
    timestamp: string;
    developers: WeaveIndexDeveloper[];
}

export interface WeaveIndexDeveloper {
    name: string;
    projects: WeaveIndexProject[];
}

export interface WeaveIndexProject {
    name: string;
    description: string;
    url: string;
    repository: string;
}