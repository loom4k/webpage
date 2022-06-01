import { FC, useEffect, useState } from "react"
import { Octokit } from "@octokit/core"

function Changelog({ commits }) {
    return (
        <>
            {commits}
        </>
    )
}

export async function getStaticProps() {
    const client = new Octokit({ auth: process.env.GITHUB_TOKEN })
    const commits = await client.request(
        `GET /repos/{owner}/{repo}/commits`, { owner: 'loom4k', repo: 'webpage', per_page: 5 }
    )

    console.log(commits)

    return {
        props: {
            commits
        }
    }
}

export default Changelog