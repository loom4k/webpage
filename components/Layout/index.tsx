import { FC, ReactNode } from "react"

export interface ILayout {
    title: string
    children: ReactNode
}

export const Layout: FC<ILayout> = ({ title, children }) => {
    return (
        <></>
    )
}