import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import hljs from "highlight.js";

import { IPostData } from "@libs/graphql";
import { Layout } from "@components/Layout";
import Link from "next/link";

export interface IPostProps {
    post: IPostData
}

const PostPage: NextPage<IPostProps> = ({ post }) => {
    const router = useRouter()
    
    useEffect(() => {
        const codeBlocks = document.querySelectorAll('.highlight')
        for(const element of codeBlocks) {
            const content = element.getAttribute(
                "data-snippet-clipboard-copy-content"
            )
            const highlighted = hljs.highlightAuto(content as string).value

            element.innerHTML = `<pre>${highlighted}</pre>`
        }
    }, [])

    return (
        <Layout title="hi">
            <div className="leading-normal tracking-normal min-h-screen">
                <div className="container w-full md:max-w-3xl mx-auto pt-20">
                    <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
                        <p className="text-base md:text-sm font-bold">
                            <Link
                                href="/blog"
                            >
                                <p>hi!!!</p>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PostPage;
