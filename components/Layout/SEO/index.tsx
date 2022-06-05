import { FC } from "react"

export const SEO: FC = () => {
    return (
        <>
            <title>
                loom4k.me
            </title>
            <meta content="Loom4k's Portfolio" property="og:title" />
            <meta content="I am a 15 year old software developer based in Montreal, Canada. I work with Java, Typescript and C#. Check out my website for more information!" property="og:description" />
            <meta content="./assets/readme/preview.png" property="og:image" />
            <meta content="https://loom4k.me" property="og:url" />
            <meta content="#22c55e" data-react-helmet="true" name="theme-color" />
        </>
    )
}