import axios from "axios";
import {GitHubRelease} from "./entities.ts";
import { useEffect } from "react";

export async function fetchLatestVersion(repository: string): Promise<Array<string | null> | null> {
    const url = `https://api.github.com/repos/${repository}/releases?per_page=1&include_prereleases=true`;

    try {
        const response = await axios.get<GitHubRelease[]>(url);
        const latestRelease = response.data[0];
        const latestVersion = latestRelease ? latestRelease.tag_name : null;
        console.log('Latest Version:', latestVersion);
        console.log(response.data[0])
        return [latestVersion, latestRelease.body];
    } catch (error) {
        console.error('Error fetching latest version:', error);
        return [null, null];
    }
}

export function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function useTitle(title: string) {
    useEffect(() => {
      const prevTitle = document.title;
      document.title = title;
      return () => {
        document.title = prevTitle;
      };
    }, [title]);
  }