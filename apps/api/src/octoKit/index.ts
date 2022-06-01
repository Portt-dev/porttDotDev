import { Octokit } from "@octokit/core";
// this is simply a config file for init octokit
export const github = (token: string): Octokit => new Octokit({ auth: token });
