import { Component } from "react";
import { Navbar } from "../components/Layout/Navbar/index";
import { SEO } from "../components/Layout/SEO/index";

export default class Changelog extends Component {
    static async getInitialProps() {
        const response = await fetch('https://api.github.com/repos/loom4k/webpage/commits')
        const data = await response.json()

        return {
            commits: data.splice(0, 20)
        }
    }

    render() {
        return (
            <>
                <SEO />
                <Navbar />
                <div className="p-12">
                    <h1 className="text-5xl text-center font-bold mb-4">Changelog</h1>
                    <br />
                    {
                        this.props.commits.map((commit, index) => {
                            return (
                                <div key={index} className="flex flex-col justify-center items-center">
                                    <div className="w-2/3 mb-6 p-6 bg-slate-50 hover:bg-slate-100 rounded-lg">
                                        <div className="text-lg"><span className="font-bold">{commit.commit.message.split('\n\n')[0]}</span> by {commit.commit.author.name} <i>({commit.commit.author.email})</i></div>
                                        <p>{commit.commit.message.split('\n\n')[1]}</p>
                                        <br />
                                        <p>{commit.commit.author.date.split('T')[0]} {commit.commit.author.date.split('T')[1].split('Z')}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}