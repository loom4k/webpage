import { RepoCard } from "./RepoCard"

export const About = () => {
    return (
        <>
            <section 
                id="projects"
                className="min-h-screen py-16 bg-white text-black"
            >
                <p className="mx-auti font-semibold text-green-500 text-center">Here are some of...</p>
                <h1 className="text-4xl -mt-1 mb-10 mx-auto font-semibold font-heading text-center">My best projects</h1>

                <div className="container mx-auto mb-12">
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                        <RepoCard 
                            name={"My Portfolio"} 
                            description={"This very website. Made with Next, React & Tailwind! Took me a bit of time to get everything working but definitely worth it!"} link={"https://github.com/loom4k/webpage"} 
                            stack={["typescript", "nextjs", "react", "tailwind"]}
                        />
                        <RepoCard 
                            name={"Coming soon™"} 
                            description={"Secret in development game ;)"} link={"https://github.com/loom4k/webpage"} 
                            stack={["c++", "c#"]}
                        />
                        <RepoCard 
                            name={"Crosswalk & Machine Learning"}
                            description={"A program and device that allow blind users to cross roads safly by detecting crosswalks"} link={"https://github.com/loom4k/crosswalk-ai"} stack={["python", "tensorflow"]}/>
                    </div>
                </div>
            </section>
        </>
    )
}