import { Component } from "react";
import { Link } from "next/link"

export default class Changelog extends Component {
    static async getInitialProps() {
        const response = await fetch('https://api.github.com/repos/loom4k/webpage/commits')
        const data = await response.json()

        return {
            commits: data
        }
    }

    render() {
        return (
            <div className="p-12">
                {
                    this.props.commits.map((commit, index) => {
                        return (
                            <div className="flex flex-col justify-center items-center">
                                <div key={index} className="w-2/3 mb-6 p-6 bg-slate-50 hover:bg-slate-100 rounded-lg">
                                    <div className="text-lg"><span className="font-bold">{commit.commit.message}</span> by {commit.commit.author.name} <i>({commit.commit.author.email})</i></div>
                                    <div className="flex flex-col justify-center items-center">
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}